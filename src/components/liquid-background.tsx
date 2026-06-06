"use client";

// 性能版背景：纯 CSS 渐变，无 filter:blur、无 backdrop-filter
// 用最少的 GPU 开销达到"液态感"视觉效果
import { useEffect, useState } from "react";

export function LiquidBackground() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <div aria-hidden className="liquid-bg">
      {/* 顶部 + 底部柔光（纯 CSS，无 blur） */}
      <div className="liquid-overlay-top" />
      <div className="liquid-overlay-bottom" />
    </div>
  );
}
