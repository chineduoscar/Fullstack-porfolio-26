"use client";

import Image from "next/image";
import aboutImg from "../assests/aboutImg.png";
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiLaravel,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiDocker,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

const STACK = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Prisma", icon: SiPrisma, color: "#FFFFFF" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
];

const highlights = [
  "4+ Years Experience",
  "Problem Solver",
  "Scalable Architecture",
  "Security-Focused",
];

export default function AboutAndStack() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#0a0c10] px-4 py-12 sm:px-6 sm:py-20"
    >
      {/* Ambient blue glow tying the whole section together */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-150 w-225 -translate-x-1/2 rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* ---- About ---- */}
        <div className="grid gap-12 lg:grid-cols-[380px_1fr] lg:items-center lg:gap-16">
          <div className="relative mx-auto w-full max-w-xs lg:mx-0">
            <div className="absolute -inset-3 rounded-3xl bg-blue-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121620]">
              <Image
                src={aboutImg}
                alt="Chinedu Nnadozie Oscar"
                width={400}
                height={480}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-blue-400/20 bg-[#121620]/90 px-4 py-2 text-xs font-medium text-blue-300 shadow-xl backdrop-blur-md">
              4+ years shipping code
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
              About Me
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Chinedu Nnadozie Oscar
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              I&apos;m a fullstack developer with 4 years of experience building
              web applications from the ground up. I enjoy solving hard
              problems, and I care about getting the fundamentals right: code
              that scales, holds up under real traffic, and doesn&apos;t break
              in production.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {highlights.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-blue-400/20 bg-blue-500/5 px-4 py-2 text-sm text-slate-200"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ---- Connector ---- */}
        <div className="mx-auto my-16 flex max-w-xs items-center gap-4 sm:my-20">
          <div className="h-px flex-1 bg-linear-to-r from-transparent to-blue-400/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          <div className="h-px flex-1 bg-linear-to-l from-transparent to-blue-400/40" />
        </div>

        {/* ---- Tech Stack ---- */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
            Technologies
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            What I Build With
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {STACK.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3.5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30"
              style={{ "--tech-color": color }}
            >
              <Icon
                size={16}
                className="text-slate-400 transition-colors duration-300 group-hover:text-(--tech-color)"
              />
              <span className="text-xs font-medium text-slate-300 transition-colors duration-300 group-hover:text-white">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
