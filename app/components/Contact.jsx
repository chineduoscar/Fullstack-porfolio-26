"use client";

import {
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaGithub,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

const CONTACT_ITEMS = [
  {
    label: "Phone",
    value: "0812 255 1232",
    href: "tel:+2348122551232",
    icon: FaPhone,
  },
  {
    label: "Email",
    value: "chinedunnadozieo@gmail.com",
    href: "mailto:chinedunnadozieo@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    value: "nnadozie-chinedu",
    href: "https://www.linkedin.com/in/nnadozie-chinedu-62448a19b/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "Chineduoscar",
    href: "https://github.com/Chineduoscar",
    icon: FaGithub,
  },
  {
    label: "X",
    value: "therealmatcher",
    href: "https://x.com/therealmatcher",
    icon: FaXTwitter,
  },
  {
    label: "Facebook",
    value: "therealmatcher",
    href: "https://www.facebook.com/therealmatcher",
    icon: FaFacebook,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#0a0c10] px-4 py-20 sm:px-6 sm:py-28"
    >
      {/* Ambient blue glow, consistent with other sections */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-150 w-225 -translate-x-1/2 rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
          Get In Touch
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Let&apos;s Connect
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACT_ITEMS.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 px-5 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-white/6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-400 transition-colors duration-300 group-hover:bg-blue-500/20">
                <Icon size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-wide text-slate-400">
                  {label}
                </span>
                <span className="block truncate text-sm font-medium text-slate-200 transition-colors group-hover:text-white">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
