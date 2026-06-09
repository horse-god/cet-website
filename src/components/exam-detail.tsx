import Link from "next/link";
import { ArrowLeft, Headphones, Download, FileText, BookOpen, Music } from "lucide-react";

// ─── Types ───────────────────────────────────────────────

interface ExamInfo {
  label: string;    // "2025年6月 第1套"
  year: number;
  month: number;
  setLabel: string; // "1", "2", "3", "2-3"
  hasAudio: boolean;
}

interface ExamDetailProps {
  exam: ExamInfo;
  level: "cet4" | "cet6";
  levelLabel: string;
  testPdf: string;
  answerPdf: string;
  audioMp3: string | null;
}

// ─── Helpers ─────────────────────────────────────────────

/** 生成有意义的下载文件名 */
function downloadName(
  level: "cet4" | "cet6",
  year: number,
  month: number,
  setLabel: string,
  type: "真题" | "答案解析" | "听力"
): string {
  const levelName = level === "cet4" ? "CET4" : "CET6";
  const ext = type === "听力" ? "mp3" : "pdf";
  return `${levelName}_${year}年${month}月_第${setLabel}套_${type}.${ext}`;
}

// ─── Main Component ──────────────────────────────────────

export default function ExamDetail({
  exam,
  level,
  levelLabel,
  testPdf,
  answerPdf,
  audioMp3,
}: ExamDetailProps) {
  const listHref = level === "cet4" ? "/library/cet4" : "/library/cet6";
  const levelName = level === "cet4" ? "四级" : "六级";

  const testDlName = downloadName(level, exam.year, exam.month, exam.setLabel, "真题");
  const answerDlName = downloadName(level, exam.year, exam.month, exam.setLabel, "答案解析");
  const audioDlName = audioMp3
    ? downloadName(level, exam.year, exam.month, exam.setLabel, "听力")
    : null;

  return (
    <div className="animate-fade-in py-8">
      <div className="container mx-auto max-w-3xl px-4">
        {/* ── 返回链接 ── */}
        <Link
          href={listHref}
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          返回{levelName}真题列表
        </Link>

        {/* ── 标题区 ── */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-soft text-primary text-xs font-semibold rounded-full">
              {levelLabel}
            </span>
            {exam.hasAudio && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                <Headphones className="h-3 w-3" />
                含听力
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {exam.label}
          </h1>
          <p className="text-muted mt-2 text-sm md:text-base">
            {exam.year} 年 {exam.month} 月 · 大学英语{levelName}考试真题
          </p>
        </header>

        {/* ── 主体内容 ── */}
        <div className="space-y-5">
          {/* 听力音频 */}
          {audioMp3 && audioDlName && (
            <section className="rounded-2xl border border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
              {/* 标题栏 */}
              <div className="px-5 py-4 border-b border-green-200 dark:border-green-800 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-500 text-white flex items-center justify-center shadow-sm">
                  <Music className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h2 className="font-semibold text-base">听力音频</h2>
                  <p className="text-xs text-muted truncate">
                    {levelName} · {exam.year}年{exam.month}月 · 第{exam.setLabel}套
                  </p>
                </div>
              </div>

              {/* 音频播放器 */}
              <div className="px-5 py-4">
                <audio controls className="w-full" preload="metadata">
                  <source src={audioMp3} type="audio/mpeg" />
                  您的浏览器不支持音频播放。
                </audio>
              </div>

              {/* 下载按钮 */}
              <div className="px-5 pb-5">
                <a
                  href={audioMp3}
                  download={audioDlName}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm font-medium transition-colors shadow-sm"
                >
                  <Download className="h-4 w-4" />
                  下载 MP3
                </a>
                <span className="ml-3 text-xs text-muted font-mono">
                  {audioDlName}
                </span>
              </div>
            </section>
          )}

          {/* 真题试卷 */}
          <PdfDownloadCard
            icon={<FileText className="h-5 w-5" />}
            title="真题试卷"
            description={`${exam.year}年${exam.month}月 · 第${exam.setLabel}套 · 大学英语${levelName}真题`}
            pdf={testPdf}
            downloadName={testDlName}
          />

          {/* 分隔 */}
          <div className="flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted font-medium select-none">
              答案解析
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* 答案解析 */}
          <PdfDownloadCard
            icon={<BookOpen className="h-5 w-5" />}
            title="答案解析"
            description={`${exam.year}年${exam.month}月 · 第${exam.setLabel}套 · 大学英语${levelName}答案解析`}
            pdf={answerPdf}
            downloadName={answerDlName}
          />
        </div>

        {/* ── 底部提示 ── */}
        <footer className="mt-8 text-center">
          <p className="text-xs text-muted">
            所有资料完全免费，仅供个人学习使用
          </p>
        </footer>
      </div>
    </div>
  );
}

// ─── PDF 下载卡片（纯 HTML + CSS，零 JS）─────────────────

function PdfDownloadCard({
  icon,
  title,
  description,
  pdf,
  downloadName,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  pdf: string;
  downloadName: string;
}) {
  return (
    <section className="rounded-2xl border border-border bg-white dark:bg-slate-800/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* 标题栏 */}
      <div className="px-5 py-4 border-b border-border flex items-center gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center">
          {icon}
        </div>
        <div className="min-w-0">
          <h2 className="font-semibold text-base">{title}</h2>
          <p className="text-xs text-muted truncate">{description}</p>
        </div>
      </div>

      {/* 操作区 */}
      <div className="px-5 py-5 flex flex-col sm:flex-row sm:items-center gap-3">
        {/* 主下载按钮 */}
        <a
          href={pdf}
          download={downloadName}
          className="inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-primary hover:bg-primary-hover text-white rounded-xl text-sm font-semibold transition-colors shadow-sm active:scale-[0.98]"
        >
          <Download className="h-4 w-4" />
          下载 {title}
        </a>

        {/* 文件名提示 */}
        <span className="text-xs text-muted font-mono break-all">
          {downloadName}
        </span>
      </div>
    </section>
  );
}
