import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-14 sm:px-10">
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/85 p-8 shadow-[0_20px_60px_-30px_rgba(170,60,30,0.45)] backdrop-blur sm:p-12">
        <div className="mb-8 flex items-center gap-4">
          <Image
            src="/dishmark-logo.jpg"
            alt="DishMark logo"
            width={68}
            height={68}
            className="rounded-2xl border border-black/10"
            priority
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Personal Site
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
              Loop Shen
            </h1>
          </div>
        </div>

        <p className="max-w-2xl text-lg leading-8 text-stone-700">
          Independent developer building tools for everyday decisions. Current
          project: DishMark, a food map app for recording dishes, stores, and
          personal tasting notes.
        </p>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <article className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
          <h2 className="text-2xl font-semibold text-stone-900">Projects</h2>
          <ul className="mt-4 space-y-3 text-stone-700">
            <li>
              <span className="font-semibold text-stone-900">
                DishMark - Food Map App
              </span>
              <p className="mt-1 text-sm leading-6">
                Save dishes with store location, photos, flavors, queue-time
                notes, and quick share cards.
              </p>
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
          <h2 className="text-2xl font-semibold text-stone-900">Contact</h2>
          <p className="mt-4 text-stone-700">
            Email:{" "}
            <a
              href="mailto:your@email.com"
              className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4"
            >
              2947232977@qq.com
            </a>
          </p>
        </article>
      </section>

      <section className="mt-6 rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
        <h2 className="text-2xl font-semibold text-stone-900">
          Privacy Policy
        </h2>
        <p className="mt-4 leading-7 text-stone-700">
          This application does not actively collect personal information.
          User-created dish records are primarily stored on-device. If any
          additional data collection is introduced in the future, it will be
          clearly disclosed inside the app.
        </p>
      </section>

      <footer className="mt-10 pb-4 text-sm text-stone-500">
        © {new Date().getFullYear()} Loop Shen
      </footer>
    </main>
  );
}
