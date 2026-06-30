import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import CommandBar from "@/features/command-bar/CommandBar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
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
      className={`${outfit.variable} ${plusJakarta.variable} antialiased`}
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
