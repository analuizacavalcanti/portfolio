import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ThemeProvider } from "@/components/ThemeProvider";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  // variable font — no weight array needed
});

export const metadata: Metadata = {
  title: {
    default: "Ana Luiza — Product Designer & Strategist",
    template: "%s | Ana Luiza",
  },
  description:
    "Product designer and design strategist focused on clarity, systems, and meaningful outcomes.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ana Luiza",
  },
};

// Inline script: reads localStorage and sets .vivid on <html> before first paint
// Prevents flash of wrong color mode on reload
const colorModeScript = `try{var m=localStorage.getItem('color-mode');if(m==='vivid')document.documentElement.classList.add('vivid')}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: colorModeScript }} />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
