type AuthLayoutProps = {
  children: React.ReactNode;
  rightSideContent?: React.ReactNode;
};

const AuthLayout = ({ children, rightSideContent }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="flex flex-col items-center justify-center bg-neutral_light_grey min-h-screen flex-2">
        {children}
      </div>
      {/* Right Side */}
      <div className="flex-1 w-96 bg-[#2C3E50] flex items-center justify-center text-white text-center px-4">
        {rightSideContent || <div>"Default Right Side Content"</div>}
      </div>
    </div>
  );
};

export default AuthLayout;
