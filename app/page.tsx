import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-6 py-12 sm:px-10">
      <section className="rounded-3xl border border-black/10 bg-white/85 p-8 shadow-[0_20px_60px_-30px_rgba(170,60,30,0.45)] backdrop-blur sm:p-12">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/dishmark-logo.png"
              alt="DishMark logo"
              width={64}
              height={64}
              className="rounded-2xl border border-black/10"
              priority
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                DishMark Official Website
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
                DishMark （地食马）
              </h1>
            </div>
          </div>
          <nav className="flex flex-wrap gap-2 text-sm">
            <a
              href="#product"
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-stone-700"
            >
              产品介绍
            </a>
            <a
              href="#contact"
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-stone-700"
            >
              联系方式
            </a>
            <Link
              href="/user-agreement"
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-stone-700"
            >
              用户协议
            </Link>
            <Link
              href="/privacy-policy"
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-stone-700"
            >
              隐私政策
            </Link>
          </nav>
        </header>

        <div className="grid gap-6 sm:grid-cols-[1.4fr_1fr]">
          <article>
            <h2 className="text-2xl font-semibold text-stone-900 sm:text-3xl">
              首页
            </h2>
            <p className="mt-4 leading-8 text-stone-700">
              DishMark 是一款用于记录“吃过什么、在哪吃、体验如何”的美食标记应用。
              用户可在地图上标记店铺与菜品，保存图片、口味、排队时长与用餐笔记，便于后续回顾与分享。
            </p>
            {/* <p className="mt-3 leading-8 text-stone-700">
              开发者：Loop Shen（独立开发者）
            </p> */}
          </article>
          <aside className="rounded-2xl border border-black/10 bg-amber-50 p-5">
            <h3 className="text-lg font-semibold text-stone-900">应用基础信息</h3>
            <p className="mt-3 text-sm leading-7 text-stone-700">
              应用名称：DishMark
            </p>
            <p className="text-sm leading-7 text-stone-700">应用类型：美食地图 / 生活记录</p>
            <p className="text-sm leading-7 text-stone-700">
              官方网站：https://dishmark.loopshen.top
            </p>
            <p className="text-sm leading-7 text-stone-700">版权所有者：Loop Shen</p>
          </aside>
        </div>

      </section>

      <section
        id="product"
        className="mt-8 rounded-3xl border border-black/10 bg-white/80 p-8 shadow-sm"
      >
        <h2 className="text-2xl font-semibold text-stone-900">产品介绍</h2>
        <p className="mt-3 leading-8 text-stone-700">
          DishMark 聚焦“地图 + 菜品 + 体验”三件事，帮助用户建立自己的美食档案。
        </p>
        <div className="mt-8 grid items-end gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl bg-stone-50/80 p-4 sm:p-6">
            <Image
              src="/手机地图标记展示图alpha.png"
              alt="DishMark 手机地图标记展示图"
              width={1200}
              height={2400}
              className="mx-auto h-[420px] w-auto object-contain sm:h-[560px] lg:h-[680px]"
            />
          </div>

          <div className="space-y-4">
            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <Image
                src="/地图标记.PNG"
                alt="地图标记功能截图"
                width={1200}
                height={800}
                className="h-32 w-full rounded-xl object-cover"
              />
              <h3 className="mt-3 font-semibold text-stone-900">地图标记</h3>
              <p className="mt-2 text-sm leading-6 text-stone-700">
                在当前位置创建店铺与菜品标记，快速回看曾吃过的地点。
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <Image
                src="/菜品记录.jpeg"
                alt="菜品记录功能截图"
                width={1200}
                height={800}
                className="h-32 w-full rounded-xl object-cover"
              />
              <h3 className="mt-3 font-semibold text-stone-900">菜品记录</h3>
              <p className="mt-2 text-sm leading-6 text-stone-700">
                支持菜名、价格、口味标签、图片与用餐评价，形成结构化记录。
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <Image
                src="/分享能力.png"
                alt="分享能力功能截图"
                width={1200}
                height={800}
                className="h-32 w-full rounded-xl object-cover"
              />
              <h3 className="mt-3 font-semibold text-stone-900">分享能力</h3>
              <p className="mt-2 text-sm leading-6 text-stone-700">
                可生成分享卡片，便于在社交场景中分享推荐菜与店铺信息。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 sm:grid-cols-2">
        <article
          id="contact"
          className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm"
        >
          <h2 className="text-2xl font-semibold text-stone-900">联系方式</h2>
          <p className="mt-4 text-stone-700">
            电子邮箱：
            <a
              href="mailto:2947232977@qq.com"
              className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4"
            >
              2947232977@qq.com
            </a>
          </p>
          <p className="mt-2 text-stone-700">开发者：Loop Shen</p>
        </article>

        <article className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-stone-900">法律与协议</h2>
          <p className="mt-4 text-sm leading-7 text-stone-700">
            为保障用户权益，本站提供完整的用户协议与隐私政策说明。
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/user-agreement"
              className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white"
            >
              查看用户协议
            </Link>
            <Link
              href="/privacy-policy"
              className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700"
            >
              查看隐私政策
            </Link>
          </div>
        </article>
      </section>

      <footer className="mt-8 rounded-2xl border border-black/10 bg-white/80 p-6 text-sm leading-7 text-stone-600">
        <p>版权所有者：Loop Shen</p>
        <p>Copyright © {new Date().getFullYear()} Loop Shen. All Rights Reserved.</p>
        <p>网站备案信息：备案申请中（上线后将更新为正式备案号）</p>
      </footer>
    </main>
  );
}
