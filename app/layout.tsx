import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rayner Soto | Full-Stack Developer & Cybersecurity Specialist",
  description:
    "Portfolio of Rayner Soto (ray-sdj) - Full-Stack Developer specializing in cybersecurity, penetration testing, and modern web development. OSCP candidate with expertise in Next.js, Python, and security infrastructure.",
  keywords: [
    "Rayner Soto",
    "ray-sdj",
    "Full-Stack Developer",
    "Cybersecurity",
    "Penetration Testing",
    "OSCP",
    "Next.js",
    "Python",
    "Web Development",
  ],
  authors: [{ name: "Rayner Soto", url: "https://github.com/ray-SDJ" }],
  creator: "Rayner Soto",
  openGraph: {
    title: "Rayner Soto | Full-Stack Developer & Cybersecurity Specialist",
    description:
      "Portfolio showcasing cybersecurity projects, web development, and penetration testing expertise",
    url: "https://your-domain.com", // Replace with your actual domain
    siteName: "Rayner Soto Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pixelFont.className}>
      <body>{children}</body>
    </html>
  );
}
