
import Link from "next/link";

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 py-16 font-sans">

      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Get to Know Me
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Tentang <span className="text-blue-600">Saya</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-500">
            Kenali lebih dekat tentang diri saya, latar belakang,
            serta hal-hal yang saya sukai.
          </p>
        </div>

        {/* Profile Card */}
        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl md:grid-cols-5">

          {/* Profile Side */}
          <div className="flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-blue-800 p-8 text-center md:col-span-2">

            <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white/30 bg-white/20 text-5xl font-bold text-white shadow-lg">
              O
            </div>

            <h2 className="mt-6 text-2xl font-bold text-white">
              Ovirina Putri W
            </h2>

            <p className="mt-2 text-sm text-blue-100">
              Personal Profile
            </p>

            <div className="mt-6 h-1 w-16 rounded-full bg-white/50" />

            <p className="mt-5 text-sm leading-7 text-blue-100">
              Learning, growing, and exploring new things every day.
            </p>

          </div>

          {/* Profile Details */}
          <div className="p-8 md:col-span-3 md:p-10">

            <h3 className="text-2xl font-bold text-slate-800">
              Halo, Saya Ovirina!
            </h3>

            <p className="mt-4 leading-8 text-slate-500">
              Saya berasal dari Depok. Saya senang mempelajari
              hal-hal baru, mengembangkan kemampuan diri,
              dan mengeksplorasi berbagai aktivitas positif.
            </p>

            {/* Biodata */}
            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  👤
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Nama
                  </p>
                  <p className="mt-1 font-semibold text-slate-700">
                    Ovirina Putri W
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  📍
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Asal
                  </p>
                  <p className="mt-1 font-semibold text-slate-700">
                    Depok
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  ✨
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Hobi
                  </p>
                  <p className="mt-1 font-semibold text-slate-700">
                    Berenang dan Membaca
                  </p>
                </div>
              </div>

            </div>

            {/* Hobby Tags */}
            <div className="mt-8 border-t border-slate-100 pt-6">
              <p className="mb-3 text-sm font-semibold text-slate-600">
                My Interests
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  🏊 Swimming
                </span>

                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  📚 Reading
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Back Button */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
          >
            ← Kembali ke Beranda
          </Link>
        </div>

      </div>
    </main>
  );
}
