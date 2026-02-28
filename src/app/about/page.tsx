import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { H1, H3, Kicker, P, Lead, InlineLink } from "@/components/typography";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description:
    "Multidisciplinary designer based in Düsseldorf. My work lives where logic meets play.",
};

const disciplines = [
  "Design Systems",
  "Accessibility",
  "Branding & Web Design",
  "Product Design",
  "Teaching & Facilitation",
  "Speaking & Hosting",
];

const skills = [
  "Graphic Design",
  "Type & Lettering",
  "Surface Design",
  "Service Design",
  "Strategy",
  "Visual Art",
];

const clients = [
  "BCG Digital Ventures",
  "Biotherm",
  "Burberry",
  "Design Hotels",
  "Dior",
  "Douglas",
  "Gucci",
  "Harry Winston",
  "HEMA",
  "Jo Malone",
  "Lacoste",
  "Lancôme",
  "Mercedes-Benz",
  "Miu Miu",
  "Shiseido",
  "Soho House",
  "Woolrich",
];

export default function AboutPage() {
  return (
    <div className="py-20 md:py-28">
      <Container size="default">
        {/* Header */}
        <header className="mb-20">
          <Kicker className="mb-5">About</Kicker>
          <H1 className="mb-8 max-w-[14ch]">
            Design is the essence of everything I do.
          </H1>
          <Lead className="max-w-[44ch]">
            My work lives where logic meets play: color, pattern, type, and
            structure all melting together into bold visual stories.
          </Lead>
        </header>

        <Separator className="mb-16" />

        {/* Bio */}
        <section className="mb-20 space-y-5">
          <P>
            I&apos;m a multidisciplinary designer — my path isn&apos;t linear,
            and I bring all my passions and experiences together in my work.
            This site brings together all sides of my creative practice: from
            visual art to product design.
          </P>
          <P>
            Currently, I&apos;m a Lead Product Designer and Mentor at{" "}
            <InlineLink
              href="https://www.thoughtworks.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Thoughtworks
            </InlineLink>
            , focused on design systems and accessibility. I&apos;ve led design
            system initiatives at enterprise scale, run brand and web projects
            for studios and independent clients, and built a workshop practice
            that reached 52 sessions across 7 cities and 416 participants.
          </P>
          <P>
            I believe design is never just visual — it&apos;s structural,
            strategic, and political. Whether I&apos;m governing a component
            library or refining a logo&apos;s kerning, the same instinct is at
            work: make it coherent, make it accessible, make it last.
          </P>
          <P>
            Based in <strong>Düsseldorf, Germany</strong>. Available for select
            collaborations, speaking engagements, and mentorship.
          </P>
        </section>

        {/* Disciplines + Skills */}
        <div className="grid gap-12 sm:grid-cols-2 mb-20">
          <section>
            <H3 className="mb-6">What I do</H3>
            <ul className="space-y-3">
              {disciplines.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-2.5 shrink-0 w-1 h-1 rounded-full bg-hi transition-colors duration-300"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <H3 className="mb-6">Disciplines</H3>
            <ul className="space-y-3">
              {skills.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-2.5 shrink-0 w-1 h-1 rounded-full bg-hi transition-colors duration-300"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Selected clients */}
        <section className="mb-20">
          <H3 className="mb-6 text-muted-foreground font-medium text-base">
            Selected clients
          </H3>
          <p className="text-sm text-muted-foreground leading-[2]">
            {clients.join(" · ")}
          </p>
        </section>

        <Separator className="mb-16" />

        {/* CTA */}
        <section>
          <P className="mb-0 text-muted-foreground max-w-[40ch]">
            Interested in working together?{" "}
            <InlineLink href="mailto:hello@analuiza.com">
              hello@analuiza.com
            </InlineLink>
          </P>
        </section>
      </Container>
    </div>
  );
}
