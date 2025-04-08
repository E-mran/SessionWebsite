import Image from "next/image";

interface ImageProps {
  className: string;
  src: string;
  alt: string;
}

export const ReadyImage = ({ className = "", src, alt }: ImageProps) => (
  <Image
    src={src}
    alt={alt}
    className={`${className}`}
    width={0}
    height={0}
    quality={100}
    unoptimized
  />
);
