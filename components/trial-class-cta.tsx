import Link from "next/link";
import { ExternalLink } from "@/components/external-link";
import { EXTERNAL_URLS } from "@/lib/constants";

export function TrialClassCta() {
  return (
    <div className="mt-10 rounded-xl border border-brand-red/20 bg-brand-red/5 p-6 text-center md:p-8">
      <p className="text-lg font-bold text-brand-red">
        Your first class is free!
      </p>
      <p className="mt-2 text-sm text-warm-800">
        Students wishing to try a trial class must sign up first at{" "}
        <ExternalLink href={EXTERNAL_URLS.syndicate}>
          syndicate-berlin.de
        </ExternalLink>
      </p>
      <Link
        href="/first-class"
        className="mt-4 inline-block text-sm font-semibold text-brand-red underline hover:text-brand-red-dark"
      >
        What to expect at your first class →
      </Link>
    </div>
  );
}
