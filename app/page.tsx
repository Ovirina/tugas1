import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-20 font-sans">

      {/* Background Decoration */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <main className="relative mx-auto w-full max-w-5xl">

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left Content */}
          <div className="text-center md:text-left">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-200">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              My First Next.js Project
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hello,
              <br />
              Welcome to
              <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                My Website.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              TUGAS PERTAMA MENGGUNAKAN NEXT JS
            </p>

            <p className="mt-3 text-base text-slate-400">
              A simple journey into modern web development.
              Built with passion and curiosity.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">

            <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">

              <div className="mb-6 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-auto text-xs text-slate-400">
                  developer.tsx
                </span>
              </div>

              <div className="space-y-4 font-mono text-sm">

                <p className="text-purple-300">
                  const developer = {"{"}
                </p>

                <p className="pl-5 text-slate-300">
                  name: <span className="text-green-300">"Ovirina"</span>,
                </p>

                <p className="pl-5 text-slate-300">
                  role: <span className="text-green-300">".NET Developer"</span>,
                </p>

                <p className="pl-5 text-slate-300">
                  skills: [
                </p>

                <p className="pl-10 text-yellow-300">
                  "C#", ".NET", "SQL"
                </p>

                <p className="pl-5 text-slate-300">
                  ],
                </p>

                <p className="pl-5 text-slate-300">
                  passion: <span className="text-green-300">"Coding"</span>
                </p>

                <p className="text-purple-300">
                  {"}"}
                </p>

              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm text-slate-400">
                  Designed & Developed by
                </p>
                <p className="mt-1 text-xl font-bold text-white">
                  Ovirina.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="mt-24 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-slate-500">
            ©️ {new Date().getFullYear()} Ovirina | Built with Next.js & Tailwind CSS
          </p>
        </div>

      </main>
    </div>
  );
}