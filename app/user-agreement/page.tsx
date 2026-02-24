import Link from "next/link";

export default function UserAgreementPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-12 sm:px-10">
      <div className="rounded-3xl border border-black/10 bg-white/90 p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-stone-900">DishMark 用户协议</h1>
        <p className="mt-3 text-sm text-stone-600">更新日期：2026-02-24</p>

        <section className="mt-6 space-y-4 text-sm leading-7 text-stone-700">
          <p>
            欢迎使用 DishMark（以下简称“本应用”）。本协议由开发者 Loop Shen 与用户共同缔结。
            用户在下载、安装、注册或使用本应用前，应充分阅读并理解本协议。
          </p>
          <p>
            1. 服务内容：本应用提供美食地点与菜品记录、图片保存、体验备注、分享卡片等功能。
          </p>
          <p>
            2. 用户行为：用户应遵守法律法规，不得利用本应用发布违法违规、侵权或不实内容。
          </p>
          <p>
            3. 账号与数据：用户应妥善保管设备及账号信息，因用户保管不当导致的损失由用户自行承担。
          </p>
          <p>
            4. 知识产权：本应用及相关页面内容、标识、文案等知识产权归开发者或相关权利人所有。
          </p>
          <p>
            5. 责任限制：在法律允许范围内，因网络、设备故障或不可抗力导致的服务中断，开发者不承担超出法定范围的责任。
          </p>
          <p>
            6. 协议变更：开发者可根据业务与法律要求调整本协议，并在官网或应用内公示。
          </p>
          <p>
            7. 联系方式：如有问题，请联系 2947232977@qq.com。
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
