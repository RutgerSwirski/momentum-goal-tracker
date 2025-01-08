import AuthorizedSidebar from "../sidebar/AuthorizedSidebar";

const AuthorizedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen gap-12">
      {/* Navbar */}
      <AuthorizedSidebar />

      {/* Page Content */}
      <main className="flex-1 py-8 pr-8 bg-neutral_light_grey">{children}</main>
    </div>
  );
};

export default AuthorizedLayout;
