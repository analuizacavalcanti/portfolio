import Link from "next/link";
import { Container } from "@/components/Container";
import { H1, H3, Lead, Kicker, P } from "@/components/typography";
import { caseStudies } from "@/data/case-studies";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <>
      {/* ––– Hero ––– */}
      <section className="border-b border-border py-24 md:py-36">
        <Container>
          <div className="max-w-4xl">
            <H1 className="mb-8 text-foreground">
              My work lives where
              <br />
              logic meets play.
            </H1>
            <Lead className="max-w-[52ch] text-4xl">
              Color, pattern, type, and structure — melting together into bold
              visual stories. From design systems to brand, I bring all sides of
              my practice together.
            </Lead>
          </div>
        </Container>
      </section>

      {/* ––– Selected Work ––– */}
      <section className="py-24">
        <Container>
          <Kicker className="mb-14">Selected Work</Kicker>

          <div className="divide-y divide-border">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group flex flex-col gap-4 py-10 transition-opacity duration-200 hover:opacity-80 focus-visible:opacity-80 sm:flex-row sm:items-start sm:gap-12"
              >
                {/* Year */}
                <span className="font-mono text-xs text-muted-foreground shrink-0 pt-1 sm:w-12">
                  {study.year}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <H3 className="transition-none">{study.title}</H3>
                    <span
                      className="font-sans text-xs text-muted-foreground hidden sm:block shrink-0 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 motion-reduce:translate-x-0 motion-reduce:opacity-100"
                      aria-hidden="true"
                    >
                      View ↗
                    </span>
                  </div>
                  <P className="text-muted-foreground mb-4 max-w-[60ch]">
                    {study.summary}
                  </P>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="font-normal text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ––– About teaser ––– */}
      <section className="border-t border-border py-24">
        <Container>
          <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-[44ch]">
              <Kicker className="mb-4">About</Kicker>
              <P className="text-foreground/80">
                Multidisciplinary designer based in Düsseldorf. Currently Lead
                Product Designer & Mentor at Thoughtworks, focused on design
                systems and accessibility.
              </P>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium shrink-0 underline underline-offset-4 decoration-foreground/30 transition-colors hover:decoration-foreground"
            >
              More about me
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
