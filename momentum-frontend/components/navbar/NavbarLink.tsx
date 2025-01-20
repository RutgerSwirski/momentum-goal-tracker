import Link from "next/link";

type NavbarLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const NavbarLink = ({ href, children, className }: NavbarLinkProps) => {
  return (
    <li className={className}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default NavbarLink;
