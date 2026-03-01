import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { H1, H3, Kicker, P, InlineLink } from "@/components/typography";
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

const clientLogos = [
  { name: "BCG Digital Ventures", src: "/images/Logo Clients/boston-consulting-group-logo-png_seeklogo-615592 1.png" },
  { name: "Biotherm",             src: "/images/Logo Clients/Biotherm.png" },
  { name: "Burberry",             src: "/images/Logo Clients/Burberry.png" },
  { name: "Design Hotels",        src: "/images/Logo Clients/Design Hotels Long.png" },
  { name: "Dior",                 src: "/images/Logo Clients/Dior.png" },
  { name: "Douglas",              src: "/images/Logo Clients/Douglas.png" },
  { name: "Gucci",                src: "/images/Logo Clients/Gucci.png" },
  { name: "Harry Winston",        src: "/images/Logo Clients/Harry Winston.png" },
  { name: "HEMA",                 src: "/images/Logo Clients/Hema 1.png" },
  { name: "Jo Malone",            src: "/images/Logo Clients/Jo Malone.png" },
  { name: "Lacoste",              src: "/images/Logo Clients/Lacoste.png" },
  { name: "Lancôme",              src: "/images/Logo Clients/Lancome.png" },
  { name: "Mercedes-Benz",        src: "/images/Logo Clients/Mercedes.png" },
  { name: "Miu Miu",              src: "/images/Logo Clients/miu miu.png" },
  { name: "Shiseido",             src: "/images/Logo Clients/Shiseido.png" },
  { name: "Soho House",           src: "/images/Logo Clients/Soho House.png" },
  { name: "Woolrich",             src: "/images/Logo Clients/Woolrich.png" },
];

const contentItems = [
  { type: "Talk", title: "Unfair by Design", venue: "Creative Mornings Düsseldorf", date: "April 4, 2025" },
  { type: "Hosting", title: "Into Design Systems", venue: "Düsseldorf Chapter", date: "April 2, 2025" },
  { type: "Talk", title: "Designers Shift!", venue: "Service Design Drinks Cologne", date: "January 31, 2024" },
  { type: "Talk", title: "Female Founders", venue: "Hochschule Düsseldorf", date: "October 8, 2023" },
  { type: "Talk", title: "Kreativ & Erfolgreich", venue: "Start-Up Woche Düsseldorf", date: "September 4, 2019" },
];


export default function HomePage() {
  return (
    <>
      {/* ––– Hero ––– */}
      <section className="border-b border-border py-24 md:py-36">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6">
              <div className="md:col-span-6">
                <H1 className="text-foreground text-5xl md:text-6xl lg:text-[3.5rem]">
                  Visual design meets strategy.
                </H1>
                <p className="font-sans text-5xl leading-[1.05] tracking-[-0.02em] md:text-6xl lg:text-[3.5rem] text-foreground/50">
                As a lead product designer, I turn complexity into structure, and chaos into clarity.
                </p>
              </div>

              {/* Right rail — cols 7–8, bottom-aligned */}
              <div className="hidden md:flex md:col-span-2 flex-col justify-end items-end gap-1 pb-1">
                <span className="font-sans text-xs text-muted-foreground uppercase tracking-[0.1em]">
                  hello@analuiza.com
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  Düsseldorf, DE
                </span>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ––– Selected Work ––– */}
      <section className="py-24">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6 mb-14">
              <div className="md:col-span-1">
                <Kicker>Work</Kicker>
              </div>
            </div>
          </FadeIn>

          <div>
            {caseStudies.map((study, i) => (
              <FadeIn key={study.slug} delay={i * 80} className="border-b border-border first:border-t">
              <Link
                href={`/work/${study.slug}`}
                className="group grid grid-cols-1 md:grid-cols-8 gap-x-6 gap-y-3 py-10 md:items-baseline transition-opacity duration-200 hover:opacity-75"
              >
                <div className="hidden md:block md:col-span-1">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="hidden md:block md:col-span-1">
                  <span className="font-mono text-xs text-muted-foreground">
                    {study.year}
                  </span>
                </div>
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
                <div className="hidden md:flex md:col-span-1 justify-end">
                  <span
                    className="font-sans text-xs text-muted-foreground translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 motion-reduce:translate-x-0 motion-reduce:opacity-100"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
              </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ––– About ––– */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <FadeIn>
            <header className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6">
                <div className="md:col-start-1 md:col-span-1 flex items-start pt-1">
                  <Kicker>About</Kicker>
                </div>
                <div className="md:col-span-5 mt-4 md:mt-0">
                  <H1 className="mb-8">
                    Design is the essence of everything I do.
                  </H1>
                </div>
              </div>
            </header>
          </FadeIn>

          {/* Photo + Bio */}
          <FadeIn delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-20">
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
                  I&apos;m a multidisciplinary designer. Currently working as a Senior Product Designer at Thoughtworks, focusing on design systems and accessibility.
                </P>
                <P>
                  I&apos;ve led design system initiatives at enterprise scale, run brand and web projects for studios and independent clients, and built a workshop practice that reached hundreds of participants online and offline.
                </P>
              </div>
            </div>
          </FadeIn>

          <Separator className="mb-16" />

          {/* Disciplines + Skills */}
          <FadeIn delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 mb-20">
              <section className="col-span-1 md:col-span-2">
                <H3 className="mb-6">What I do</H3>
                <ul className="space-y-3">
                  {disciplines.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2.5 shrink-0 w-1 h-1 rounded-full bg-hi transition-colors duration-300" aria-hidden="true" />
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
                      <span className="mt-2.5 shrink-0 w-1 h-1 rounded-full bg-hi transition-colors duration-300" aria-hidden="true" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </FadeIn>

          {/* Selected clients — scrolling marquee */}
          <FadeIn delay={100}>
            <section className="mb-20">
              <Kicker className="mb-10">Clients</Kicker>
              <div className="overflow-hidden">
                <div className="animate-marquee flex items-center gap-16 w-max">
                  {[...clientLogos, ...clientLogos].map((client, i) => (
                    <Image
                      key={i}
                      src={client.src}
                      alt={client.name}
                      width={160}
                      height={52}
                      className="h-[70px] w-auto object-contain opacity-100 hover:grayscale hover:opacity-60 transition-all duration-300 shrink-0"
                    />
                  ))}
                </div>
              </div>
            </section>
          </FadeIn>
        </Container>
      </section>

      {/* ––– Speaking & Content ––– */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <FadeIn>
            <header className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6">
                <div className="md:col-span-1 flex items-start pt-1">
                  <Kicker>More</Kicker>
                </div>
                <div className="md:col-span-5 mt-4 md:mt-0">
                  <H1 className="mb-6">Speaking, Hosting & Facilitation</H1>
                  <P className="text-muted-foreground">
                    My topics are: design, accessibility, creative
                    entrepreneurship, and the honest realities of design work.
                  </P>
                </div>
              </div>
            </header>
          </FadeIn>

          {/* Speaking list */}
          <div className="mb-20">
            {contentItems.map((item, i) => (
              <FadeIn key={i} delay={i * 60} className="border-b border-border first:border-t">
                <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6 gap-y-1 py-8 md:items-center">
                  <div className="md:col-span-2">
                    <span className="font-mono text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <div className="md:col-span-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="default" className="text-xs font-normal shrink-0">{item.type}</Badge>
                      <H3 className="text-base font-semibold">{item.title}</H3>
                    </div>
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <span className="font-sans text-xs text-muted-foreground">{item.venue}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </Container>
      </section>
    </>
  );
}
