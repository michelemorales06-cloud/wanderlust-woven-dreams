import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Gem, Handshake, Map, Plane, Sparkles, type LucideIcon } from "lucide-react";

import archImage from "../assets/editorial-villa-arch.jpg";
import heroImage from "../assets/luxury-coastal-terrace.jpg";
import diningImage from "../assets/mediterranean-dining-detail.jpg";

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

const services: Array<[LucideIcon, string, string]> = [
  [Gem, "Stay better", "Hotel matches, upgrades, amenities, and room notes are positioned with care."],
  [
    Map,
    "Travel personally",
    "Every recommendation reflects the way you actually like to spend your days.",
  ],
  [
    Plane,
    "Move seamlessly",
    "Transfers, timing, reservations, and destination flow are aligned before you go.",
  ],
  [
    Handshake,
    "Arrive certain",
    "You step into a trip that already feels considered, calm, and beautifully handled.",
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

      <section id="top" className="relative flex min-h-[92svh] items-center justify-center pt-24">
        <img
          src={heroImage}
          alt="Luxury coastal villa terrace overlooking the sea"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover animate-drift"
        />
        <div className="absolute inset-0 bg-ink/48" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-20 text-center sm:px-8">
          <div className="mx-auto max-w-4xl animate-fade-up text-primary-foreground">
            <p className="mb-6 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-linen/85">
              Luxury travel, thoughtfully designed
            </p>
            <h1 className="font-serif text-5xl leading-[0.98] text-linen sm:text-7xl lg:text-8xl">
              Bespoke journeys for modern travelers
            </h1>
            <div className="mx-auto my-7 h-px w-24 editorial-rule" />
            <p className="mx-auto max-w-xl text-sm leading-7 text-linen/88 sm:text-base">
              Elevated hotels, villas, cruises, and custom itineraries arranged with insider access
              and seamless support.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
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
          {services.map(([Icon, title, copy], index) => (
            <article
              key={title}
              className="group bg-card p-8 text-center shadow-soft transition-transform hover:-translate-y-1 scroll-reveal"
            >
              <Icon className="mx-auto h-8 w-8 text-olive transition-transform group-hover:-translate-y-1" strokeWidth={1.25} />
              <span className="mt-6 block font-serif text-3xl text-rose">0{index + 1}</span>
              <h3 className="mt-7 text-sm font-bold uppercase tracking-[0.24em] text-ink">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="scroll-reveal">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.32em] text-rose">
              Experiences
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
              A travel moodboard, translated into reservations, rhythm, and access
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground">
              From a terrace lunch to a private boat day, the itinerary is composed like an
              editorial spread: varied, atmospheric, and intentionally paced.
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 md:gap-6">
            <figure className="scroll-reveal col-span-4 overflow-hidden border border-border bg-card p-3 shadow-editorial">
              <img src={diningImage} alt="Mediterranean terrace dining arranged for luxury travelers" width={1400} height={1000} loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
            </figure>
            <figure className="scroll-reveal col-span-2 mt-10 overflow-hidden bg-secondary shadow-soft arch-frame">
              <img src={archImage} alt="European villa archway with olive trees and roses" width={1200} height={1600} loading="lazy" className="aspect-[3/5] h-full w-full object-cover" />
            </figure>
            <figure className="scroll-reveal col-span-3 -mt-2 overflow-hidden bg-secondary shadow-soft arch-frame">
              <img src={archImage} alt="Arched villa corridor in warm Mediterranean light" width={1200} height={1600} loading="lazy" className="aspect-[4/5] h-full w-full object-cover object-center" />
            </figure>
            <div className="scroll-reveal col-span-3 border-y border-border py-8 pl-2">
              <Sparkles className="mb-6 h-8 w-8 text-rose" strokeWidth={1.25} />
              <p className="font-serif text-2xl leading-snug text-ink">
                Insider stays, thoughtful tables, unhurried days, and details that quietly say:
                this was made for you.
              </p>
            </div>
          </div>
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
          <div className="aspect-[4/5] overflow-hidden bg-secondary shadow-editorial arch-frame scroll-reveal">
            <img
              src={archImage}
              alt="Elegant European terrace used as luxury travel inspiration"
              width={1200}
              height={1600}
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
      <footer className="bg-primary px-5 py-12 text-primary-foreground sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-linen/18 pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-3xl uppercase leading-none tracking-[0.22em] text-linen">
              The<br />Modern Nomade
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-linen/68">
              Bespoke travel · insider access · thoughtful planning · seamless experiences.
            </p>
          </div>
          <div className="flex items-center gap-3 text-[0.66rem] font-bold uppercase tracking-[0.24em] text-linen/75">
            <CalendarDays className="h-4 w-4 text-rose" strokeWidth={1.5} />
            <a href="mailto:hello@themodernnomade.com" className="transition-colors hover:text-linen">
              Begin an inquiry
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
