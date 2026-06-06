/**
 * 从 wehuster.com 爬取四六级真题列表，下载 PDF + MP3 到 public/library/
 * 用法: npx tsx scripts/sync-from-wehuster.ts
 */
import * as https from "https";
import * as fs from "fs";
import * as path from "path";

const BASE = "www.wehuster.com";
const OUT_DIR = path.resolve(__dirname, "..", "public", "library");

interface ExamEntry {
  level: "cet4" | "cet6";
  id: string;        // e.g. "cet4_2025_06_1"
  hasAns: boolean;
  hasAudio: boolean;  // will be determined by trying download
}

function get(urlPath: string): Promise<string> {
  return new Promise((resolve) => {
    https.get(
      {
        hostname: BASE,
        path: urlPath,
        rejectUnauthorized: false,
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
      },
      (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve(data));
      }
    ).on("error", (e) => resolve("")).setTimeout(15000, function(this: any) { this.destroy(); resolve(""); });
  });
}

async function downloadFile(urlPath: string, destPath: string): Promise<boolean> {
  if (fs.existsSync(destPath)) {
    console.log(`  ⏭ 已存在: ${path.basename(destPath)}`);
    return true;
  }
  return new Promise((resolve) => {
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const file = fs.createWriteStream(destPath);
    https.get(
      {
        hostname: BASE,
        path: urlPath,
        rejectUnauthorized: false,
        headers: { "User-Agent": "Mozilla/5.0" },
      },
      (res) => {
        if (res.statusCode !== 200) {
          file.close();
          fs.unlinkSync(destPath);
          resolve(false);
          return;
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          const size = fs.statSync(destPath).size;
          if (size < 1000) {
            fs.unlinkSync(destPath);
            resolve(false);
          } else {
            console.log(`  ✅ ${path.basename(destPath)} (${(size / 1024).toFixed(0)}KB)`);
            resolve(true);
          }
        });
      }
    ).on("error", () => {
      try { fs.unlinkSync(destPath); } catch {}
      resolve(false);
    }).setTimeout(30000, function(this: any) { this.destroy(); resolve(false); });
  });
}

async function main() {
  console.log("🔍 爬取 wehuster.com 真题列表...\n");

  // 爬取 CET4 和 CET6 列表页
  const [cet4Html, cet6Html] = await Promise.all([get("/cet4"), get("/cet6")]);

  // 解析所有链接（不含 _ans 的是试卷页，含 _ans 的是答案页）
  const allCET4Links = [...new Set((cet4Html.match(/href="\/cet4\/[^"]+"/g) || []).map((s) => s.replace(/href="\/cet4\/|\"/g, "")))];
  const allCET6Links = [...new Set((cet6Html.match(/href="\/cet6\/[^"]+"/g) || []).map((s) => s.replace(/href="\/cet6\/|\"/g, "")))];

  // 分类：试卷 vs 答案
  function parseLinks(links: string[], level: "cet4" | "cet6"): ExamEntry[] {
    const examMap = new Map<string, { hasAns: boolean }>();
    for (const link of links) {
      if (link.endsWith("_ans")) {
        const baseId = link.replace("_ans", "");
        if (examMap.has(baseId)) {
          examMap.get(baseId)!.hasAns = true;
        } else {
          examMap.set(baseId, { hasAns: true });
        }
      } else {
        if (examMap.has(link)) {
          examMap.get(link)!.hasAns = true; // already set or will be
        } else {
          examMap.set(link, { hasAns: false });
        }
      }
    }
    return Array.from(examMap.entries()).map(([id, info]) => ({
      level,
      id,
      hasAns: info.hasAns,
      hasAudio: false,
    }));
  }

  const cet4Exams = parseLinks(allCET4Links, "cet4");
  const cet6Exams = parseLinks(allCET6Links, "cet6");
  const allExams = [...cet4Exams, ...cet6Exams];

  console.log(`📊 四级: ${cet4Exams.length} 套, 六级: ${cet6Exams.length} 套, 合计: ${allExams.length} 套\n`);

  // 下载文件
  console.log("📥 开始下载文件...\n");
  let pdfCount = 0;
  let mp3Count = 0;
  let ansCount = 0;

  for (const exam of allExams) {
    const { level, id } = exam;
    const shortId = id.replace(/^cet[46]_/, ""); // "cet4_2025_06_1" → "2025_06_1"
    const destDir = path.join(OUT_DIR, level, shortId);

    console.log(`📄 ${id}`);

    // 下载试卷 PDF
    const pdfOk = await downloadFile(`/static/${level}/${id}.pdf`, path.join(destDir, "test.pdf"));
    if (pdfOk) pdfCount++;

    // 下载听力 MP3
    const mp3Ok = await downloadFile(`/static/${level}/${id}.mp3`, path.join(destDir, "listening.mp3"));
    if (mp3Ok) { mp3Count++; exam.hasAudio = true; }

    // 下载答案 PDF
    if (exam.hasAns) {
      const ansOk = await downloadFile(`/static/${level}/${id}_ans.pdf`, path.join(destDir, "answer.pdf"));
      if (ansOk) ansCount++;
    }
  }

  // 生成 library.ts 数据文件
  console.log(`\n📝 生成数据文件...`);
  const dataEntries = allExams.map((e) => {
    const shortId = e.id.replace(/^cet[46]_/, "");
    return `  { level: '${e.level}', id: '${shortId}', hasAudio: ${e.hasAudio} },`;
  });

  console.log(`\n✅ 完成！`);
  console.log(`   试卷 PDF: ${pdfCount}/${allExams.length}`);
  console.log(`   答案 PDF: ${ansCount}`);
  console.log(`   听力 MP3: ${mp3Count}`);

  // 输出数据文件内容（复制到 src/lib/library.ts 的 RAW 数组中）
  const libPath = path.resolve(__dirname, "..", "src", "lib", "library-data.ts");
  fs.writeFileSync(libPath, dataEntries.join("\n"));
  console.log(`   数据文件已保存到: ${libPath}`);
}

main().catch(console.error);
