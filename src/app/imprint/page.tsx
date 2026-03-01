import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { H1, Kicker, P } from "@/components/typography";

export const metadata: Metadata = {
  title: "Imprint",
};

export default function ImprintPage() {
  return (
    <div className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-8">
          <div className="md:col-span-5">
            <Kicker className="mb-5">Legal</Kicker>
            <H1 className="mb-12">Imprint</H1>

            <section className="space-y-2 mb-10">
              <P className="mb-0 font-medium">Ana Luiza Cavalcanti</P>
              <P className="mb-0 text-muted-foreground">Düsseldorf, Germany</P>
              <P className="mb-0 text-muted-foreground">hello@analuiza.com</P>
            </section>

            <section className="space-y-4">
              <P className="text-muted-foreground text-sm">
                Responsible for the content of this website according to § 5 TMG (Telemediengesetz).
              </P>
              <P className="text-muted-foreground text-sm">
                Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.
              </P>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
