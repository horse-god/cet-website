// 真题库静态数据 — 从 wehuster.com 同步
// 数据文件由 scripts/sync-from-wehuster.ts 生成

export interface ExamPaper {
  level: "cet4" | "cet6";
  id: string;        // "2025_06_1" or "2023_03_2-3"
  year: number;
  month: number;
  setLabel: string;  // "1", "2", "3", "2-3"
  label: string;     // "2025年6月 第1套"
  hasAudio: boolean;
}

const RAW: { level: "cet4" | "cet6"; id: string; hasAudio?: boolean }[] = [
  { level: "cet4", id: "2025_06_1", hasAudio: true },
  { level: "cet4", id: "2025_06_2", hasAudio: true },
  { level: "cet4", id: "2025_06_3", hasAudio: false },
  { level: "cet4", id: "2025_12_1", hasAudio: true },
  { level: "cet4", id: "2025_12_2", hasAudio: true },
  { level: "cet4", id: "2025_12_3", hasAudio: false },
  { level: "cet4", id: "2024_06_1", hasAudio: true },
  { level: "cet4", id: "2024_06_2", hasAudio: true },
  { level: "cet4", id: "2024_06_3", hasAudio: false },
  { level: "cet4", id: "2024_12_1", hasAudio: true },
  { level: "cet4", id: "2024_12_2", hasAudio: true },
  { level: "cet4", id: "2024_12_3", hasAudio: false },
  { level: "cet4", id: "2023_03_1", hasAudio: true },
  { level: "cet4", id: "2023_03_2-3", hasAudio: false },
  { level: "cet4", id: "2023_06_1", hasAudio: true },
  { level: "cet4", id: "2023_06_2", hasAudio: true },
  { level: "cet4", id: "2023_06_3", hasAudio: false },
  { level: "cet4", id: "2023_12_1", hasAudio: true },
  { level: "cet4", id: "2023_12_2", hasAudio: true },
  { level: "cet4", id: "2023_12_3", hasAudio: false },
  { level: "cet4", id: "2022_06_1", hasAudio: true },
  { level: "cet4", id: "2022_06_2", hasAudio: false },
  { level: "cet4", id: "2022_06_3", hasAudio: false },
  { level: "cet4", id: "2022_09_1", hasAudio: true },
  { level: "cet4", id: "2022_09_2-3", hasAudio: false },
  { level: "cet4", id: "2022_12_1", hasAudio: true },
  { level: "cet4", id: "2022_12_2", hasAudio: true },
  { level: "cet4", id: "2022_12_3", hasAudio: false },
  { level: "cet4", id: "2021_06_1", hasAudio: true },
  { level: "cet4", id: "2021_06_2", hasAudio: true },
  { level: "cet4", id: "2021_06_3", hasAudio: false },
  { level: "cet4", id: "2021_12_1", hasAudio: true },
  { level: "cet4", id: "2021_12_2", hasAudio: true },
  { level: "cet4", id: "2021_12_3", hasAudio: false },
  { level: "cet4", id: "2020_07_1", hasAudio: true },
  { level: "cet4", id: "2020_09_1", hasAudio: true },
  { level: "cet4", id: "2020_09_2", hasAudio: false },
  { level: "cet4", id: "2020_09_3", hasAudio: false },
  { level: "cet4", id: "2020_12_1", hasAudio: true },
  { level: "cet4", id: "2020_12_2", hasAudio: true },
  { level: "cet4", id: "2020_12_3", hasAudio: false },
  { level: "cet4", id: "2019_06_1", hasAudio: true },
  { level: "cet4", id: "2019_06_2", hasAudio: true },
  { level: "cet4", id: "2019_06_3", hasAudio: false },
  { level: "cet4", id: "2019_12_1", hasAudio: true },
  { level: "cet4", id: "2019_12_2", hasAudio: true },
  { level: "cet4", id: "2019_12_3", hasAudio: false },
  { level: "cet6", id: "2025_06_1", hasAudio: true },
  { level: "cet6", id: "2025_06_2", hasAudio: true },
  { level: "cet6", id: "2025_06_3", hasAudio: false },
  { level: "cet6", id: "2025_12_1", hasAudio: true },
  { level: "cet6", id: "2025_12_2", hasAudio: true },
  { level: "cet6", id: "2025_12_3", hasAudio: false },
  { level: "cet6", id: "2024_06_1", hasAudio: true },
  { level: "cet6", id: "2024_06_2", hasAudio: true },
  { level: "cet6", id: "2024_06_3", hasAudio: false },
  { level: "cet6", id: "2024_12_1", hasAudio: true },
  { level: "cet6", id: "2024_12_2", hasAudio: true },
  { level: "cet6", id: "2024_12_3", hasAudio: false },
  { level: "cet6", id: "2023_03_1", hasAudio: true },
  { level: "cet6", id: "2023_03_2-3", hasAudio: false },
  { level: "cet6", id: "2023_06_1", hasAudio: true },
  { level: "cet6", id: "2023_06_2", hasAudio: true },
  { level: "cet6", id: "2023_06_3", hasAudio: false },
  { level: "cet6", id: "2023_12_1", hasAudio: true },
  { level: "cet6", id: "2023_12_2", hasAudio: true },
  { level: "cet6", id: "2023_12_3", hasAudio: false },
  { level: "cet6", id: "2022_06_1", hasAudio: true },
  { level: "cet6", id: "2022_06_2-3", hasAudio: false },
  { level: "cet6", id: "2022_09_1", hasAudio: true },
  { level: "cet6", id: "2022_09_2-3", hasAudio: false },
  { level: "cet6", id: "2022_12_1", hasAudio: true },
  { level: "cet6", id: "2022_12_2", hasAudio: true },
  { level: "cet6", id: "2022_12_3", hasAudio: false },
  { level: "cet6", id: "2021_06_1", hasAudio: true },
  { level: "cet6", id: "2021_06_2", hasAudio: true },
  { level: "cet6", id: "2021_06_3", hasAudio: false },
  { level: "cet6", id: "2021_12_1", hasAudio: true },
  { level: "cet6", id: "2021_12_2", hasAudio: true },
  { level: "cet6", id: "2021_12_3", hasAudio: false },
  { level: "cet6", id: "2020_07_1", hasAudio: true },
  { level: "cet6", id: "2020_09_1", hasAudio: true },
  { level: "cet6", id: "2020_09_2", hasAudio: false },
  { level: "cet6", id: "2020_09_3", hasAudio: false },
  { level: "cet6", id: "2020_12_1", hasAudio: true },
  { level: "cet6", id: "2020_12_2", hasAudio: true },
  { level: "cet6", id: "2020_12_3", hasAudio: false },
  { level: "cet6", id: "2019_06_1", hasAudio: true },
  { level: "cet6", id: "2019_06_2", hasAudio: true },
  { level: "cet6", id: "2019_06_3", hasAudio: false },
  { level: "cet6", id: "2019_12_1", hasAudio: true },
  { level: "cet6", id: "2019_12_2", hasAudio: true },
  { level: "cet6", id: "2019_12_3", hasAudio: false },
];

