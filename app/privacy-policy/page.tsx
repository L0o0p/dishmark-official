import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-12 sm:px-10">
      <div className="rounded-3xl border border-black/10 bg-white/90 p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-stone-900">DishMark 隐私政策</h1>
        <p className="mt-3 text-sm text-stone-600">更新日期：2026-02-24</p>

        <section className="mt-6 space-y-4 text-sm leading-7 text-stone-700">
          <p>
            DishMark 重视用户隐私。本政策用于说明我们如何收集、使用、存储和保护用户信息。
          </p>
          <p>
            1. 信息收集：本应用主要处理用户主动录入的菜品、店铺、图片、备注等内容。
            如需访问定位、相册等系统权限，将在设备系统层面请求授权。
          </p>
          <p>
            2. 信息使用：收集到的信息仅用于实现核心功能（如地图标记、记录管理、内容展示与分享）。
          </p>
          <p>
            3. 信息存储：用户记录默认存储于本地设备环境。若未来引入云同步等功能，将另行明确告知。
          </p>
          <p>
            4. 信息共享：除法律法规要求或取得用户明确同意外，我们不会向第三方出售或非法提供用户个人信息。
          </p>
          <p>
            5. 信息安全：我们将采取合理措施保护数据安全，但请用户理解互联网与终端环境存在客观风险。
          </p>
          <p>
            6. 用户权利：用户可通过卸载应用、删除本地记录等方式管理个人数据。
          </p>
          <p>
            7. 联系方式：如对隐私政策有疑问，请联系 2947232977@qq.com。
          </p>
        </section>

        <div className="mt-8">
          <Link href="/" className="text-sm font-medium text-amber-700 underline underline-offset-4">
            返回首页
          </Link>
        </div>
      </div>
    </main>
  );
}
