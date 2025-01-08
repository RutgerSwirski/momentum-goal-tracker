import Link from "next/link";

type NavbarLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavbarLink = ({ href, children }: NavbarLinkProps) => {
  return (
    <li className="text-white font-semibold text-base">
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default NavbarLink;
