import Image from "next/image";
import Link from "next/link";
import { BulletItem } from "@/components/bullet-item";
import { TrialClassCta } from "@/components/trial-class-cta";
import { ExternalLink } from "@/components/external-link";
import { CLASS_SCHEDULE, EXTERNAL_URLS, DOJO_ADDRESS } from "@/lib/constants";

const testimonials = [
  {
    quote:
      "I was nervous about trying martial arts in a foreign country, but the English-only classes made me feel at home straight away. Now two years in, it's the highlight of my week.",
    name: "Laura",
    detail: "Training for 2 years",
  },
  {
    quote:
      "I had zero martial arts experience and was pretty unfit when I started. Nobody cared. The pace is welcoming and I've learned more about how my body works than I ever expected.",
    name: "Marcus",
    detail: "Training for 1 year",
  },
  {
    quote:
      "I've tried other Aikido dojos in Berlin, but the Kokikai approach is different — it actually works, and the instruction is incredibly clear. The English classes are a huge bonus.",
    name: "Yuki",
    detail: "Training for 3 years",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <Image
          src="/images/home.jpg"
          alt="Aikido class at Aikido Kokikai Berlin"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="h-[60vh] w-full object-cover md:h-[70vh]"
        />
        <div className="absolute inset-0 flex items-center bg-black/45">
          <div className="mx-auto w-full max-w-3xl px-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Berlin&rsquo;s only English-language Aikido dojo
            </p>
            <h1 className="mt-2 text-4xl font-black text-white md:text-6xl lg:text-7xl">
              Learn Aikido
              <br />
              in English
            </h1>
            <p className="mt-4 text-lg text-white/90 md:text-xl">
              Monday &amp; Wednesday evenings &middot; Mitte, Berlin
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={EXTERNAL_URLS.syndicate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-brand-red px-8 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-red-dark focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
              >
                Try Your First Free Class
              </a>
              <Link
                href="/first-class"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-warm-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                What to Expect
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        {/* Intro / USP */}
        <section>
          <div className="rounded-xl border border-warm-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-black text-warm-900 md:text-2xl">
              Aikido in English
            </h2>
            <p className="mt-3 text-warm-800">
              Europe&rsquo;s first Kokikai dojo. All classes taught in English —
              no German required. Open to complete beginners of any age or
              fitness level.
            </p>
            <ul className="mt-6 space-y-2 text-left text-warm-800">
              <BulletItem>Develop your human potential</BulletItem>
              <BulletItem>Practice mind-body coordination</BulletItem>
              <BulletItem>Learn to be powerful in daily life</BulletItem>
              <BulletItem>Resolve conflict peacefully</BulletItem>
              <BulletItem>Find strength without muscle power</BulletItem>
              <BulletItem>Achieve calmness, self-control, and relaxation</BulletItem>
              <BulletItem>Train in ethical self-defense</BulletItem>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <TrialClassCta />

        {/* Schedule */}
        <section className="mt-10 rounded-xl border border-warm-200 bg-white p-6 text-center shadow-sm md:p-8">
          <h2 className="text-xl font-black text-warm-900 md:text-2xl">
            Class Times
          </h2>
          <div className="mt-6 space-y-3">
            {CLASS_SCHEDULE.map(({ day, time, duration }) => (
              <div
                key={day}
                className="flex items-center justify-center gap-4 text-warm-800"
              >
                <span className="w-28 text-right font-semibold">{day}</span>
                <span className="rounded bg-warm-100 px-3 py-1 font-mono text-sm">
                  {time}
                </span>
                <span className="text-sm text-warm-800/70">{duration}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-warm-800">
            <ExternalLink
              href={EXTERNAL_URLS.syndicateMaps}
              className="transition-colors hover:text-brand-red"
            >
              <span className="font-semibold">{DOJO_ADDRESS.name}</span>
              <br />
              {DOJO_ADDRESS.full}
            </ExternalLink>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-10">
          <h2 className="text-xl font-black text-warm-900 md:text-2xl">
            What Students Say
          </h2>
          <div className="mt-6 space-y-4">
            {testimonials.map(({ quote, name, detail }) => (
              <blockquote
                key={name}
                className="rounded-xl border border-warm-200 bg-white p-6 shadow-sm"
              >
                <p className="italic leading-relaxed text-warm-800">
                  &ldquo;{quote}&rdquo;
                </p>
                <footer className="mt-3 text-sm font-semibold text-warm-900">
                  — {name},{" "}
                  <span className="font-normal text-warm-800">{detail}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={EXTERNAL_URLS.meetup}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-brand-red px-8 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-red-dark focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
          >
            Join on Meetup
          </a>
          <a
            href={EXTERNAL_URLS.syndicate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border-2 border-brand-red px-8 py-3 text-sm font-bold text-brand-red transition-colors hover:bg-brand-red hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
          >
            Sign Up for Trial Class
          </a>
        </div>
      </div>
    </>
  );
}
