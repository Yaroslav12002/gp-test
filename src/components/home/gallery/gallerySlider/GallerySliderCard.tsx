import Image from "next/image";

interface GallerySliderCardProps {
  galleryItem: {
    image: string;
    alt: string;
  };
}

export default function GallerySliderCard({
  galleryItem,
}: GallerySliderCardProps) {
  const { image, alt } = galleryItem;
  return (
    <Image
      src={`/images/galleryImages/${image}`}
      width="0"
      height="0"
      alt={alt}
      sizes="100%"
      className={`w-full h-full`}
    />
  );
}
