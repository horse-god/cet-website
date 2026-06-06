"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("页面错误:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex w-16 h-16 rounded-full bg-red-100 text-red-600 items-center justify-center mb-4">
          <AlertTriangle className="h-8 w-8" />
        </div>
        <h1 className="text-2xl font-bold mb-2">出错了</h1>
        <p className="text-muted mb-6">
          页面遇到了一些问题，请稍后再试
        </p>
        {error.digest && (
          <p className="text-xs text-muted mb-4 font-mono">错误码: {error.digest}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover"
          >
            <RefreshCw className="h-4 w-4" /> 重试
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-slate-50"
          >
            <Home className="h-4 w-4" /> 回到首页
          </Link>
        </div>
      </div>
    </div>
  );
}
