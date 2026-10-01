import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-cabinet",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Avio Advision LLP | Connecting Talent, Building Businesses",
  description:
    "Executive search and strategic talent advisory firm committed to connecting exceptional talent with forward-thinking organizations.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Avio Advision LLP",
    description: "Executive Search & Strategic Talent Advisory",
    siteName: "Avio Advision LLP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen bg-warm-100 font-sans text-navy-900 antialiased selection:bg-gold-500 selection:text-navy-950">
        {children}
      </body>
    </html>
  );
}
