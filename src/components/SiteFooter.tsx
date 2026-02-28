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
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10 mt-24">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-muted-foreground tracking-tight">
            © {year} Ana Luiza. All rights reserved.
          </p>
          <ul className="flex items-center gap-5" role="list">
            {socialLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
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