function parseId(id: string): { year: number; month: number; setLabel: string } {
  const [y, m, ...rest] = id.split("_");
  return { year: Number(y), month: Number(m), setLabel: rest.join("_") };
}

function formatLabel(year: number, month: number, setLabel: string): string {
  const setDisplay = setLabel.includes("-") ? `第${setLabel}套` : `第${setLabel}套`;
  return `${year}年${month}月 ${setDisplay}`;
}

export const ALL_EXAMS: ExamPaper[] = RAW.map((r) => {
  const { year, month, setLabel } = parseId(r.id);
  return {
    ...r,
    year,
    month,
    setLabel,
    label: formatLabel(year, month, setLabel),
    hasAudio: r.hasAudio ?? false,
  };
}).sort((a, b) => {
  if (a.level !== b.level) return a.level.localeCompare(b.level);
  if (a.year !== b.year) return b.year - a.year;
  if (a.month !== b.month) return b.month - a.month;
  return a.setLabel.localeCompare(b.setLabel);
});

export function getExamsByLevel(level: "cet4" | "cet6"): ExamPaper[] {
  return ALL_EXAMS.filter((e) => e.level === level);
}

export function getExam(level: string, id: string): ExamPaper | undefined {
  return ALL_EXAMS.find((e) => e.level === level && e.id === id);
}

export function groupByYear(exams: ExamPaper[]): Map<number, ExamPaper[]> {
  const map = new Map<number, ExamPaper[]>();
  for (const e of exams) {
    const arr = map.get(e.year) || [];
    arr.push(e);
    map.set(e.year, arr);
  }
  return map;
}

export const LEVEL_LABEL: Record<string, string> = {
  cet4: "英语四级 CET-4",
  cet6: "英语六级 CET-6",
};
