"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { ColorModeToggle } from "./ColorModeToggle";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/content", label: "Content" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <Container>
        <nav
          className="flex h-14 justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity duration-150 hover:opacity-70 focus-visible:opacity-70"
            aria-label="Ana Luiza — home"
          >
            <Image
              src="/logo.png"
              alt="Ana Luiza"
              height={131}
              width={500}
              className="h-[34px] w-auto"
              priority
            />
          </Link>

          {/* Nav links + color mode toggle */}
          <ul className="flex h-full items-center gap-7" role="list">
            {navLinks.map(({ href, label }) => {
              const isActive =
                pathname === href || pathname.startsWith(href + "/");
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "relative font-sans text-sm font-medium tracking-[-0.005em] transition-colors duration-150",
                      // animated underline — uses hi-strong so it turns blue in vivid mode
                      "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-hi-strong",
                      "after:transition-[width] after:duration-300 after:ease-out",
                      "hover:after:w-full focus-visible:after:w-full",
                      "motion-reduce:after:transition-none",
                      isActive
                        ? "text-foreground after:w-full"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}

            {/* Color mode toggle — separated visually from links */}
            <li className="ml-1">
              <ColorModeToggle />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
