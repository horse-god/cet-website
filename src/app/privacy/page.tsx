import { APP_NAME } from "@/lib/const";

export const metadata = { title: "隐私政策" };

export default function PrivacyPage() {
  return (
    <div className="animate-fade-in py-12">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold mb-6">隐私政策</h1>
        <p className="text-muted text-sm mb-6">最后更新：2026 年 6 月 6 日</p>

        <div className="prose prose-slate space-y-6 text-muted">
          <p className="leading-relaxed">
            {APP_NAME}（以下简称"我们"）非常重视用户的隐私保护。
            本网站为纯静态信息展示网站，<strong>不收集任何用户个人信息</strong>。
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">1. 信息收集</h2>
          <p className="leading-relaxed">
            本网站为纯静态网站，不设用户注册系统，不设数据库，
            不收集、不存储任何用户的个人信息（包括但不限于姓名、手机号、邮箱、IP 地址等）。
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">2. Cookie 使用</h2>
          <p className="leading-relaxed">
            本网站不使用任何 Cookie 或类似追踪技术。
            不接入任何第三方分析工具（如 Google Analytics、百度统计等）。
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">3. 第三方服务</h2>
          <p className="leading-relaxed">
            本网站部署在 GitHub Pages 上，GitHub 可能会收集基本的访问日志。
            详情请参阅 <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection" className="text-primary">GitHub Pages 数据收集政策</a>。
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">4. 外部链接</h2>
          <p className="leading-relaxed">
            本网站可能包含指向外部网站的链接。我们对外部网站的隐私政策不承担责任。
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">5. 联系我们</h2>
          <p className="leading-relaxed">如有隐私相关问题，请联系微信：coscoscosx</p>
        </div>
      </div>
    </div>
  );
}
