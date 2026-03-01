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
        {/* Page header — kicker left rail, title offset */}
        <header className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6">
            <div className="md:col-span-1 flex items-start pt-1">
              <Kicker>Work</Kicker>
            </div>
            <div className="md:col-span-5 mt-4 md:mt-0">
              <H1 className="mb-6">Selected Projects</H1>
              <P className="text-muted-foreground">
                A curated set of case studies across product design, design systems,
                and strategic product work.
              </P>
            </div>
          </div>
        </header>

        {/* Project list — numbered, full width */}
        <div className="divide-y divide-border">
          {caseStudies.map((study, i) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group grid grid-cols-1 md:grid-cols-8 gap-x-6 gap-y-3 py-10 transition-opacity duration-200 hover:opacity-75"
            >
              {/* Index */}
              <div className="hidden md:block md:col-span-1 pt-0.5">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Year + client stacked */}
              <div className="hidden md:flex md:col-span-1 flex-col gap-1 pt-0.5">
                <span className="font-mono text-xs text-muted-foreground">
                  {study.year}
                </span>
                <span className="font-sans text-xs text-muted-foreground">
                  {study.client}
                </span>
              </div>

              {/* Content — cols 3–7 */}
              <div className="md:col-span-5">
                <H3 className="mb-3">{study.title}</H3>
                <P className="text-muted-foreground mb-4">{study.summary}</P>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-normal text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Arrow — col 8 */}
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
    </div>
  );
}
