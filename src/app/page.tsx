import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { H1, H3, Kicker, Lead, P, InlineLink } from "@/components/typography";
import { caseStudies } from "@/data/case-studies";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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

export default function HomePage() {
  return (
    <>
      {/* ––– Hero ––– */}
      <section className="border-b border-border py-24 md:py-36">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6">
            {/* Title — cols 1–6 */}
            <div className="md:col-span-6">
              <H1 className="mb-6 text-foreground text-4xl md:text-5xl lg:text-6xl">
                My work lives where logic meets play.
              </H1>
              <p className="font-sans text-4xl leading-[1.05] tracking-[-0.02em] md:text-5xl lg:text-6xl text-foreground/50">
                Color, pattern, type, and structure, melting into bold visual stories. From design systems to brand, I bring all sides of my practice together.
              </p>
            </div>

            {/* Right rail — cols 7–8, bottom-aligned */}
            <div className="hidden md:flex md:col-span-2 flex-col justify-end items-end gap-1 pb-1">
              <span className="font-sans text-xs text-muted-foreground uppercase tracking-[0.1em]">
                Product Designer
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                Düsseldorf, DE
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ––– Selected Work ––– */}
      <section className="py-24">
        <Container>
          {/* Section label — left rail */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6 mb-14">
            <div className="md:col-span-1">
              <Kicker>Work</Kicker>
            </div>
          </div>

          <div className="divide-y divide-border">
            {caseStudies.map((study, i) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group grid grid-cols-1 md:grid-cols-8 gap-x-6 gap-y-3 py-10 transition-opacity duration-200 hover:opacity-75"
              >
                {/* Index number */}
                <div className="hidden md:block md:col-span-1 pt-0.5">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Year */}
                <div className="hidden md:block md:col-span-1 pt-0.5">
                  <span className="font-mono text-xs text-muted-foreground">
                    {study.year}
                  </span>
                </div>

                {/* Title + summary + tags — cols 3–7 */}
                <div className="md:col-span-5">
                  <H3 className="mb-3 transition-none">{study.title}</H3>
                  <P className="text-muted-foreground mb-4">{study.summary}</P>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Arrow — col 8, right-aligned */}
                <div className="hidden md:flex md:col-span-1 justify-end items-start pt-0.5">
                  <span
                    className="font-sans text-xs text-muted-foreground translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 motion-reduce:translate-x-0 motion-reduce:opacity-100"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ––– About ––– */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          {/* Header — offset from col 3 */}
          <header className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6">
              <div className="md:col-start-1 md:col-span-1 flex items-start pt-1">
                <Kicker>About</Kicker>
              </div>
              <div className="md:col-span-5 mt-4 md:mt-0">
                <H1 className="mb-8">
                  Design is the essence of everything I do.
                </H1>
                <Lead className="max-w-[44ch]">
                  My work lives where logic meets play: color, pattern, type, and
                  structure all melting together into bold visual stories.
                </Lead>
              </div>
            </div>
          </header>

          {/* Photo + Bio — side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-20 mt-16">
            <Image
              src="/images/ana-luiza.jpg"
              alt="Ana Luiza"
              width={1280}
              height={720}
              className="w-full object-cover"
              priority
            />
            <div className="space-y-5 flex flex-col justify-center">
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
            </div>
          </div>

          <Separator className="mb-16" />

          {/* Disciplines + Skills — full width, 4-col each */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 mb-20">
            <section className="col-span-1 md:col-span-2">
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

            <section className="col-span-1 md:col-span-2">
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

          {/* Selected clients — full width */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6">
              <div className="md:col-span-1">
                <H3 className="mb-6 text-muted-foreground font-medium text-base">
                  Clients
                </H3>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm text-muted-foreground leading-[2]">
                  {clients.join(" · ")}
                </p>
              </div>
            </div>
          </section>

          <Separator className="mb-16" />

          {/* CTA */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6">
            <div className="md:col-start-2 md:col-span-5">
              <P className="mb-0 text-muted-foreground">
                Interested in working together?{" "}
                <InlineLink href="mailto:hello@analuiza.com">
                  hello@analuiza.com
                </InlineLink>
              </P>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
