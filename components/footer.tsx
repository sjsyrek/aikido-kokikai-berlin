import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-warm-200 bg-warm-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8">
        <Link href="/" aria-label="Aikido Kokikai Berlin home">
          <Image
            src="/images/logo.png"
            alt="Aikido Kokikai Berlin logo"
            width={120}
            height={120}
            className="h-24 w-auto"
          />
        </Link>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-sm text-warm-800 transition-colors hover:text-brand-red"
        >
          {CONTACT_EMAIL}
        </a>

        <div className="flex items-center gap-4 text-xs text-warm-800">
          <Link
            href="/impressum"
            className="transition-colors hover:text-brand-red"
          >
            Impressum
          </Link>
          <span aria-hidden="true">&middot;</span>
          <span>&copy; {year} Aikido Kokikai Berlin</span>
        </div>
      </div>
    </footer>
  );
}
