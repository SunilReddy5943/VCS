import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import CommandBar from "@/features/command-bar/CommandBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VCS — Enterprise Salesforce Consulting & Digital Transformation",
    template: "%s | Value Cloud Services",
  },
  description:
    "Value Cloud Services (VCS) delivers premium Salesforce consulting, implementation, managed services, integration, and digital transformation solutions for enterprises worldwide.",
  keywords: [
    "Salesforce Consulting",
    "Digital Transformation",
    "CRM Implementation",
    "Enterprise Solutions",
    "Managed Services",
    "Salesforce Integration",
    "Cloud Solutions",
    "Value Cloud Services",
  ],
  authors: [{ name: "Value Cloud Services" }],
  creator: "Value Cloud Services",
  metadataBase: new URL("https://valuecloudservices.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://valuecloudservices.com",
    siteName: "Value Cloud Services",
    title: "VCS — Enterprise Salesforce Consulting & Digital Transformation",
    description:
      "Empowering enterprises with premium Salesforce consulting, implementation, managed services, and digital transformation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VCS — Enterprise Salesforce Consulting",
    description:
      "Premium Salesforce consulting and digital transformation for enterprises.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-surface-white text-text-primary">
        {/* Skip Navigation */}
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>

        {/* Navigation */}
        <Navbar />



        {/* Main Content */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Core Interactive Layer */}
        <CommandBar />
      </body>
    </html>
  );
}
