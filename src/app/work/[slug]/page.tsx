import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { H1, H3, Kicker, P } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { caseStudies, getCaseStudy } from "@/data/case-studies";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <article>
      {/* ––– Case study header ––– */}
      <header className="border-b border-border py-20 md:py-28">
        <Container>
          <Link
            href="/work"
            className="mb-10 inline-flex items-center gap-2 font-sans text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span aria-hidden="true">←</span> All work
          </Link>

          <div className="max-w-3xl">
            <Kicker className="mb-5">Case Study — {study.role}</Kicker>
            <H1 className="mb-4">{study.title}</H1>
            <p className="font-sans text-2xl text-muted-foreground mb-10 tracking-[-0.01em]">
              {study.tagline}
            </p>

            {/* Project meta */}
            <dl className="flex flex-wrap gap-x-10 gap-y-3 mb-10">
              {[
                { dt: "Year", dd: study.year },
                { dt: "Client", dd: study.client },
                { dt: "Role", dd: study.role },
              ].map(({ dt, dd }) => (
                <div key={dt}>
                  <dt className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-muted-foreground mb-0.5">
                    {dt}
                  </dt>
                  <dd className="font-sans text-sm font-medium">{dd}</dd>
                </div>
              ))}
            </dl>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-normal text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </header>

      {/* ––– Case study body ––– */}
      <div className="py-20">
        <Container size="default">
          {/* Summary */}
          <div className="mb-16">
            <p className="font-sans text-xl leading-[1.7] text-foreground/85 md:text-2xl">
              {study.summary}
            </p>
          </div>

          <Separator className="mb-16" />

          {/* Sections: Context → Role → Constraints → Approach → Key Decisions */}
          <div className="space-y-14">
            {study.sections.map((section) => (
              <section key={section.label}>
                <H3 className="mb-4 text-muted-foreground font-medium">
                  {section.label}
                </H3>
                <P>{section.content}</P>
              </section>
            ))}
          </div>

          <Separator className="my-16" />

          {/* Strategy × Visual Design block */}
          <section className="bg-muted rounded-sm p-8 md:p-10 mb-16">
            <Kicker className="mb-4">Strategy × Visual Design</Kicker>
            <P className="text-foreground/80">{study.strategyAndDesign}</P>
          </section>

          {/* Outcomes */}
          <section className="mb-14">
            <H3 className="mb-6">Outcomes</H3>
            <ul className="space-y-3">
              {study.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-hi transition-colors duration-300"
                    aria-hidden="true"
                  />
                  <P className="mb-0">{outcome}</P>
                </li>
              ))}
            </ul>
          </section>

          {/* Learnings */}
          <section>
            <H3 className="mb-6">Learnings</H3>
            <div className="space-y-6">
              {study.learnings.map((learning, i) => (
                <blockquote
                  key={i}
                  className="border-l-2 border-foreground/20 pl-6"
                >
                  <P className="mb-0 italic text-muted-foreground">
                    {learning}
                  </P>
                </blockquote>
              ))}
            </div>
          </section>
        </Container>
      </div>

      {/* ––– Next project ––– */}
      <div className="border-t border-border py-16">
        <Container>
          <div className="flex items-center justify-between">
            <span className="font-sans text-xs text-muted-foreground uppercase tracking-[0.1em]">
              More work
            </span>
            <Link
              href="/work"
              className="font-sans text-sm font-medium underline underline-offset-4 decoration-foreground/30 transition-colors hover:decoration-foreground"
            >
              All projects →
            </Link>
          </div>
        </Container>
      </div>
    </article>
  );
}
