import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getExamsByLevel, getExam } from "@/lib/library";
import ExamDetail from "@/components/exam-detail";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getExamsByLevel("cet6").map((e) => ({ testId: e.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ testId: string }> }): Promise<Metadata> {
  const { testId } = await params;
  const exam = getExam("cet6", testId);
  if (!exam) return { title: "未找到" };
  return { title: `${exam.label} - 英语六级真题`, description: `CET-6 ${exam.label} 真题试卷、答案解析${exam.hasAudio ? "、听力音频" : ""}。免费在线查看和下载。` };
}

export default async function CET6Detail({ params }: { params: Promise<{ testId: string }> }) {
  const { testId } = await params;
  const exam = getExam("cet6", testId);
  if (!exam) notFound();

  const base = `/library/cet6/${testId}`;

  return (
    <ExamDetail
      exam={exam}
      level="cet6"
      levelLabel="英语六级 CET-6"
      testPdf={`${base}/test.pdf`}
      answerPdf={`${base}/answer.pdf`}
      audioMp3={exam.hasAudio ? `${base}/listening.mp3` : null}
    />
  );
}
