"use client";

import { ExternalLink, CreditCard } from "lucide-react";
import {
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiJsonwebtokens,
  SiMongodb,
  SiNetlify,
  SiLaravel,
  SiMysql,
  SiPaypal,
  SiGoogle,
  SiGithub,
} from "react-icons/si";
import Image from "next/image";
import booklide from "../assests/booklide.png";
import sotrack from "../assests/sotrack.png";
import medicare from "../assests/medicare.png";
import dogdee from "../assests/dogdee.png";
import cashconnect from "../assests/cashconnect.png";
import learnqube from "../assests/learnqube.png";

const PROJECTS = [
  {
    name: "Sotrack Driving School",
    description:
      "A driving school platform with role-based access across users, drivers, admins, and super admins. Users enroll in and pay for courses, admins monitor activity across the school, and super admins assign drivers and manage staff roles.",
    image: sotrack,
    stack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Express", icon: SiExpress },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Paystack", icon: CreditCard },
      { name: "Netlify", icon: SiNetlify },
    ],
    liveUrl: "https://sotrackdriving.netlify.app/",
  },
  {
    name: "CashConnect",
    description:
      "A crypto and gift card trading platform with support for international currency exchange, letting users buy and sell through PayPal and Zelle.",
    image: cashconnect,
    stack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Laravel", icon: SiLaravel },
      { name: "MySQL", icon: SiMysql },
    ],
    liveUrl: "https://cashconnectworld.com/",
  },
  {
    name: "Booklide",
    description:
      "A marketplace where writers upload and sell their books directly, and readers can browse and purchase titles.",
    image: booklide,
    stack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Netlify", icon: SiNetlify },
    ],
    liveUrl: "https://booklide.netlify.app/",
  },
  {
    name: "Medicare",
    description:
      "A medical consultation platform where visitors can subscribe to a health newsletter and message a doctor directly.",
    image: medicare,
    stack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Netlify", icon: SiNetlify },
    ],
    liveUrl: "https://mymedicares.netlify.app/",
  },
  {
    name: "LearnQube",
    description:
      "A course marketplace where learners buy courses and get instant access to watch them, with Google sign-in for fast onboarding.",
    image: learnqube,
    stack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Google Auth", icon: SiGoogle },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Netlify", icon: SiNetlify },
    ],
    liveUrl: "https://learnqube.netlify.app/",
  },
  {
    name: "DogDee",
    description:
      "A dog adoption platform where visitors can browse available dogs and send a message to request an adoption.",
    image: dogdee,
    stack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Netlify", icon: SiNetlify },
    ],
    liveUrl: "https://dogdee.netlify.app/",
  },
];

const GITHUB_URL = "https://github.com/Chineduoscar";

export default function Projects() {
  return (
    <section
      id="project"
      className="relative w-full overflow-hidden bg-[#0a0c10] px-4 py-12 sm:px-6 sm:py-20"
    >
      <div className="relative mx-auto max-w-5xl">
        {/* ---- Heading ---- */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Things I&apos;ve Built
          </h2>
        </div>

        {/* ---- Project Grid ---- */}
        <div className="grid gap-6 sm:grid-cols-2 mt-12">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#121620] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30"
            >
              <div className="absolute -inset-px -z-10 rounded-3xl bg-blue-500/0 blur-2xl transition-all duration-300 group-hover:bg-blue-500/5" />

              <Image
                width={200}
                height={200}
                src={project.image}
                alt={project.name}
                className="h-44 w-full object-cover"
              />

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex shrink-0 items-center gap-1.5 rounded-full border border-blue-400/20 bg-blue-500/5 px-3.5 py-1.5 text-xs font-medium text-blue-300 transition-colors duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-200"
                  >
                    View Live
                    <ExternalLink size={12} />
                  </a>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/3 px-3 py-1.5"
                    >
                      <Icon size={13} className="text-slate-400" />
                      <span className="text-xs font-medium text-slate-300">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---- See more ---- */}
        <div className="mt-14 flex justify-center">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-blue-400/30 hover:text-white"
          >
            <SiGithub
              size={16}
              className="text-slate-400 transition-colors duration-300 group-hover:text-blue-300"
            />
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
