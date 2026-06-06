"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { APP_NAME } from "@/lib/const";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_ITEMS = [
  { href: "/", label: "首页" },
  { href: "/library/cet4", label: "四级真题" },
  { href: "/library/cet6", label: "六级真题" },
  { href: "/about", label: "关于我们" },
  { href: "/faq", label: "常见问题" },
];

const SUPPORT_LINK = { href: "https://www.ifdian.net/a/iam_ARC", label: "❤️ 支持作者" };

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-strong border-b border-white/40">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt={APP_NAME} className="h-9 w-9 rounded-lg object-contain transition-transform group-hover:scale-110" />
          <span className="text-lg font-bold tracking-tight">{APP_NAME}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm rounded-md transition-colors",
                isActive
                  ? "text-primary font-medium bg-primary-soft"
                  : "text-muted hover:text-foreground hover:bg-slate-100"
              )}
            >
              {item.label}
            </Link>
          )})}
          <a
            href={SUPPORT_LINK.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-sm rounded-md text-pink-500 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-950 transition-colors font-medium"
          >
            {SUPPORT_LINK.label}
          </a>
          <ThemeToggle />
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="切换菜单"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white dark:bg-slate-800 dark:bg-slate-900 px-4 py-3 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block px-3 py-2 text-sm rounded-md",
                isActive
                  ? "text-primary font-medium bg-primary-soft"
                  : "text-muted hover:bg-slate-100"
              )}
            >
              {item.label}
            </Link>
          )})}
          <a
            href={SUPPORT_LINK.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 text-sm rounded-md text-pink-500 hover:bg-pink-50 font-medium flex items-center gap-1"
          >
            <Heart className="h-4 w-4" fill="currentColor" />
            支持作者
          </a>
          <div className="px-3 py-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
