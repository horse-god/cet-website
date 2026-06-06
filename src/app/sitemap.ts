import type { MetadataRoute } from "next";
import { APP_URL } from "@/lib/const";
import { ALL_EXAMS } from "@/lib/library";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = APP_URL;
  const now = new Date();

  // 主页面
  const pages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/library`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/library/cet4`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/library/cet6`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // 所有真题试卷页面
  for (const exam of ALL_EXAMS) {
    pages.push({
      url: `${base}/library/${exam.level}/${exam.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  return pages;
}
