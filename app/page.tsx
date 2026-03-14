import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative">
        <Image
          src="/images/home.jpg"
          alt="Welcome to Aikido Kokikai Berlin"
          width={1600}
          height={900}
          priority
          className="h-[50vh] w-full object-cover md:h-[60vh]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center text-white">
            <h1 className="text-4xl font-black md:text-6xl">
              Aikido Kokikai Berlin
            </h1>
            <p className="mt-4 text-lg font-medium italic md:text-2xl">
              &ldquo;Minimum effort, maximum effect&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <div className="rounded-xl border border-warm-200 bg-white p-6 text-center shadow-sm md:p-8">
          <h2 className="text-xl font-black text-warm-900 md:text-2xl">
            Aikido in English
          </h2>
          <ul className="mt-6 space-y-2 text-left text-warm-800">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" aria-hidden="true" />
              Develop your human potential
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" aria-hidden="true" />
              Practice mind-body coordination
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" aria-hidden="true" />
              Learn to be powerful in daily life
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" aria-hidden="true" />
              Resolve conflict peacefully
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" aria-hidden="true" />
              Find strength without muscle power
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" aria-hidden="true" />
              Achieve calmness, self-control, and relaxation
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" aria-hidden="true" />
              Train in ethical self-defense
            </li>
          </ul>
        </div>

        <div className="mt-10 rounded-xl border border-brand-red/20 bg-brand-red/5 p-6 text-center md:p-8">
          <p className="text-lg font-bold text-brand-red">
            Your first class is free!
          </p>
          <p className="mt-2 text-sm text-warm-800">
            Students wishing to try a trial class must sign up first at{" "}
            <a
              href="https://syndicate-berlin.de"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-red underline hover:text-brand-red-dark"
            >
              syndicate-berlin.de
            </a>
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-warm-200 bg-white p-6 text-center shadow-sm md:p-8">
          <h2 className="text-xl font-black text-warm-900 md:text-2xl">
            Class Times
          </h2>
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-center gap-4 text-warm-800">
              <span className="w-28 text-right font-semibold">Monday</span>
              <span className="rounded bg-warm-100 px-3 py-1 font-mono text-sm">
                19:45
              </span>
            </div>
            <div className="flex items-center justify-center gap-4 text-warm-800">
              <span className="w-28 text-right font-semibold">Wednesday</span>
              <span className="rounded bg-warm-100 px-3 py-1 font-mono text-sm">
                20:00
              </span>
            </div>
          </div>
          <div className="mt-6 text-sm text-warm-800">
            <a
              href="https://maps.app.goo.gl/UuD9JHbNXj72"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-red"
            >
              <span className="font-semibold">
                Syndicate Martial Arts Berlin
              </span>
              <br />
              Chausseestra&szlig;e 102, 10115 Berlin
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://www.meetup.com/aikido-kokikai-berlin/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-brand-red px-8 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-red-dark focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
          >
            Join on Meetup
          </a>
          <a
            href="https://syndicate-berlin.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border-2 border-brand-red px-8 py-3 text-sm font-bold text-brand-red transition-colors hover:bg-brand-red hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
          >
            Sign Up for Trial Class
          </a>
        </div>
      </section>
    </>
  );
}
