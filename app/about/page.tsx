import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Kokikai Aikido, our dojo in Berlin, and instructor Steven Syrek Sensei.",
};

const principles = [
  "Keep One Point to Develop Calmness",
  "Relax Progressively",
  "Find Correct Posture in Everything",
  "Develop Your Positive Mind",
];

export default function About() {
  return (
    <>
      <section className="relative">
        <Image
          src="/images/about.jpg"
          alt="About Aikido Kokikai Berlin"
          width={1600}
          height={900}
          priority
          className="h-[40vh] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
          <div className="mx-auto w-full max-w-3xl px-4 pb-8">
            <h1 className="text-3xl font-black text-white md:text-5xl">
              About Us
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <section>
          <h2 className="text-2xl font-black text-warm-900">
            The Four Basic Principles of Kokikai Aikido
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {principles.map((principle, i) => (
              <div
                key={i}
                className="rounded-lg border border-warm-200 bg-white p-5 shadow-sm"
              >
                <span className="text-2xl font-black text-brand-red">
                  {i + 1}.
                </span>
                <p className="mt-1 font-medium text-warm-900">{principle}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black text-warm-900">
            About Kokikai Aikido
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-warm-800">
            <p>
              Kokikai Aikido is a Japanese martial art of self-defense founded by{" "}
              <strong>Sensei Shuji Maruyama</strong>, a direct student of Morihei
              Ueshiba, the original founder of Aikido. Sensei Maruyama has taught
              for over six decades in Japan, Australia, and the United States. He
              established the Kokikai school in order to promote a style of Aikido
              that is more focused on natural human feeling and effective technique
              through mind-body coordination.
            </p>
            <p>
              A journey to self-mastery, the Kokikai method encourages students to
              realize their full potential in all activities of life by learning to
              respond to aggression and conflict with calmness and relaxation. We
              seek to improve ourselves by training in a form of self-defense based
              on natural movement, not stiff and rigid forms, and by following our
              four basic principles.
            </p>
            <p>
              Aikido is a non-violent art of self-defense. Our focus is less on
              fighting and more on how to develop your natural human abilities so
              you can benefit from your practice in daily life. Most importantly,
              we have fun! Aikido is safe, non-competitive, and will appeal to
              anyone interested in building inner strength, physical confidence,
              and personal character. If you like yoga but think all martial arts
              are like MMA, then maybe Aikido is for you.
            </p>
            <p>
              Our motto is &ldquo;minimum effort, maximum effect.&rdquo; Come find
              out why!
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black text-warm-900">About the Dojo</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-warm-800">
            <p>
              Aikido Kokikai Berlin was founded by{" "}
              <strong>Steven Syrek Sensei</strong> in 2017. It is the first and
              only Aikido Kokikai dojo in Europe and the only Aikido dojo in Berlin
              where all classes are taught in English.
            </p>
            <p>
              We train at{" "}
              <a
                href="https://syndicate-berlin.de"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-red underline hover:text-brand-red-dark"
              >
                Syndicate Martial Arts Berlin
              </a>
              , a beautiful martial arts studio located in central Berlin.
              Syndicate Martial Arts Berlin offers a number of martial arts and
              fitness courses, which you can take in combination with Kokikai
              Aikido.
            </p>
            <p>
              Classes are in English, but all are welcome regardless of language,
              age, sex, physical ability, or prior martial arts experience.
              Students of other styles of Aikido are also encouraged to join us,
              but we ask that you wear a white belt and practice with
              &ldquo;beginner&rsquo;s mind&rdquo; until you decide to follow the
              Kokikai way.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black text-warm-900">
            About the Instructor
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-warm-800">
            <p>
              <strong>Steven Syrek Sensei, 5. dan</strong>, has been practicing
              Aikido since 2002. He previously taught from 2008&ndash;2017 in New
              York City before moving to Berlin. Steve Sensei is a student of Gary
              Snyder Sensei, 7. dan, the chief instructor of{" "}
              <a
                href="http://www.nycaikido.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-red underline hover:text-brand-red-dark"
              >
                Aikido Kokikai NYC
              </a>{" "}
              and also receives regular instruction directly from Sensei Maruyama,
              who has appointed him regional coordinator of Europe for Aikido
              Kokikai International.
            </p>
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <figure className="text-center">
              <Image
                src="/images/steve-sensei.jpg"
                alt="Steven Syrek Sensei"
                width={300}
                height={400}
                className="mx-auto rounded-lg shadow-md"
              />
              <figcaption className="mt-3 text-sm text-warm-800">
                Steven Syrek, student of Sensei Maruyama and chief instructor of
                Aikido Kokikai Berlin
              </figcaption>
            </figure>
            <figure className="text-center">
              <Image
                src="/images/sensei.jpg"
                alt="Sensei Shuji Maruyama"
                width={300}
                height={400}
                className="mx-auto rounded-lg shadow-md"
              />
              <figcaption className="mt-3 text-sm text-warm-800">
                Shuji Maruyama, student of Ueshiba and founder of Aikido Kokikai
                International
              </figcaption>
            </figure>
            <figure className="text-center">
              <Image
                src="/images/ueshiba.jpg"
                alt="Sensei Morihei Ueshiba"
                width={300}
                height={400}
                className="mx-auto rounded-lg shadow-md"
              />
              <figcaption className="mt-3 text-sm text-warm-800">
                Morihei Ueshiba, founder of Aikido
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </>
  );
}
