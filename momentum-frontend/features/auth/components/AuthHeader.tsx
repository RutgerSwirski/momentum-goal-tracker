import Link from "next/link";
import Image from "next/image";

const AuthHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="flex flex-col items-center space-y-12">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="Momentum Logo"
          width={0}
          height={0}
          style={{ width: "auto", height: "auto" }}
        />
      </Link>
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-4xl font-semibold">{title}</h1>
        {subtitle && (
          <h2 className="text-lg text-neutral_dark_grey">{subtitle}</h2>
        )}
      </div>
    </div>
  );
};

export default AuthHeader;
