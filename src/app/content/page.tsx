import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { H1, H3, Kicker, P } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Content",
  description: "Speaking, hosting, facilitation, and CV.",
};

interface ContentItem {
  type: "Talk" | "Workshop" | "Hosting" | "Facilitation";
  title: string;
  venue: string;
  year: string;
  date?: string;
  href?: string;
}

const contentItems: ContentItem[] = [
  {
    type: "Talk",
    title: "Unfair by Design",
    venue: "Creative Mornings Düsseldorf",
    year: "2025",
    date: "April 4, 2025",
  },
  {
    type: "Talk",
    title: "Into Design Systems",
    venue: "Düsseldorf Chapter",
    year: "2025",
    date: "April 2, 2025",
  },
  {
    type: "Talk",
    title: "Designers Shift!",
    venue: "Service Design Drinks Cologne",
    year: "2024",
    date: "January 31, 2024",
  },
  {
    type: "Talk",
    title: "Female Founders",
    venue: "Hochschule Düsseldorf",
    year: "2023",
    date: "October 8, 2023",
  },
  {
    type: "Talk",
    title: "Kreativ & Erfolgreich",
    venue: "Start-Up Woche Düsseldorf",
    year: "2019",
    date: "September 4, 2019",
  },
];

const experience = [
  {
    role: "Lead Product Designer & Mentor",
    company: "Thoughtworks",
    period: "2022 — Present",
    note: "Leading design system initiatives and accessibility strategy across enterprise product teams. Mentoring designers within the practice.",
  },
  {
    role: "Founder & Workshop Facilitator",
    company: "Independent",
    period: "2017 — 2022",
    note: "52 workshops across 7 cities, 416 participants, 25 in-house trainings, 23 collaborators. 4.9/5 rating, less than 3% no-show rate.",
  },
  {
    role: "Brand & Web Designer",
    company: "Independent",
    period: "2015 — Present",
    note: "Branding, web, and visual design for studios, coaches, and creative professionals. Selected clients include BCG Digital Ventures, Dior, Gucci, Mercedes-Benz, Shiseido, and Soho House.",
  },
];

const badgeVariantMap: Record<ContentItem["type"], "default" | "secondary" | "outline"> = {
  Talk: "default",
  Workshop: "secondary",
  Hosting: "outline",
  Facilitation: "outline",
};

export default function ContentPage() {
  return (
    <div className="py-20 md:py-28">
      <Container>
        {/* Header — kicker in left rail */}
        <header className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6">
            <div className="md:col-span-1 flex items-start pt-1">
              <Kicker>Content</Kicker>
            </div>
            <div className="md:col-span-5 mt-4 md:mt-0">
              <H1 className="mb-6">Speaking & Hosting</H1>
              <P className="text-muted-foreground">
                Talks and facilitation on design systems, accessibility, creative
                entrepreneurship, and the honest realities of design work.
              </P>
            </div>
          </div>
        </header>

        {/* Speaking list — asymmetric: date / title / venue */}
        <div className="divide-y divide-border mb-28">
          {contentItems.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-8 gap-x-6 gap-y-1 py-8"
            >
              {/* Date — col 1–2 */}
              <div className="md:col-span-2">
                <span className="font-mono text-xs text-muted-foreground">
                  {item.date ?? item.year}
                </span>
              </div>

              {/* Badge + title — cols 3–6 */}
              <div className="md:col-span-4">
                <div className="flex flex-wrap items-baseline gap-3">
                  <Badge
                    variant={badgeVariantMap[item.type]}
                    className="text-xs font-normal shrink-0"
                  >
                    {item.type}
                  </Badge>
                  <H3 className="text-base font-semibold">{item.title}</H3>
                </div>
              </div>

              {/* Venue — cols 7–8, right-aligned */}
              <div className="md:col-span-2 md:text-right">
                <span className="font-sans text-xs text-muted-foreground">
                  {item.venue}
                </span>
              </div>
            </div>
          ))}
        </div>

        <Separator className="mb-20" />

        {/* Experience — kicker left rail */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6 mb-10">
            <div className="md:col-span-1">
              <Kicker>CV</Kicker>
            </div>
          </div>

          <div className="divide-y divide-border">
            {experience.map((job) => (
              <div
                key={job.company + job.role}
                className="grid grid-cols-1 md:grid-cols-8 gap-x-6 gap-y-2 py-8"
              >
                {/* Period — col 1–2 */}
                <div className="md:col-span-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    {job.period}
                  </span>
                </div>

                {/* Role + company — cols 3–5 */}
                <div className="md:col-span-3">
                  <H3 className="text-base mb-0.5">{job.role}</H3>
                  <p className="font-sans text-sm font-medium text-muted-foreground">
                    {job.company}
                  </p>
                </div>

                {/* Note — cols 6–8 */}
                <div className="md:col-span-3">
                  <P className="text-sm text-muted-foreground mb-0">
                    {job.note}
                  </P>
                </div>
              </div>
            ))}
          </div>

          {/* Workshop stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "52", label: "Workshops" },
              { value: "416", label: "Participants" },
              { value: "7", label: "Cities" },
              { value: "4.9", label: "Avg. rating" },
            ].map(({ value, label }) => (
              <div key={label} className="border border-border p-6">
                <p className="font-sans text-4xl tracking-tight mb-1">{value}</p>
                <p className="font-sans text-xs text-muted-foreground uppercase tracking-[0.1em]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
