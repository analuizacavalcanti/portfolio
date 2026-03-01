import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
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

const clients = [
  "Akris",
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
  "Total Wine & More",
  "Woolrich",
];

const contentItems = [
  { type: "Talk", title: "Unfair by Design", venue: "Creative Mornings Düsseldorf", date: "April 4, 2025" },
  { type: "Talk", title: "Into Design Systems", venue: "Düsseldorf Chapter", date: "April 2, 2025" },
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
          <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6">
            <div className="md:col-span-6">
              <H1 className="text-foreground text-5xl md:text-6xl lg:text-[3.5rem]">
                My work lives where logic meets play.
              </H1>
              <p className="font-sans text-5xl leading-[1.05] tracking-[-0.02em] md:text-6xl lg:text-[3.5rem] text-foreground/50">
                I am a lead product designer, creating work that combines strategy with strong visuals. Design is the essence of everything I do.
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
        </Container>
      </section>

      {/* ––– Selected Work ––– */}
      <section className="py-24">
        <Container>
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
                <div className="hidden md:block md:col-span-1 pt-0.5">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="hidden md:block md:col-span-1 pt-0.5">
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

          {/* Photo + Bio */}
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
                I&apos;m a multidisciplinary designer, and I like to bring all my passions and experiences together in my work.
              </P>
              <P>
                Currently, I&apos;m a Senior Product Designer at Thoughtworks, focused on design systems and accessibility. 
                </P>
                <P>
                I&apos;ve led design system initiatives at enterprise scale, run brand and web projects for studios and independent clients, and built a workshop practice that reached hundreds of participants online and offline.
              </P>
              <P>
                I believe design is never just visual. It&apos;s structural and
                strategic. It&apos;s about intention and inclusion.
              </P>
              <P>
                Based in <strong>Düsseldorf, Germany</strong>. Available for select
                collaborations, speaking engagements, and mentorship.
              </P>
            </div>
          </div>

          <Separator className="mb-16" />

          {/* Disciplines + Skills */}
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

          {/* Selected clients */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6">
              <div className="md:col-span-1">
                <Kicker className="mb-6">Clients</Kicker>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm text-muted-foreground leading-[2]">
                  {clients.join(" · ")}
                </p>
              </div>
            </div>
          </section>
        </Container>
      </section>

      {/* ––– Speaking & Content ––– */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <header className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6">
              <div className="md:col-span-1 flex items-start pt-1">
                <Kicker>Content</Kicker>
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

          {/* Speaking list */}
          <div className="divide-y divide-border mb-20">
            {contentItems.map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-8 gap-x-6 gap-y-1 py-8">
                <div className="md:col-span-2">
                  <span className="font-mono text-xs text-muted-foreground">{item.date}</span>
                </div>
                <div className="md:col-span-4">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <Badge variant="default" className="text-xs font-normal shrink-0">{item.type}</Badge>
                    <H3 className="text-base font-semibold">{item.title}</H3>
                  </div>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <span className="font-sans text-xs text-muted-foreground">{item.venue}</span>
                </div>
              </div>
            ))}
          </div>

        </Container>
      </section>
    </>
  );
}
