import Link from "next/link";
import { Container } from "./Container";

const socialLinks = [
  {
    href: "https://www.instagram.com/analuiza.studio",
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/ana-luiza-cavalcanti",
    label: "LinkedIn",
  },
  {
    href: "https://www.pinterest.com/analuizaaa",
    label: "Pinterest",
  },
  {
    href: "https://analuiza.kit.com",
    label: "Newsletter",
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="sticky bottom-0 z-0 border-t border-border bg-background" style={{ paddingTop: "6rem", paddingBottom: "2rem" }}>
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="font-sans text-sm text-muted-foreground">
            Based in <strong>Düsseldorf, Germany</strong>.<br />Available for select
            collaborations, speaking engagements, and mentorship.{" "}
              <a
                href="mailto:hello@analuiza.com"
                className="text-foreground underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition-colors"
              >
                hello@analuiza.com
              </a>
            </p>
            <div className="flex items-baseline gap-4">
              <p className="font-sans text-xs text-muted-foreground tracking-tight">
                © {year} Ana Luiza. All rights reserved.
              </p>
              <Link
                href="/imprint"
                className="font-sans text-xs text-muted-foreground transition-colors hover:text-foreground hover:underline underline-offset-2"
              >
                Imprint
              </Link>
            </div>
          </div>
          <ul className="flex flex-col -space-y-2" role="list">
            {socialLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground hover:underline underline-offset-2"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
