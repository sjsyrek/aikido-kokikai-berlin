import Image from "next/image";
import { ReactNode } from "react";

interface HeroBannerProps {
  src: string;
  alt: string;
  title: string;
  children?: ReactNode;
  tall?: boolean;
}

export function HeroBanner({
  src,
  alt,
  title,
  children,
  tall = false,
}: HeroBannerProps) {
  return (
    <section className="relative">
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        priority
        sizes="100vw"
        className={`w-full object-cover ${tall ? "h-[60vh] md:h-[70vh]" : "h-[40vh]"}`}
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="mx-auto w-full max-w-3xl px-4 pb-8">
          <h1 className="text-3xl font-black text-white md:text-5xl">{title}</h1>
          {children}
        </div>
      </div>
    </section>
  );
}
