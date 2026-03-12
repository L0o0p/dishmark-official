import type { Metadata } from "next";

type MomentPageProps = {
  params: Promise<{ id: string }>;
};

const universalLinkBase = (
  process.env.NEXT_PUBLIC_UNIVERSAL_LINK_BASE || "https://dishmark.loopshen.top"
).replace(/\/+$/, "");

export const metadata: Metadata = {
  title: "DishMark | 在 App 中打开",
  description: "点击按钮通过 Universal Link 打开 DishMark App。",
};

export default async function MomentPage({ params }: MomentPageProps) {
  const { id } = await params;
  const safeId = encodeURIComponent(id);
  const universalLink = `${universalLinkBase}/m/${safeId}`;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center px-4 py-8 sm:px-6">
      <section className="w-full rounded-3xl border border-black/10 bg-white/85 p-6 shadow-[0_18px_48px_-30px_rgba(0,0,0,0.35)] backdrop-blur sm:p-8">
        <p className="text-sm font-semibold tracking-[0.12em] text-amber-800">DishMark 分享页</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          在 App 中打开
        </h1>
        <p className="mt-4 text-base leading-7 text-stone-700">
          你正在查看 DishMark 分享内容，点击下方按钮将通过 Universal Link 打开 App。
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={universalLink}
            className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
          >
            在 App 中打开
          </a>
          <span className="text-xs text-stone-500">若未安装 App，将停留在当前网页。</span>
        </div>
      </section>
    </main>
  );
}
