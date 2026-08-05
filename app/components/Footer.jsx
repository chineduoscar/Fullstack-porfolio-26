"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaGithub,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

const SOCIALS = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/nnadozie-chinedu-62448a19b/",
  },
  { name: "GitHub", icon: FaGithub, href: "https://github.com/Chineduoscar" },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "https://www.facebook.com/therealmatcher",
  },
  { name: "X", icon: FaXTwitter, href: "https://x.com/therealmatcher" },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/10 bg-[#0a0c10] px-4 pb-8 pt-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-3">
          {/* ---- Brand ---- */}
          <div className="sm:col-span-1">
            <p className="text-lg font-semibold text-white">
              Chinedu Nnadozie Oscar
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Fullstack developer building fast, reliable web applications end
              to end.
            </p>

            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/3 text-slate-300 transition-colors hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* ---- Nav ---- */}
          <div className="sm:col-span-1">
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Contact ---- */}
          <div className="sm:col-span-1">
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
              Get In Touch
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="tel:+2348122551232"
                  className="flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  <FaPhone size={13} className="shrink-0 text-blue-400" />
                  0812 255 1232
                </a>
              </li>
              <li>
                <a
                  href="mailto:chinedunnadozieo@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  <FaEnvelope size={13} className="shrink-0 text-blue-400" />
                  chinedunnadozieo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ---- Bottom bar ---- */}
        <div className="mt-14 flex justify-center items-center gap-3 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-slate-500">
            &copy; {year} Chinedu Nnadozie Oscar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
