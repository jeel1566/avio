import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Avio Advision LLP | Connecting Talent, Building Businesses",
  description:
    "Executive search, talent acquisition and strategic advisory for growing organizations. Connecting exceptional people with forward-thinking businesses to create long-term value.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Avio Advision LLP",
    description: "Connecting Talent, Building Businesses.",
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
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-warm-100 font-sans text-navy-900 antialiased selection:bg-gold-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
