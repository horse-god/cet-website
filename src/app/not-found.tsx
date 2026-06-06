import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-gradient mb-4">404</div>
        <h1 className="text-2xl font-bold mb-2">页面找不到了</h1>
        <p className="text-muted mb-6">你访问的页面不存在或已被移除</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover"
        >
          <Home className="h-4 w-4" /> 回到首页
        </Link>
      </div>
    </div>
  );
}
