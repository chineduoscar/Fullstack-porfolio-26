"use client";

import Link from "next/link";

export default function Hero() {
  const badges = [
    { label: "React", className: "left-[2%] top-[4%] -rotate-6" },
    { label: "Next.js", className: "right-[0%] top-[8%] rotate-3" },
    { label: "Express", className: "-right-3 bottom-[18%] rotate-6" },
    { label: "MongoDB", className: "-left-3 bottom-[10%] -rotate-3" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0c10] px-4 pb-24 pt-16 sm:px-6 sm:pt-24 mt-16">
      {/* Ambient grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(circle at 50% 20%, black, transparent 80%)",
        }}
      />

      <style>{`
        @keyframes steam-rise-1 {
          0% { transform: translateY(0) scaleX(1); opacity: 0; }
          15% { opacity: 0.55; }
          50% { transform: translateY(-18px) scaleX(1.4); }
          85% { opacity: 0.15; }
          100% { transform: translateY(-34px) scaleX(1.6); opacity: 0; }
        }
        @keyframes steam-rise-2 {
          0% { transform: translateY(0) scaleX(1); opacity: 0; }
          20% { opacity: 0.5; }
          55% { transform: translateY(-20px) scaleX(1.3); }
          85% { opacity: 0.12; }
          100% { transform: translateY(-38px) scaleX(1.5); opacity: 0; }
        }
        @keyframes mug-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes glow-breathe {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
      `}</style>

      <div className="relative mx-auto max-w-6xl">
        {/* ---- Hello badge ---- */}
        <div className="relative mx-auto w-fit">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-1.5 text-sm text-slate-200 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-400" />
            </span>
            Hello, World!
          </div>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            className="absolute -right-6 -top-5 text-blue-400/80"
          >
            <path
              d="M2 22C6 16 10 8 14 2M14 2H6M14 2V10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* ---- Headline ---- */}
        <h1 className="mt-6 text-center text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          I&apos;m <span className="text-blue-400">Oscar</span>,
          <br />
          Fullstack Developer
        </h1>

        {/* ---- Decorative squiggle (desktop only) ---- */}
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          className="absolute left-[6%] top-[30%] hidden text-blue-400/40 lg:block"
        >
          <path
            d="M23 4C15 12 8 18 4 30M23 4C18 14 16 22 17 34M23 4C25 15 30 21 40 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        {/* ---- Quote (desktop only) ---- */}
        <div className="absolute left-4 top-1/2 hidden max-w-52.5 -translate-y-1/2 lg:block xl:left-10">
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            className="mb-3 text-blue-400/80"
          >
            <path
              d="M0 18V11.2C0 4.4 3.7 0.8 10.1 0L10.9 2.9C7.5 3.7 5.6 5.9 5.3 9.1H10.1V18H0ZM13.3 18V11.2C13.3 4.4 17 0.8 23.4 0L24.2 2.9C20.8 3.7 18.9 5.9 18.6 9.1H23.4V18H13.3Z"
              fill="currentColor"
            />
          </svg>
          <p className="text-sm leading-relaxed text-slate-300">
            Oscar Shipped our entire project in half the expected time. Very
            good at what he does. Highly recommend.
          </p>
        </div>

        {/* ---- Stats (desktop only) ---- */}
        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-right lg:block xl:right-10">
          <p className="font-mono text-3xl font-semibold text-white">99.99%</p>
          <p className="text-sm text-slate-400">Avg. uptime shipped</p>
          <p className="mt-4 font-mono text-3xl font-semibold text-white">4+</p>
          <p className="text-sm text-slate-400">Years experience</p>
        </div>

        {/* ---- Illustration: a steaming mug of coffee — the developer's fuel ---- */}
        <div className="relative mx-auto mt-16 flex justify-center px-6 sm:mt-20">
          <div className="relative flex h-60 w-60 items-center justify-center sm:h-70 sm:w-70 md:h-80 md:w-[320px]">
            {/* Ambient glow */}
            <div
              className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-600/10 via-amber-500/5 to-transparent blur-3xl"
              style={{ animation: "glow-breathe 5s ease-in-out infinite" }}
            />

            {/* Floating skill badges around the mug */}
            {badges.map((b) => (
              <div
                key={b.label}
                className={`absolute z-20 rounded-full border border-white/10 bg-[#121620]/90 px-2.5 py-1 text-[10px] font-medium text-slate-200 shadow-xl backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5 sm:px-3 sm:py-1 sm:text-xs ${b.className}`}
              >
                {b.label}
              </div>
            ))}

            {/* Steam wisps rising from the mug */}
            <div className="absolute top-[16%] flex gap-3">
              <span
                className="h-10 w-2 rounded-full bg-linear-to-t from-slate-300/0 via-slate-200/60 to-slate-100/0 blur-[2px]"
                style={{ animation: "steam-rise-1 3.2s ease-in-out infinite" }}
              />
              <span
                className="mt-2 h-8 w-2 rounded-full bg-linear-to-t from-slate-300/0 via-slate-200/50 to-slate-100/0 blur-[2px]"
                style={{
                  animation: "steam-rise-2 3.6s ease-in-out 0.6s infinite",
                }}
              />
              <span
                className="h-10 w-2 rounded-full bg-linear-to-t from-slate-300/0 via-slate-200/60 to-slate-100/0 blur-[2px]"
                style={{
                  animation: "steam-rise-1 3.4s ease-in-out 1.1s infinite",
                }}
              />
            </div>

            {/* The mug, gently bobbing */}
            <div
              className="relative z-10"
              style={{ animation: "mug-bob 4s ease-in-out infinite" }}
            >
              <svg
                width="170"
                height="170"
                viewBox="0 0 140 140"
                fill="none"
                className="drop-shadow-[0_16px_30px_rgba(0,0,0,0.55)] sm:h-50 sm:w-50 md:h-57.5 md:w-57.5"
              >
                {/* Handle */}
                <path
                  d="M96 58h8a14 14 0 0 1 0 28h-8"
                  stroke="#3b4252"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                {/* Mug body */}
                <path
                  d="M28 52h68l-5 44a14 14 0 0 1-14 12H47a14 14 0 0 1-14-12l-5-44Z"
                  fill="#12151c"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1.5"
                />

                {/* Mug rim highlight */}
                <path
                  d="M28 52h68"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1.5"
                />
                {/* Blue accent stripe on the mug */}
                <path
                  d="M32 78c8 5 60 5 68 0"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ---- CTA pill ---- */}
        <div className="mx-auto mt-3 flex w-fit items-center gap-1 rounded-full border border-white/10 bg-[#121620]/80 p-1.5 shadow-xl backdrop-blur-md sm:mt-4">
          <a
            href="#project"
            className="flex items-center gap-1.5 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Projects
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="shrink-0"
            >
              <path
                d="M3 9L9 3M9 3H4M9 3V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="rounded-full px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Hire me
          </a>
        </div>

        {/* ---- Mobile-only quote/stat, stacked since the side blocks hide below lg ---- */}
        <div className="mx-auto mt-14 flex max-w-sm flex-col items-center gap-6 text-center lg:hidden">
          <div>
            <svg
              width="20"
              height="15"
              viewBox="0 0 24 18"
              fill="none"
              className="mx-auto mb-2 text-blue-400"
            >
              <path
                d="M0 18V11.2C0 4.4 3.7 0.8 10.1 0L10.9 2.9C7.5 3.7 5.6 5.9 5.3 9.1H10.1V18H0ZM13.3 18V11.2C13.3 4.4 17 0.8 23.4 0L24.2 2.9C20.8 3.7 18.9 5.9 18.6 9.1H23.4V18H13.3Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-sm leading-relaxed text-slate-300">
              Chinedu&apos;s backend work kept our platform fast and stable
              through 10x growth. Highly recommended.
            </p>
          </div>
          <div className="flex justify-center gap-10">
            <div>
              <p className="font-mono text-2xl font-semibold text-white">
                99.99%
              </p>
              <p className="text-xs text-slate-400">Avg. uptime shipped</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-semibold text-white">4+</p>
              <p className="text-xs text-slate-400">Years experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
