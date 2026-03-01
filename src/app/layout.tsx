import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ThemeProvider } from "@/components/ThemeProvider";

const circular = localFont({
  src: [
    { path: "../../public/fonts/CircularStd-Book.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/CircularStd-BookItalic.otf", weight: "400", style: "italic" },
    { path: "../../public/fonts/CircularStd-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/CircularStd-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-circular",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
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
      className={`${circular.variable} ${ibmPlexMono.variable}`}
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
