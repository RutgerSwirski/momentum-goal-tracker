import NextImage from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
};

const Image = ({ src, alt, size = "md" }: ImageProps) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={size === "sm" ? 24 : size === "md" ? 32 : 48}
      height={size === "sm" ? 24 : size === "md" ? 32 : 48}
      className="rounded-full"
    />
  );
};

export default Image;
