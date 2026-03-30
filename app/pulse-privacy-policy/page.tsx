import Link from "next/link";

export default function PulsePrivacyPolicyPage() {
    return (
        <main className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#071118] via-[#103241] to-[#264d63] text-slate-100">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(78,182,154,0.25),transparent_36%),radial-gradient(circle_at_88%_18%,rgba(137,190,226,0.28),transparent_38%),radial-gradient(circle_at_50%_88%,rgba(55,109,138,0.3),transparent_40%)]" />
            <div className="mx-auto min-h-screen w-full max-w-4xl px-6 py-12 sm:px-10">
                <div className="rounded-3xl border border-white/15 bg-slate-900/55 p-8 shadow-[0_24px_70px_-30px_rgba(9,22,36,0.9)] backdrop-blur-xl">
                    <h1 className="text-3xl font-semibold text-slate-50">Pulse 隐私政策</h1>
                    <p className="mt-3 text-sm text-slate-300/90">更新日期：2026-02-24</p>

                    <section className="mt-6 space-y-4 text-sm leading-7 text-slate-200/90">
                        <p>
                            Pulse 是一款专注「开始」的健身应用，重视用户隐私。本政策用于说明我们如何收集、使用、存储和保护用户信息。
                        </p>
                        <p>
                            1. 信息收集：本应用主要处理用户主动录入的训练状态、完成情况、健康数据等内容。如需访问健康数据、通知等系统权限，将在设备系统层面请求授权。
                        </p>
                        <p>
                            2. 信息使用：收集到的信息仅用于实现核心功能（如每日 AI 训练计划生成、计时与组数控制、轻量记录与反馈）。
                        </p>
                        <p>
                            3. 信息存储：用户训练记录默认存储于本地设备环境。若未来引入云同步等功能，将另行明确告知。
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
                        <Link
                            href="/"
                            className="text-sm font-medium text-cyan-200 underline decoration-cyan-300/60 underline-offset-4"
                        >
                            返回首页
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
