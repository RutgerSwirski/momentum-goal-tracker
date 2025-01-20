import Image from "next/image";

type AvatarProps = {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
};

const Avatar = ({ src, alt, size = "md" }: AvatarProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size === "sm" ? 24 : size === "md" ? 32 : 48}
      height={size === "sm" ? 24 : size === "md" ? 32 : 48}
      className="rounded-full"
    />
  );
};

export default Avatar;
