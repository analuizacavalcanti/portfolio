import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { H1, H3, Kicker, P } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies in product design and strategy.",
};

export default function WorkPage() {
  return (
    <div className="py-20 md:py-28">
      <Container>
        {/* Page header */}
        <header className="mb-20 max-w-2xl">
          <Kicker className="mb-5">Work</Kicker>
          <H1 className="mb-6">Selected Projects</H1>
          <P className="text-muted-foreground">
            A curated set of case studies across product design, design systems,
            and strategic product work.
          </P>
        </header>

        {/* Project list */}
        <div className="divide-y divide-border">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group grid gap-4 py-10 transition-opacity duration-200 hover:opacity-75 md:grid-cols-[120px_1fr]"
            >
              {/* Meta column */}
              <div className="flex flex-row gap-4 md:flex-col md:gap-1 md:pt-0.5">
                <span className="font-mono text-xs text-muted-foreground">
                  {study.year}
                </span>
                <span className="font-sans text-xs text-muted-foreground">
                  {study.client}
                </span>
              </div>

              {/* Content column */}
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <H3>{study.title}</H3>
                  <span
                    className="font-sans text-xs text-muted-foreground hidden sm:block shrink-0 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 motion-reduce:translate-x-0 motion-reduce:opacity-100"
                    aria-hidden="true"
                  >
                    Read ↗
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
    </div>
  );
}
