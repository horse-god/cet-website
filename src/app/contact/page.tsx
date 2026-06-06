import { Mail, MessageCircle, HelpCircle, Users } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "联系我们" };

export default function ContactPage() {
  return (
    <div className="animate-fade-in py-12">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">联系我们</h1>
          <p className="text-muted">有任何问题，欢迎随时联系</p>
        </div>

        {/* QQ群 */}
        <div className="mb-6 bg-white dark:bg-slate-800 border border-border rounded-2xl p-6 text-center">
          <div className="inline-flex w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 items-center justify-center mb-3">
            <Users className="h-6 w-6" />
          </div>
          <h3 className="font-semibold mb-1">四六级备考交流群</h3>
          <p className="text-xs text-muted mb-3">分享资料，互相鼓励，一起过级</p>
          <p className="font-mono text-lg font-medium">730715477</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-border p-6 hover:shadow-md transition-shadow text-center">
            <div className="inline-flex w-12 h-12 rounded-xl bg-green-100 text-green-600 items-center justify-center mb-3">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-1">微信</h3>
            <p className="text-primary font-mono text-lg">coscoscosx</p>
            <p className="text-xs text-muted mt-2">添加微信，1对1 交流</p>
          </div>

          <a
            href="mailto:hushuhushuyuyu@gmail.com"
            className="bg-white dark:bg-slate-800 rounded-xl border border-border p-6 hover:shadow-md transition-shadow text-center"
          >
            <div className="inline-flex w-12 h-12 rounded-xl bg-blue-100 text-blue-600 items-center justify-center mb-3">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-1">邮件</h3>
            <p className="text-primary">hushuhushuyuyu@gmail.com</p>
            <p className="text-xs text-muted mt-2">看到后会尽快回复</p>
          </a>
        </div>

        <div className="mt-6 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 border border-pink-200 dark:border-pink-800 rounded-xl p-5 text-center">
          <p className="text-sm text-muted">
            ❤️ 如果觉得有用，可以在 <a href="https://www.ifdian.net/a/iam_ARC" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-medium hover:underline">爱发电</a> 支持作者
          </p>
        </div>

        <div className="mt-6 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-xl p-5 text-center">
          <HelpCircle className="h-6 w-6 text-amber-500 mx-auto mb-2" />
          <h3 className="font-semibold mb-1">先看看常见问题？</h3>
          <p className="text-sm text-muted">
            大部分问题在 <Link href="/faq" className="text-primary font-medium">常见问题</Link> 页面都有解答
          </p>
        </div>
      </div>
    </div>
  );
}
