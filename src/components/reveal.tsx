"use client";

// 滚动进入视口时触发动画
// 用法：<Reveal>...</Reveal>  或 <Reveal delay={1}>...</Reveal>
import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5; // delay 0-5
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
  /** 只触发一次（默认 true） */
  once?: boolean;
}

export function Reveal({ children, delay = 0, className = "", as = "div", once = true }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const Tag = as as any;
  const classes = [
    "reveal",
    visible ? "is-visible" : "",
    delay > 0 ? `reveal-delay-${delay}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes}>
      {children}
    </Tag>
  );
}
