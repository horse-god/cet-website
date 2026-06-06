import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileText, Headphones, ChevronRight } from "lucide-react";
import { getExamsByLevel, groupByYear, type ExamPaper } from "@/lib/library";

export const metadata: Metadata = {
  title: "六级真题",
  description: "2019-2025 年英语六级真题试卷下载，含答案和听力音频。",
};

export const dynamic = "force-static";

export default function CET6Page() {
  const exams = getExamsByLevel("cet6");
  const byYear = groupByYear(exams);
  const years = Array.from(byYear.keys()).sort((a, b) => b - a);

  return (
    <div className="animate-fade-in py-10">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium mb-4">
            <BookOpen className="h-4 w-4 text-primary" />
            <span>历年真题 · 免费下载</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">英语六级 CET-6</h1>
          <p className="text-muted text-lg">{exams.length} 套真题 · 含试卷 PDF + 答案 + 听力 MP3</p>
        </div>

        <div className="space-y-4">
          {years.map((year) => {
            const papers = byYear.get(year)!;
            papers.sort((a, b) => { if (a.month !== b.month) return b.month - a.month; return a.setLabel.localeCompare(b.setLabel); });
            return (
              <div key={year} className="bg-white dark:bg-slate-800 rounded-2xl border border-border overflow-hidden">
                <div className="bg-slate-50 dark:bg-slate-800/50 px-5 py-3 border-b border-border flex items-center justify-between">
                  <h3 className="font-bold text-lg">{year} 年</h3>
                  <span className="text-xs text-muted">{papers.length} 套</span>
                </div>
                <div className="divide-y divide-border">
                  {papers.map((paper) => (
                    <Link key={paper.id} href={`/library/cet6/${paper.id}`} className="flex items-center justify-between px-5 py-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 dark:bg-slate-800/50 transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <div>
                          <span className="font-medium">{paper.label}</span>
                          <div className="flex items-center gap-3 mt-0.5">
                            <span className="text-xs text-muted flex items-center gap-1"><FileText className="h-3 w-3" />试卷</span>
                            <span className="text-xs text-muted flex items-center gap-1"><FileText className="h-3 w-3" />答案</span>
                            {paper.hasAudio && <span className="text-xs text-green-600 flex items-center gap-1 font-medium"><Headphones className="h-3 w-3" />听力</span>}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted group-hover:text-primary transition-colors group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
