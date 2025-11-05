import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Lumin Agency — AI, App & Web Studio",
  description:
    "Lumin Agency crafts glassmorphic, AI-native digital experiences blending strategy, product design, and engineering for visionary teams.",
  keywords: [
    "AI agency",
    "product design",
    "Next.js studio",
    "glassmorphism",
    "3D web design",
  ],
  openGraph: {
    title: "Lumin Agency — AI, App & Web Studio",
    description:
      "Glassmorphic experiences engineered with AI-native workflows for brands that move fast.",
    url: "https://agentic-8e93c88b.vercel.app",
    siteName: "Lumin Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumin Agency — AI, App & Web Studio",
    description:
      "Glassmorphic experiences engineered with AI-native workflows for brands that move fast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${mono.variable} bg-slate-950 text-white antialiased`}
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
