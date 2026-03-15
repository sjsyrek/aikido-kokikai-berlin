import type { Metadata } from "next";
import Link from "next/link";
import { HeroBanner } from "@/components/hero-banner";
import { PageContainer } from "@/components/page-container";
import { BulletItem } from "@/components/bullet-item";
import { ExternalLink } from "@/components/external-link";
import { CLASS_SCHEDULE, EXTERNAL_URLS, DOJO_ADDRESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Your First Class",
  description:
    "Everything you need to know before your first Aikido class in Berlin. What to wear, what to expect, and how to sign up for your free trial.",
};

const steps = [
  {
    step: "1",
    title: "Arrive 10 minutes early",
    body: "Ring the bell at Syndicate Martial Arts Berlin and let them know you're here for Aikido. You'll be shown the changing rooms.",
  },
  {
    step: "2",
    title: "Get changed",
    body: "Wear comfortable workout clothes — joggers and a t-shirt are perfect. You'll train barefoot, so no special footwear needed.",
  },
  {
    step: "3",
    title: "Walk to the mat",
    body: "Wear sandals (provided) from the changing room to the mat area. Bow as you step onto the mat.",
  },
  {
    step: "4",
    title: "Warm up together",
    body: "Class starts with a group warm-up: light stretching, breakfall practice (how to fall safely), and some basic movement exercises.",
  },
  {
    step: "5",
    title: "Learn technique",
    body: "The instructor demonstrates a technique. You'll be paired with a more experienced student who'll guide you through it at your pace.",
  },
  {
    step: "6",
    title: "Cool down and bow out",
    body: "Class ends with a group bow-out. Beginners are always welcome to ask questions afterwards.",
  },
];

const faqs = [
  {
    question: "Do I need to be fit or athletic?",
    answer:
      "Not at all. Kokikai Aikido is built around the principle of minimum effort, maximum effect — meaning you learn to use body mechanics, not brute strength. Students of all ages and fitness levels train together.",
  },
  {
    question: "Will I get hurt?",
    answer:
      "Aikido is one of the safest martial arts. The first thing you learn is how to fall safely. Training is non-competitive and cooperative — your partner's safety is always the priority.",
  },
  {
    question: "Do I need any prior martial arts experience?",
    answer:
      "No experience needed. In fact, many instructors prefer beginners — you don't have bad habits to unlearn. Everyone starts from zero.",
  },
  {
    question: "Do I need to speak German?",
    answer:
      "No German required. Aikido Kokikai Berlin is Berlin's only Aikido dojo where all classes are taught entirely in English. We have students from all over the world.",
  },
  {
    question: "What should I wear?",
    answer:
      "For your first class, comfortable workout clothes (t-shirt and joggers/leggings) are perfect. You'll train barefoot. If you decide to continue, you'll eventually get a gi (uniform), but there's no rush.",
  },
  {
    question: "How long is a class?",
    answer:
      "Classes are approximately 90 minutes including warm-up and cool-down.",
  },
  {
    question: "Is there a minimum age?",
    answer:
      "We welcome adults of all ages. There is no upper age limit — Aikido is designed to be effective regardless of physical strength.",
  },
  {
    question: "How do I sign up?",
    answer: null, // rendered separately with a link
  },
];

export default function FirstClass() {
  return (
    <>
      <HeroBanner
        src="/images/home.jpg"
        alt="Aikido class in session"
        title="Your First Class"
      />

      <PageContainer>
        <p className="text-lg leading-relaxed text-warm-800">
          Thinking about trying Aikido? Here&rsquo;s exactly what to expect —
          so you can walk through the door with confidence.
        </p>

        {/* Step by step */}
        <section className="mt-10">
          <h2 className="text-2xl font-black text-warm-900">
            What Happens in a Class
          </h2>
          <ol className="mt-6 space-y-4">
            {steps.map(({ step, title, body }) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-red text-sm font-black text-white">
                  {step}
                </span>
                <div>
                  <h3 className="font-bold text-warm-900">{title}</h3>
                  <p className="mt-1 text-warm-800">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* What to bring */}
        <section className="mt-10 rounded-xl border border-warm-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black text-warm-900">
            What to Bring
          </h2>
          <ul className="mt-4 space-y-2 text-warm-800">
            <BulletItem>Comfortable workout clothes (t-shirt + joggers)</BulletItem>
            <BulletItem>A water bottle</BulletItem>
            <BulletItem>An open mind</BulletItem>
          </ul>
          <p className="mt-4 text-sm text-warm-800">
            No gi (uniform), no special shoes, no equipment needed for your
            first class.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-2xl font-black text-warm-900">
            Common Questions
          </h2>
          <dl className="mt-6 space-y-6">
            {faqs.map(({ question, answer }) => (
              <div key={question}>
                <dt className="font-bold text-warm-900">{question}</dt>
                {answer ? (
                  <dd className="mt-1 leading-relaxed text-warm-800">
                    {answer}
                  </dd>
                ) : (
                  <dd className="mt-1 leading-relaxed text-warm-800">
                    Trial classes require prior registration at{" "}
                    <ExternalLink href={EXTERNAL_URLS.syndicate}>
                      syndicate-berlin.de
                    </ExternalLink>
                    . Select &ldquo;Aikido Kokikai&rdquo; when signing up.
                    Registration is free and takes about 2 minutes.
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </section>

        {/* Schedule + location */}
        <section className="mt-10 rounded-xl border border-warm-200 bg-white p-6 text-center shadow-sm">
          <h2 className="text-xl font-black text-warm-900">
            When &amp; Where
          </h2>
          <div className="mt-4 space-y-2">
            {CLASS_SCHEDULE.map(({ day, time, duration }) => (
              <p key={day} className="text-warm-800">
                <span className="font-semibold">{day}</span> at{" "}
                <span className="font-mono">{time}</span>{" "}
                <span className="text-sm text-warm-800/70">({duration})</span>
              </p>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold text-warm-900">
            {DOJO_ADDRESS.name}
          </p>
          <ExternalLink
            href={EXTERNAL_URLS.syndicateMaps}
            className="mt-1 text-sm text-brand-red underline hover:text-brand-red-dark"
          >
            {DOJO_ADDRESS.full} — view on map
          </ExternalLink>
        </section>

        {/* CTA */}
        <div className="mt-10 rounded-xl border border-brand-red/20 bg-brand-red/5 p-6 text-center md:p-8">
          <p className="text-lg font-bold text-brand-red">
            Your first class is free — no commitment required.
          </p>
          <p className="mt-2 text-sm text-warm-800">
            Register at{" "}
            <ExternalLink href={EXTERNAL_URLS.syndicate}>
              syndicate-berlin.de
            </ExternalLink>{" "}
            then just show up. Any questions? Email us at{" "}
            <a
              href="mailto:info@kokikai.de"
              className="font-semibold text-brand-red underline hover:text-brand-red-dark"
            >
              info@kokikai.de
            </a>
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={EXTERNAL_URLS.syndicate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-brand-red px-8 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-red-dark focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
            >
              Register at Syndicate Berlin
            </a>
            <Link
              href="/about"
              className="inline-flex items-center rounded-lg border-2 border-brand-red px-8 py-3 text-sm font-bold text-brand-red transition-colors hover:bg-brand-red hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
            >
              Learn About Kokikai Aikido
            </Link>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
