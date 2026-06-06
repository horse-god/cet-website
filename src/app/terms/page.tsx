import { APP_NAME } from "@/lib/const";

export const metadata = { title: "服务条款" };

export default function TermsPage() {
  return (
    <div className="animate-fade-in py-12">
      <div className="container mx-auto max-w-3xl px-4 prose prose-slate">
        <h1 className="text-3xl font-bold mb-6">服务条款</h1>
        <p className="text-muted text-sm mb-6">最后更新：2026 年 6 月 6 日</p>

        <h2 className="text-xl font-bold mt-8 mb-3">1. 服务说明</h2>
        <p className="text-muted leading-relaxed">
          {APP_NAME}（以下简称"本平台"）为英语四六级考生提供完全免费的考试资讯和学习指导内容。
          所有内容对所有用户永久开放，<strong>无需注册、无需付费、无广告、无套路</strong>。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">2. 用户行为规范</h2>
        <p className="text-muted leading-relaxed">用户不得：</p>
        <ul className="list-disc pl-6 text-muted space-y-1">
          <li>利用本平台从事任何违法违规活动</li>
          <li>攻击服务器、传播病毒或恶意代码</li>
          <li>擅自复制、传播平台内容用于商业用途</li>
          <li>使用脚本、爬虫等自动化工具批量获取内容</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">3. 知识产权</h2>
        <p className="text-muted leading-relaxed">
          本平台的源代码遵循 <a href="https://opensource.org/licenses/MIT" className="text-primary">MIT 协议</a> 开源，
          欢迎学习、修改、分发。
        </p>
        <p className="text-muted leading-relaxed mt-2">
          平台内容（包括但不限于文字、图片、UI 设计）受著作权法保护，
          未经授权不得复制、传播、修改用于商业用途。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">4. 免责声明</h2>
        <p className="text-muted leading-relaxed">
          本平台提供的信息仅供参考，不构成任何考试通过保证。
          因不可抗力导致服务中断，本平台不承担责任。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">5. 服务变更</h2>
        <p className="text-muted leading-relaxed">
          本平台保留随时修改、暂停或终止部分或全部服务的权利。
          如有重大变更，会提前通过网站公告告知。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">6. 条款修改</h2>
        <p className="text-muted leading-relaxed">
          本平台有权根据需要修改本条款，修改后将在平台公布。继续使用本平台即视为接受修改后的条款。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">7. 联系方式</h2>
        <p className="text-muted leading-relaxed">
          如有疑问请联系微信：coscoscosx，或发邮件至 hushuhushuyuyu@gmail.com。
        </p>
      </div>
    </div>
  );
}
