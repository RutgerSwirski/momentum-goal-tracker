import AuthorizedSidebar from "./components/sidebar/AuthorizedSidebar";

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen gap-8">
      {/* Navbar */}
      <AuthorizedSidebar />

      {/* Page Content */}
      <main className="flex-1 py-6 pr-8 bg-neutral_light_grey">{children}</main>
    </div>
  );
};

export default AuthenticatedLayout;
