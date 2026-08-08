"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/", type: "route" },
  { label: "About", href: "#about", type: "hash" },
  { label: "Projects", href: "#project", type: "hash" },
  { label: "Contact", href: "#contact", type: "hash" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center justify-self-start">
      <Image
        src="/logo.png"
        alt="Logo"
        width={140}
        height={40}
        priority
        className="h-7 w-auto sm:h-9"
      />
    </Link>
  );
}

function ResumeDownload({ className = "" }) {
  return (
    <a
      href="https://drive.google.com/file/d/1G8Obvem3z0abaZ9Pz7jB7VgJnVCrLAe6/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 rounded-full border border-white/10 bg-white/2 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/6 ${className}`}
    >
      Resume
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M8 2.5V10.5M8 10.5L4.5 7M8 10.5L11.5 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 13.5H13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </a>
  );
}

function NavLink({ link, isActive, showDivider, onClick, mobile = false }) {
  const className = mobile
    ? isActive
      ? "rounded-xl border border-blue-400/40 bg-blue-500/15 px-4 py-3 text-sm font-medium text-white"
      : "rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/3 hover:text-white"
    : isActive
      ? "rounded-full border border-blue-400/40 bg-blue-500/15 px-5 py-2 text-sm font-medium text-white transition-colors"
      : `px-5 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white ${
          showDivider ? "border-l border-white/10" : ""
        }`;

  if (link.type === "route") {
    return (
      <Link href={link.href} onClick={onClick} className={className}>
        {link.label}
      </Link>
    );
  }

  return (
    <a href={link.href} onClick={onClick} className={className}>
      {link.label}
    </a>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-[#0d0f15]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5 md:grid md:grid-cols-[auto_1fr_auto] md:gap-6">
        <Logo />

        {/* Desktop nav — centered */}
        <nav className="hidden items-center justify-self-center gap-4 rounded-full border border-white/10 bg-white/2 p-2 md:flex">
          {NAV_LINKS.map((link, index) => {
            const isActive = link.type === "route" && pathname === link.href;
            const showDivider = index !== 0 && !isActive;
            return (
              <NavLink
                key={link.href}
                link={link}
                isActive={isActive}
                showDivider={showDivider}
              />
            );
          })}
        </nav>

        {/* Desktop resume button — right */}
        <ResumeDownload className="hidden justify-self-end md:flex" />

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
        >
          {isOpen ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L17 17M17 1L1 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H17M1 7H17M1 13H17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav panel */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-5">
          {NAV_LINKS.map((link) => {
            const isActive = link.type === "route" && pathname === link.href;
            return (
              <NavLink
                key={link.href}
                link={link}
                isActive={isActive}
                onClick={() => setIsOpen(false)}
                mobile
              />
            );
          })}
          <ResumeDownload className="mt-2 justify-center" />
        </nav>
      </div>
    </header>
  );
}
