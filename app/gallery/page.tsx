import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Aikido Kokikai Berlin classes and events.",
};

const images = Array.from({ length: 24 }, (_, i) => ({
  src: `/images/gallery${i + 1}.jpg`,
  alt: `Aikido Kokikai Berlin gallery photo ${i + 1}`,
}));

export default function Gallery() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-black text-warm-900 md:text-5xl">
        Photo Gallery
      </h1>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((image, i) => (
          <div key={i} className="overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
