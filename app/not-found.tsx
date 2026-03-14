import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-black text-warm-900">404</h1>
      <p className="mt-4 text-lg text-warm-800">Page not found</p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-lg bg-brand-red px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-red-dark"
      >
        Go Home
      </Link>
    </div>
  );
}
