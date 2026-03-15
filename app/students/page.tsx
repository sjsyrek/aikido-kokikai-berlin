import type { Metadata } from "next";
import Image from "next/image";
import { HeroBanner } from "@/components/hero-banner";
import { PageContainer } from "@/components/page-container";
import { BulletItem } from "@/components/bullet-item";
import { TrialClassCta } from "@/components/trial-class-cta";
import { ExternalLink } from "@/components/external-link";
import { EXTERNAL_URLS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Students",
  description:
    "Information for Aikido Kokikai Berlin students: etiquette, testing, uniforms, camps, and fees.",
};

const etiquetteItems = [
  "Arrive early to class so you can help sweep and set up the dojo.",
  "Wear sandals from the changing room to the mat. No footwear is allowed on the mat at any time.",
  "Do not bring food or beverages of any kind into the dojo.",
  "Bow before entering and leaving the mat.",
  "Keep your fingernails and toenails trimmed.",
  "Always practice in a clean gi (uniform).",
  "Do not wear jewelry during class.",
  "Treat your fellow students with kindness, and respect those with a higher rank.",
  "Train with safety in mind and uke helpfully.",
  'During class, address the instructor as "sensei."',
  "Avoid talking excessively while training.",
  "If you arrive to class late, sit in seiza on the side of the mat and wait for the instructor\u2019s permission to join.",
];

export default function Students() {
  return (
    <>
      <HeroBanner
        src="/images/students.jpg"
        alt="The students of Aikido Kokikai Berlin"
        title="For Students"
      />

      <PageContainer>
        <p className="leading-relaxed text-warm-800">
          All students at Aikido Kokikai Berlin should be familiar with the
          following information. It covers basic etiquette, testing, uniforms and
          equipment, camps, and fees.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-black text-warm-900">Basic Etiquette</h2>
          <ul className="mt-4 space-y-2 text-warm-800">
            {etiquetteItems.map((item, i) => (
              <BulletItem key={i}>{item}</BulletItem>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black text-warm-900">Testing</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-warm-800">
            <p>
              Students who practice regularly will be invited to test for rank
              promotion. Testing occurs several times throughout the year. Tests
              are non-competitive demonstrations of the techniques you have
              learned during your training. While we call it a test, it is more
              of an opportunity for the dojo community to celebrate and
              acknowledge your commitment to Aikido. If your instructor invites
              you to test, it basically means you have already passed&mdash;but
              you still have to do it!
            </p>
            <p>
              Testing requirements vary depending on your rank. For example, you
              are eligible to test for 6th kyu after practicing for a minimum of
              2 months with 16 hours of instruction. Please note that these are
              guidelines only. Students who wish to test are expected to train
              regularly and exceed the minimum requirements.
            </p>
            <p>
              If you believe you are eligible to test, please check your
              attendance record on Meetup (or with Syndicate Martial Arts Berlin)
              and submit to Steve Sensei the following information:
            </p>
            <ul className="space-y-1 pl-5">
              <li className="list-disc">Name</li>
              <li className="list-disc">Current rank</li>
              <li className="list-disc">Testing rank</li>
              <li className="list-disc">Belt size requested</li>
              <li className="list-disc">
                Date of previous test (or when you started Aikido)
              </li>
              <li className="list-disc">
                Number of classes attended since last test
              </li>
              <li className="list-disc">
                Optional: what you would like to practice more of to improve your
                test
              </li>
            </ul>
            <p>Note that there is an additional fee for testing.</p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black text-warm-900">
            Uniforms and Equipment
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-warm-800">
            <p>
              Discounted <em>gi</em> (uniforms) are available at{" "}
              <ExternalLink href={EXTERNAL_URLS.asiaSport}>
                AsiaSport
              </ExternalLink>{" "}
              in Prenzlauerberg and Kreuzberg. Judo gi tend to be the most
              appropriate and comfortable for beginners, but medium weight (not
              lightweight) karate gi also work. Note that in Kokikai, we prefer gi
              sleeves to extend to the wrists. Try to avoid &ldquo;aikido&rdquo;
              gi with shorter sleeves. Gi are also available as a part of your
              registration package when you sign up with Syndicate Martial Arts
              Berlin.
            </p>
            <p>
              You may also want to purchase wooden practice weapons:{" "}
              <em>tanto</em> (knife), <em>bokken</em> (sword), and <em>jo</em>{" "}
              (staff).
            </p>
            <p>
              Aikido Kokikai T-shirts, coffee mugs, and other swag are now
              available! Order yours directly from{" "}
              <ExternalLink href={EXTERNAL_URLS.teespring}>
                Teespring
              </ExternalLink>
              .
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black text-warm-900">Camps</h2>
          <div className="mt-4 leading-relaxed text-warm-800">
            <p>
              Sensei Shuji Maruyama leads several weekend-long camps per year in
              various places around the world. There are generally camps in the
              New York/New Jersey area in the US at the beginning of March and the
              end of July; a camp in Sydney, Australia in October; a Boston camp
              at the beginning of November; a camp in the middle of November that
              rotates between Seattle, Phoenix, and San Francisco in the US; and
              occasional events in Japan. Students of Aikido Kokikai Berlin are
              welcome and encouraged to attend any of these camps along with their
              instructor.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black text-warm-900">Fees</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-warm-800">
            <p>
              <strong>Training fees</strong>: paid monthly to Syndicate Martial
              Arts Berlin, varies depending on how often you want to train and the
              length of your contract. Additional registration fee includes a
              practice uniform.
            </p>
            <p>
              <strong>Testing fees</strong>: paid to Aikido Kokikai Berlin for the
              right to test for a rank promotion. The amount depends on the rank
              being tested for.
            </p>
            <p>
              <strong>Dojo membership fees</strong>: paid to Aikido Kokikai Berlin
              once per year. The current fee is 50&euro;. Your first year of
              membership is included for free as part of your 6th kyu testing fee.
            </p>
            <p>
              Training fees pay for our access to the dojo space at Syndicate
              Martial Arts Berlin. Testing fees and the dojo membership fee pay
              for equipment, help us bring in visiting instructors, and in general
              support the growth of Aikido Kokikai Berlin.
            </p>
          </div>
        </section>

        <TrialClassCta />
      </PageContainer>
    </>
  );
}
