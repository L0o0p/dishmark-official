import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../siteConfig";

export default function PulseHome() {
    return (
        <main className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#071118] via-[#103241] to-[#264d63] text-slate-100">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(78,182,154,0.25),transparent_36%),radial-gradient(circle_at_88%_18%,rgba(137,190,226,0.28),transparent_38%),radial-gradient(circle_at_50%_88%,rgba(55,109,138,0.3),transparent_40%)]" />
            <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10">
                <section className="rounded-3xl border border-white/15 bg-slate-900/55 p-8 shadow-[0_24px_70px_-30px_rgba(9,22,36,0.9)] backdrop-blur-xl sm:p-12">
                    <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <Image
                                src="/pulse-logo.png"
                                alt="Pulse logo"
                                width={64}
                                height={64}
                                className="rounded-2xl border border-white/20"
                                priority
                            />
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                                    Pulse Official Website
                                </p>
                                <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                                    Pulse
                                </h1>
                            </div>
                        </div>
                        <nav className="flex flex-wrap gap-2 text-sm">
                            <a
                                href="#features"
                                className="rounded-full border border-white/20 bg-white/8 px-4 py-2 text-slate-100 transition hover:bg-white/16"
                            >
                                功能介绍
                            </a>
                            <a
                                href="#contact"
                                className="rounded-full border border-white/20 bg-white/8 px-4 py-2 text-slate-100 transition hover:bg-white/16"
                            >
                                联系方式
                            </a>
                            <Link
                                href="/pulse-privacy-policy"
                                className="rounded-full border border-cyan-200/35 bg-cyan-300/15 px-4 py-2 text-cyan-100 transition hover:bg-cyan-300/25"
                            >
                                隐私政策
                            </Link>
                        </nav>
                    </header>

                    <div className="grid gap-6 sm:grid-cols-[1.4fr_1fr]">
                        <article>
                            <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
                                首页
                            </h2>
                            <p className="mt-4 leading-8 text-slate-200/90">
                                Pulse 是一款专注&quot;开始&quot;的健身应用。它不会给你复杂的计划，只会在每天给你一份刚刚好的训练。
                            </p>
                        </article>
                        <aside className="rounded-2xl border border-white/15 bg-slate-800/50 p-5">
                            <h3 className="text-lg font-semibold text-slate-50">应用基础信息</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-200/90">
                                应用名称：Pulse
                            </p>
                            <p className="text-sm leading-7 text-slate-200/90">应用类型：健身 / 健康管理</p>
                            <p className="text-sm leading-7 text-slate-200/90">
                                官方网站：https://dishmark.loopshen.top/pulse
                            </p>
                            <p className="text-sm leading-7 text-slate-200/90">
                                版权所有者：{siteConfig.ownerName}
                            </p>
                        </aside>
                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-2">
                        <div className="overflow-hidden rounded-[24px] border border-white/15">
                            <Image
                                src="/pulse2.png"
                                alt="Pulse 应用展示图"
                                width={1200}
                                height={2400}
                                className="h-[420px] w-auto object-contain sm:h-[560px] lg:h-[680px]"
                            />
                        </div>
                        <div className="overflow-hidden rounded-[24px] border border-white/15">
                            <Image
                                src="/pulse.png"
                                alt="Pulse 应用展示图"
                                width={1200}
                                height={2400}
                                className="h-[420px] w-auto object-contain sm:h-[560px] lg:h-[680px]"
                            />
                        </div>
                        <div className="overflow-hidden rounded-[24px] border border-white/15">
                            <Image
                                src="/pulse3.png"
                                alt="Pulse 应用展示图"
                                width={1200}
                                height={2400}
                                className="h-[420px] w-auto object-contain sm:h-[560px] lg:h-[680px]"
                            />
                        </div>
                    </div>
                </section>

                <section
                    id="features"
                    className="mt-8 rounded-3xl border border-white/15 bg-slate-900/50 p-8 shadow-[0_18px_50px_-30px_rgba(5,15,25,0.85)] backdrop-blur-xl"
                >
                    <h2 className="text-2xl font-semibold text-slate-50">核心功能</h2>
                    <p className="mt-3 leading-8 text-slate-200/90">
                        Pulse 聚焦于让你轻松开始每一天的训练，没有复杂的计划，只有刚刚好的节奏。
                    </p>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        <article className="rounded-2xl border border-white/15 bg-slate-800/45 p-5">
                            <h3 className="text-lg font-semibold text-slate-50">每日 AI 训练计划</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-200/90">
                                根据你的状态生成简洁训练内容，不需要思考下一步做什么。
                            </p>
                        </article>

                        <article className="rounded-2xl border border-white/15 bg-slate-800/45 p-5">
                            <h3 className="text-lg font-semibold text-slate-50">清晰的执行流程</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-200/90">
                                从开始到完成，每一步都有节奏引导，让你专注训练本身。
                            </p>
                        </article>

                        <article className="rounded-2xl border border-white/15 bg-slate-800/45 p-5">
                            <h3 className="text-lg font-semibold text-slate-50">内置计时与组数控制</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-200/90">
                                无需切换应用，训练过程自然流动。
                            </p>
                        </article>

                        <article className="rounded-2xl border border-white/15 bg-slate-800/45 p-5">
                            <h3 className="text-lg font-semibold text-slate-50">轻量记录与反馈</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-200/90">
                                记录每天的完成情况，看到自己的节奏，而不是压力。
                            </p>
                        </article>
                    </div>
                </section>

                <section className="mt-8 grid gap-6 sm:grid-cols-2">
                    <article
                        id="contact"
                        className="rounded-2xl border border-white/15 bg-slate-900/50 p-6 shadow-[0_12px_35px_-25px_rgba(3,10,18,0.9)] backdrop-blur-xl"
                    >
                        <h2 className="text-2xl font-semibold text-slate-50">联系方式</h2>
                        <p className="mt-4 text-slate-200/90">
                            电子邮箱：
                            <a
                                href="mailto:2947232977@qq.com"
                                className="font-semibold text-cyan-200 underline decoration-cyan-300/60 underline-offset-4"
                            >
                                2947232977@qq.com
                            </a>
                        </p>
                        <p className="mt-2 text-slate-200/90">开发者：{siteConfig.ownerName}</p>
                    </article>

                    <article className="rounded-2xl border border-white/15 bg-slate-900/50 p-6 shadow-[0_12px_35px_-25px_rgba(3,10,18,0.9)] backdrop-blur-xl">
                        <h2 className="text-2xl font-semibold text-slate-50">法律与协议</h2>
                        <p className="mt-4 text-sm leading-7 text-slate-200/90">
                            为保障用户权益，本站提供完整的用户协议与隐私政策说明。
                        </p>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <Link
                                href="/pulse-privacy-policy"
                                className="rounded-full border border-cyan-200/35 bg-cyan-300/15 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/25"
                            >
                                查看隐私政策
                            </Link>
                        </div>
                    </article>
                </section>

                <footer className="mt-8 rounded-2xl border border-white/15 bg-slate-900/50 p-6 text-sm leading-7 text-slate-300/90 shadow-[0_12px_35px_-25px_rgba(3,10,18,0.9)] backdrop-blur-xl">
                    <p>版权所有者：{siteConfig.ownerName}</p>
                    <p>
                        Copyright © {new Date().getFullYear()} {siteConfig.ownerName}. All
                        Rights Reserved.
                    </p>
                    <p>网站备案信息：{siteConfig.icpRecordNumber}</p>
                </footer>
            </div>
        </main>
    );
}
