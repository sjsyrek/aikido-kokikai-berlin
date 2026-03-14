import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-warm-200 bg-warm-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8">
        <a
          href="https://www.meetup.com/aikido-kokikai-berlin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/logo.png"
            alt="Aikido Kokikai Berlin logo"
            width={120}
            height={120}
            className="h-24 w-auto"
          />
        </a>

        <div className="flex items-center gap-4">
          <a
            href="http://bit.ly/aikido-berlin-facebook"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aikido Kokikai Berlin on Facebook"
          >
            <Image
              src="/images/fb.svg"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 opacity-70 transition-opacity hover:opacity-100"
            />
          </a>
          <a
            href="mailto:info@kokikai.de"
            className="text-sm text-warm-800 transition-colors hover:text-brand-red"
          >
            info@kokikai.de
          </a>
        </div>

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
