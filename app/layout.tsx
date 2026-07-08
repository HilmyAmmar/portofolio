import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hilmyammar.tech"),
  title: "Hilmy Ammar Darmawan — Software Engineer",
  description:
    "Hilmy Ammar Darmawan — Software Engineer and Computer Science undergraduate at Universitas Indonesia, building full-stack and mobile applications.",
  icons: {
    icon: "/logo.ico",
  },
  openGraph: {
    title: "Hilmy Ammar Darmawan — Software Engineer",
    description:
      "Full-Stack & Mobile Developer based in Jakarta, Indonesia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
