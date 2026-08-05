import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "Chinedu Nnadozie Oscar";
const siteUrl = "https://chineduoscar.pro";
const siteDescription =
  "Chinedu Nnadozie Oscar is a fullstack developer building fast, reliable web applications with React, Next.js, Express, and MongoDB.";

const socialLinks = [
  "https://x.com/therealmatcher",
  "https://www.linkedin.com/in/nnadozie-chinedu-62448a19b/",
  "https://github.com/Chineduoscar",
];

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Fullstack Developer`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Chinedu Nnadozie Oscar",
    "Chinedu Oscar",
    "Chinedu Nnadozie",
    "Fullstack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js",
    "MongoDB",
    "Web Developer Portfolio",
    "Web Developer in Port Harcourt",
    "Web Developer in Africa",
    "Web Developer in Nigeria",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  applicationName: siteName,
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} | Fullstack Developer`,
    description: siteDescription,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteName} — Fullstack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Fullstack Developer`,
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "https://x.com/therealmatcher",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    url: siteUrl,
    jobTitle: "Fullstack Developer",
    sameAs: socialLinks,
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
