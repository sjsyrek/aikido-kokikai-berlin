import type { Metadata } from "next";
import { GalleryLightbox } from "@/components/gallery-lightbox";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Aikido Kokikai Berlin classes and events.",
};

const images = Array.from({ length: 24 }, (_, i) => ({
  src: `/images/gallery${i + 1}.jpg`,
  alt: `Aikido Kokikai Berlin — training photo ${i + 1}`,
}));

export default function Gallery() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-black text-warm-900 md:text-5xl">
        Photo Gallery
      </h1>
      <p className="mt-3 text-warm-800">
        Photos from classes, seminars, and testing events.
      </p>
      <GalleryLightbox images={images} />
    </div>
  );
}
