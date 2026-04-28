import { createFileRoute } from "@tanstack/react-router";

import heroImage from "../assets/luxury-coastal-terrace.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Modern Nomade | Bespoke Luxury Travel" },
      {
        name: "description",
        content:
          "Luxury travel planning for modern travelers seeking thoughtful itineraries, insider access, elevated stays, and seamless support.",
      },
      { property: "og:title", content: "The Modern Nomade | Bespoke Luxury Travel" },
      {
        property: "og:description",
        content:
          "Bespoke travel design for refined escapes, milestone journeys, and effortless luxury.",
      },
    ],
  }),
  component: Index,
});

const services = [
  [
    "Arrive certain",
    "You step into a trip that already feels considered, calm, and beautifully handled.",
  ],
  ["Stay better", "Hotel matches, upgrades, amenities, and room notes are positioned with care."],
  [
    "Move seamlessly",
    "Transfers, timing, reservations, and destination flow are aligned before you go.",
  ],
  [
    "Travel personally",
    "Every recommendation reflects the way you actually like to spend your days.",
  ],
];

const testimonials = [
  "Every hotel felt handpicked, every dinner was exactly our taste, and the entire trip moved without friction.",
  "She made our honeymoon feel impossibly elevated while still feeling like us. We never had to chase a thing.",
  "The value was in the details: the timing, the room notes, the quiet upgrades, and the calm confidence.",
];

const plans = [
  {
    name: "Essential Escape",
    price: "from $450",
    details: "Hotel sourcing, VIP request notes, and a refined point-of-view itinerary.",
  },
  {
    name: "Signature Journey",
    price: "from $950",
    details: "Full trip design with stays, dining, transfers, experiences, and support.",
  },
  {
    name: "Grand Itinerary",
    price: "custom",
    details: "Multi-city, milestone, group, or extended travel with white-glove planning.",
  },
];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground paper-grain">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-border/70 bg-background/88 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#top"
            className="font-serif text-xl uppercase leading-none tracking-[0.24em] text-ink sm:text-2xl"
          >
            The
            <br />
            Modern Nomade
          </a>
          <div className="hidden items-center gap-8 text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-olive md:flex">
            <a className="transition-colors hover:text-ink" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-ink" href="#testimonials">
              Praise
            </a>
            <a className="transition-colors hover:text-ink" href="#plans">
              Plans
            </a>
            <a className="transition-colors hover:text-ink" href="#about">
              About
            </a>
          </div>
          <a
            href="mailto:hello@themodernnomade.com"
            className="border border-ink bg-primary px-5 py-3 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-primary-foreground transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            Inquire
          </a>
        </nav>
      </header>

      <section id="top" className="relative flex min-h-[92svh] items-end pt-24">
        <img
          src={heroImage}
          alt="Luxury coastal villa terrace overlooking the sea"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover animate-drift"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/78 via-ink/30 to-background/8" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
          <div className="max-w-2xl animate-fade-up text-primary-foreground">
            <p className="mb-6 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-linen/85">
              Luxury travel, thoughtfully designed
            </p>
            <h1 className="font-serif text-5xl leading-[0.98] text-linen sm:text-7xl lg:text-8xl">
              Bespoke journeys for modern travelers
            </h1>
            <div className="my-7 h-px w-20 editorial-rule" />
            <p className="max-w-md text-sm leading-7 text-linen/88 sm:text-base">
              Elevated hotels, villas, cruises, and custom itineraries arranged with insider access
              and seamless support.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@themodernnomade.com"
                className="border border-linen bg-linen px-7 py-4 text-center text-[0.66rem] font-bold uppercase tracking-[0.26em] text-ink transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                Start Planning
              </a>
              <a
                href="#plans"
                className="border border-linen/75 px-7 py-4 text-center text-[0.66rem] font-bold uppercase tracking-[0.26em] text-linen transition-colors hover:bg-linen/12 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                Explore Plans
              </a>
            </div>
          </div>
          <aside className="hidden self-end border-l border-linen/35 pl-8 text-linen/86 lg:block">
            <p className="max-w-xs font-serif text-2xl leading-snug">
              “The difference is not more planning. It is better taste, better access, and fewer
              open loops.”
            </p>
          </aside>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.32em] text-rose">Services</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Travel that feels effortless before you ever leave
          </h2>
        </div>
        <div className="mt-14 grid gap-px bg-border md:grid-cols-4">
          {services.map(([title, copy], index) => (
            <article
              key={title}
              className="group bg-card p-8 text-center shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="font-serif text-3xl text-rose">0{index + 1}</span>
              <h3 className="mt-7 text-sm font-bold uppercase tracking-[0.24em] text-ink">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="testimonials"
        className="bg-primary px-5 py-20 text-primary-foreground sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
              Trusted for the trips people remember longest
            </h2>
            <p className="max-w-sm text-sm uppercase leading-7 tracking-[0.24em] text-linen/70">
              Honeymoons · family escapes · Europe summers · island retreats
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((quote) => (
              <blockquote
                key={quote}
                className="border border-linen/18 bg-linen/7 p-8 shadow-editorial transition-colors hover:bg-linen/10"
              >
                <p className="font-serif text-2xl leading-snug text-linen">“{quote}”</p>
                <footer className="mt-8 text-[0.66rem] font-bold uppercase tracking-[0.28em] text-rose">
                  Private client
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.32em] text-rose">
              Packages
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Choose the level of support your journey deserves
            </h2>
            <p className="mt-6 text-sm leading-7 text-muted-foreground">
              A la carte enhancements include villa sourcing, dining curation, cruise matching,
              celebration planning, and hotel-only VIP bookings.
            </p>
          </div>
          <div className="grid gap-4">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className="grid gap-5 border border-border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1 sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div>
                  <h3 className="font-serif text-3xl">{plan.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{plan.details}</p>
                </div>
                <p className="text-left text-[0.68rem] font-bold uppercase tracking-[0.26em] text-olive sm:text-right">
                  {plan.price}
                </p>
              </article>
            ))}
            <article className="border border-rose bg-accent/28 p-7">
              <h3 className="font-serif text-3xl">À la carte</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Add focused help exactly where you need it: hotel perks, a special dinner, private
                transfers, excursions, or a final itinerary polish.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-border bg-veil px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="aspect-[4/5] overflow-hidden bg-secondary shadow-editorial">
            <img
              src={heroImage}
              alt="Elegant European terrace used as luxury travel inspiration"
              width={1600}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover object-left transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.32em] text-rose">
              About me
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">
              Your calm, connected advisor for beautifully personal travel
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">
              I design elevated journeys for travelers who value taste, time, and trust. My work
              blends editorial-level curation with practical logistics, so your trip feels
              considered from the first hotel match to the final ride home.
            </p>
            <div className="mt-10 grid gap-6 border-y border-border py-8 sm:grid-cols-3">
              {[
                ["VIP", "preferred perks"],
                ["Custom", "day-by-day flow"],
                ["Support", "before & during"],
              ].map(([top, bottom]) => (
                <div key={top}>
                  <p className="font-serif text-3xl text-ink">{top}</p>
                  <p className="mt-1 text-[0.66rem] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                    {bottom}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="mailto:hello@themodernnomade.com"
              className="mt-9 inline-flex border border-ink bg-primary px-7 py-4 text-[0.66rem] font-bold uppercase tracking-[0.26em] text-primary-foreground transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
              Inquire today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
