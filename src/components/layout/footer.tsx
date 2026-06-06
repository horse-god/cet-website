import Link from "next/link";
import { APP_NAME } from "@/lib/const";

export function Footer() {
  return (
    <footer className="glass border-t border-white/40 py-10 mt-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-semibold mb-3 text-sm">产品</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/library/cet4" className="hover:text-foreground">四级真题</Link></li>
              <li><Link href="/library/cet6" className="hover:text-foreground">六级真题</Link></li>
              <li><Link href="/about" className="hover:text-foreground">关于我们</Link></li>
              <li><Link href="/faq" className="hover:text-foreground">常见问题</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-sm">帮助</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/about" className="hover:text-foreground">关于我们</Link></li>
              <li><Link href="/faq" className="hover:text-foreground">常见问题</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-sm">社区</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li><span className="text-blue-500">🐧 QQ群：730715477</span></li>
              <li><Link href="/contact" className="hover:text-foreground">联系我们</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-sm">法律</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/terms" className="hover:text-foreground">服务条款</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground">隐私政策</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted">
          <div className="flex items-center gap-4">
            <p>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
            <a href="https://www.ifdian.net/a/iam_ARC" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 transition-colors">❤️ 爱发电支持作者</a>
          </div>
          <p>本平台仅供学习交流使用 · 完全免费</p>
        </div>
      </div>
    </footer>
  );
}
