export interface CaseStudySection {
  label: string;
  content: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  year: string;
  client: string;
  tags: string[];
  summary: string;
  coverColor: string;
  sections: CaseStudySection[];
  strategyAndDesign: string;
  outcomes: string[];
  learnings: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "design-systems-as-a-service",
    title: "Establishing Design Systems as a Service",
    tagline: "From graveyard to governance.",
    role: "Design Systems Lead",
    year: "2024",
    client: "Automotive Enterprise",
    tags: ["Design Systems", "Product Design", "Accessibility"],
    summary:
      "I led a team to start merging 2 design systems with different maturity levels. We transformed a simple UI library into a Design System across multiple product teams. We challenged the status-quo, surveyed users, migrated tools, redesigned components, and last but not least: advocated for adoption.",
    coverColor: "bg-zinc-900",
    sections: [
      {
        label: "Context",
        content:
          "Our big automotive client had over 15 design systems across the organisation — a Design Systems Grave Yard, as Dan Mall calls it. You can only imagine the amount of inconsistencies and inefficiencies that were in place. The second main issue: there were no clear governance or collaboration processes. The project scope grew but the UI Library was stuck in a low maturity level.",
      },
      {
        label: "Role",
        content:
          "Design Systems Lead. I oversaw the entire design system initiative, sold the case and led the migration from Sketch to Figma, established a governance model and best practices, and collaborated with cross-functional teams to encourage adoption.",
      },
      {
        label: "Constraints",
        content:
          "Limited resources: a small part-time team on a volunteer basis. Outdated design tools and files as the starting point. And the challenge of navigating a large, complex organisational structure where changing anything required sustained advocacy over months.",
      },
      {
        label: "Approach",
        content:
          "We conducted an in-depth audit of existing components to identify strengths, weaknesses, and inconsistencies. From there, we established clear design principles and guidelines. We led the migration from Sketch to Figma — training teams, encouraging adoption, and sharing best practices. Then we started the process of merging two systems, adopting the more mature one while contributing enhancements.",
      },
      {
        label: "Key Decisions",
        content:
          "Creating a governance model was the pivotal decision: clear decision-making processes, contribution guidelines, and release cycles. This transformed the design system from a deliverable into a service. We also established iterative testing and refinement cycles based on user feedback — treating designers and developers as users of the system itself.",
      },
    ],
    strategyAndDesign:
      "The strategic shift was reframing the design system not as a component library but as a service the team provides to the organisation. This meant thinking about internal communication, onboarding, documentation, and advocacy as core design work — not afterthoughts. Visually, consistency was the goal: every component decision was driven by accessibility (AA/AAA WCAG compliance) and scalability across a large, distributed product surface.",
    outcomes: [
      "Gained access to 470 components — 3× more than the original library",
      "Reduced design and development time by approximately 50%",
      "Improved brand awareness through a unified design language across products",
      "Enhanced accessibility scores to AA/AAA WCAG compliance",
    ],
    learnings: [
      "The importance of clear and concise communication with stakeholders at all levels. Speaking Business was crucial to move the needle.",
      "Fostering collaboration between designers, developers, and product managers is essential for successful design system adoption.",
      "Working with large teams in complex environments with tight deadlines required patience. The system's success depended on advocacy as much as craft.",
    ],
  },
  {
    slug: "circl-studio",
    title: "Brand & Web for Growth — CIRCL Studio",
    tagline: "Less noise. More conversion.",
    role: "Design Lead & Brand and Web Designer",
    year: "2023",
    client: "CIRCL Studio",
    tags: ["Branding", "Web Design", "Conversion Optimisation"],
    summary:
      "This was a great example of an iterative process. The old websites were not reflecting all the potential the studio had to offer and were not converting as well as they could have. We addressed those pain points — and transformed two fragmented websites into one new and stronger version.",
    coverColor: "bg-stone-800",
    sections: [
      {
        label: "Context",
        content:
          "CIRCL Studio operated two very different websites: one single-page with full-screen video showcasing projects, another with multiple long pages lacking conversion and clear structure. Two similar social media accounts presented merger potential. An audit of brand, web, and marketing channels revealed a larger opportunity to unify channels and develop a clearer business vision.",
      },
      {
        label: "Role",
        content:
          "Design Lead and Brand & Web Designer. I ran the brand audit, led the redesign strategy, refined the logo, restructured the service offering, and built the new website end to end.",
      },
      {
        label: "Constraints",
        content:
          "How do we solve branding weakness and start developing a stronger identity? How do we make it easy for prospects to book services? What are the primary services? How do we start measuring efforts? How do we automate some processes? Each question was a design and business constraint simultaneously.",
      },
      {
        label: "Approach",
        content:
          "We bundled efforts into stronger branding, merging two sites and two social accounts. I re-examined the logo — making kerning adjustments, correcting overshoot on the C letters, adjusting proportions on R and L, and refining the cut angle on the first C. The goal was subtle improvement without erasing the established brand equity.",
      },
      {
        label: "Key Decisions",
        content:
          "Less clicks, less steps, less noise. We restructured the service packages for clarity, adjusted pricing, and curated the project overview to show only the most relevant work. Every structural decision was framed around a single question: what does a potential client need to feel confident enough to reach out?",
      },
    ],
    strategyAndDesign:
      "The brand update was intentionally minimal — adjusting just what was really needed without taking away from the established brand. The logo refinement required typographic precision: kerning, overshoot correction, and proportion adjustments that are invisible individually but collectively make the mark feel more considered. The website's visual language followed the same logic: restraint in service of clarity.",
    outcomes: [
      "A modern, high-converting website replacing two fragmented sites",
      "A subtle but meaningful logo and brand update — refined without being replaced",
      "Unified social media presence and marketing funnel",
      "Structured service packages with clearer conversion paths",
    ],
    learnings: [
      "It is always more fun to work with people and businesses you admire. You will always be more productive and creative when your clients trust you.",
      "You do not have to win every time — sometimes proposed solutions will not be approved, and that is ok.",
      "The most impactful design changes are often invisible. Refinements to kerning, proportion, and structure that no client names but every client feels.",
    ],
  },
  {
    slug: "toxic-app",
    title: "Toxic App",
    tagline: "Because vocabulary is power.",
    role: "Design Lead & Initiator",
    year: "2025",
    client: "Self-initiated",
    tags: ["App Design", "Social Impact", "0→1"],
    summary:
      "In 2025 I decided to create an app I wish had existed 20 years ago. Toxic was born as an exercise — a great excuse to learn new skills, while also making an impact in someone else's life through knowledge, language, and awareness about abusive relationships.",
    coverColor: "bg-zinc-700",
    sections: [
      {
        label: "Context",
        content:
          "After a while cooking this idea in my head, I decided to partner with two wonderfully talented colleagues so that we would have all the capabilities needed to turn this project into reality. The gap was clear: there was no simple, accessible educational tool to help people understand and name abusive relationship dynamics.",
      },
      {
        label: "Role",
        content:
          "Design Lead and Initiator. I conceived the product, assembled the team, led the design direction, and own the overall product vision. Working alongside Alice Borner (Engineer) and Lisa Jureczko (Content Expert).",
      },
      {
        label: "Constraints",
        content:
          "This is a self-funded, self-initiated project built alongside other work commitments. The subject matter required careful, responsible framing — the app must be educational without being diagnostic, empowering without being prescriptive. Every content and design decision carried ethical weight.",
      },
      {
        label: "Approach",
        content:
          "We believe that information is power and that vocabulary is key to transformation. The product design focuses on accessibility and simplicity: clear definitions of abusive patterns, contextual questions to help people recognise behaviours, and reflection tools. The experience is deliberately calm and non-alarming — the opposite of what users might expect from a topic this heavy.",
      },
      {
        label: "Key Decisions",
        content:
          "The single most important design decision was the framing: this app is not a diagnostic tool and does not replace therapy, counselling, or professional help. That boundary shapes every word and every interaction. We also chose to lead with education over intervention — giving people language before asking them to act.",
      },
    ],
    strategyAndDesign:
      "The visual language had to hold a difficult balance: serious enough to honour the subject matter, approachable enough that someone in a vulnerable moment would not be overwhelmed. We avoided clinical aesthetics and crisis-hotline conventions. Instead, the design is warm, typographic, and calm — prioritising legibility and emotional safety above all. Accessibility was non-negotiable from day one.",
    outcomes: [
      "Product designed and developed, launching Q2 2026",
      "Team of 3 — designer, engineer, and content expert — assembled and aligned",
      "Core feature set defined: definitions, recognition questions, and reflection tools",
      "Accessibility-first design system built for the product",
    ],
    learnings: [
      "Designing for vulnerable users requires a different kind of restraint — every word and every colour choice carries responsibility.",
      "Initiating a 0→1 project without a client brief is liberating and terrifying in equal measure. The constraints you set for yourself are the hardest to hold.",
      "Teaching is the best way to learn. Building Toxic taught me more about interaction design, product strategy, and ethical design than any client project.",
    ],
  },
  {
    slug: "workshopping",
    title: "Workshopping my way to 150% profit increase",
    tagline: "Profitable AND inclusive. You don't have to choose.",
    role: "Founder & Facilitator",
    year: "2017–2022",
    client: "Self-initiated",
    tags: ["Teaching & Facilitation", "Business Strategy", "Community Building"],
    summary:
      "I had a huge problem with the 'gatekeepers of knowledge' in the creative community. Back in 2017, I lacked clear references for running the workshop format I wanted. My mission: share what I had learned. Five years, 52 workshops, 7 cities, and 416 participants later — here is what actually worked.",
    coverColor: "bg-neutral-700",
    sections: [
      {
        label: "Context",
        content:
          "I started teaching workshops because I couldn't find the kind I wanted to attend. The creative education space was fragmented, inaccessible, and often gatekept. I saw an opportunity to build something different — inclusive, well-designed, and genuinely useful — starting from zero budget and zero experience.",
      },
      {
        label: "Role",
        content:
          "Founder and facilitator. I designed the curriculum, managed all logistics, ran participant research, iterated on format and pricing, and built the community around the workshops from the ground up.",
      },
      {
        label: "Constraints",
        content:
          "No runway or investment to get started. I initially priced the workshops based on what I thought people would be willing to pay — an approach I do not recommend. I also researched all participants in advance, fearing being exposed as an impostor. Both of these starting strategies were replaced quickly.",
      },
      {
        label: "Approach",
        content:
          "I created warm, welcoming environments consistently: handwritten name cards, catering, all materials included. Having a feedback form from day one was the most crucial decision. I attended competitor workshops to identify what was being neglected — and made those neglected details central to my offer: a safe space, accessible locations, at least one free ticket per session, translation for international attendees, and support for left-handed participants.",
      },
      {
        label: "Key Decisions",
        content:
          "Every course differed intentionally. I tested topic, duration, pricing, materials, catering, breaks, and scheduling as variables — treating each workshop as a design experiment. Immediate feedback loops and participant interviews drove continuous improvement. The biggest mindset shift: from 'filling seats' to 'designing an experience worth returning to.'",
      },
    ],
    strategyAndDesign:
      "The workshop experience was itself a designed product. Every touchpoint — from the handwritten name card to the feedback form — was considered. The visual and spatial environment signalled inclusivity and care before a single word was spoken. Pricing became a design decision too: making at least one seat free per session was both an ethical choice and a growth strategy that built trust and community.",
    outcomes: [
      "52 workshops conducted across 7 cities",
      "416 participants, less than 3% no-show rate",
      "25 in-house trainings delivered, 23 collaborators engaged",
      "Over 90% feedback completion rate, 4.9 / 5 average rating",
      "150% profit increase through iterative pricing and format refinement",
    ],
    learnings: [
      "Teaching is the best way to learn. Our experiences and interests will never overlap 100%, so we can always learn something new from each other.",
      "Visibility strengthens networking. People respect courage in public speaking — it opens doors that 1:1 work never could.",
      "We all have something to share. We just need to be one step ahead.",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
