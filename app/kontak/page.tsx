export default function KontakPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-indigo-50 px-6 py-12 font-sans">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-xl sm:p-12">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-3xl">
            ✉️
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-800">Kontak Saya</h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            Jangan ragu untuk menghubungi saya. Saya terbuka untuk diskusi, kolaborasi, maupun
            peluang profesional.
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          {/* Email */}
          <a
            href="mailto:ovirina.putri@gmail.com"
            className="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-indigo-300 hover:bg-indigo-50"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-xl">
              📧
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</p>
              <p className="mt-1 break-all font-medium text-slate-700 group-hover:text-indigo-600">
                ovirina.putri@gmail.com
              </p>
            </div>

            <span className="text-slate-400 group-hover:text-indigo-600">↗</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Ovirina"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-indigo-300 hover:bg-indigo-50"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xl">
              💻
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                GitHub
              </p>
              <p className="mt-1 font-medium text-slate-700 group-hover:text-indigo-600">
                github.com/Ovirina
              </p>
            </div>

            <span className="text-slate-400 group-hover:text-indigo-600">↗</span>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t border-slate-100 pt-6 text-center">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Ovirina. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
