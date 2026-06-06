// 业务常量

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "CET通";
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.cettong.cn";

// 题目类型
export const QUESTION_TYPE = {
  SINGLE: "single",       // 单选
  MULTIPLE: "multiple",   // 多选
  JUDGE: "judge",         // 判断
  CLOZE: "cloze",         // 完形填空
  TRANSLATION: "translation",
  WRITING: "writing",
} as const;

// 考试类型
export const EXAM_TYPE = {
  MOCK: "mock",           // 模拟考试
  CATEGORY: "category",   // 分类练习
  REAL: "real",           // 真题
} as const;
