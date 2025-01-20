import {
  Squares2X2Icon,
  FlagIcon,
  UsersIcon,
  TrophyIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import AuthorizedSidebar from "./components/sidebar/AuthorizedSidebar";

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  const links = [
    { href: "/dashboard", icon: Squares2X2Icon, label: "Dashboard" },
    { href: "/goals", icon: FlagIcon, label: "My Goals" },
    { href: "/network", icon: UsersIcon, label: "Network" },
    { href: "/milestones", icon: TrophyIcon, label: "Milestones" },
    { href: "/account", icon: Cog6ToothIcon, label: "Account" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar (Desktop Only) */}
      <div className="hidden lg:block">
        <AuthorizedSidebar />
      </div>

      {/* Page Content */}
      <main className="flex-1 p-8 lg:p-8 bg-neutral_light_grey pb-32">
        {children}
      </main>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <nav className="fixed bottom-0 left-0 right-0 bg-primary_teal p-4 flex justify-around items-center">
          {links.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              className="flex flex-col items-center text-white"
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs">{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
