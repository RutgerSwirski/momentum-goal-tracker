import AuthHeader from "@/features/auth/AuthHeader";
import AuthLayout from "@/features/auth/AuthLayout";
import CheckboxWithLabel from "@/features/auth/CheckboxWithLabel";
import Divider from "@/features/auth/Divider";
import InputField from "@/features/auth/InputField";
import SocialLoginButtons from "@/features/auth/SocialLoginButtons";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Link from "next/link";

const LoginPage = () => {
  return (
    <AuthLayout
      rightSideContent={
        <h2>"Momentum starts here—achieve your goals effortlessly."</h2>
      }
    >
      <div className=" rounded-md flex flex-col space-y-12 bg-neutral_light_grey text-black w-1/2">
        <AuthHeader
          title="Log in to your Account"
          subtitle="Welcome back! Select a method to log in:"
        />
        <div className="flex flex-col space-y-12">
          <SocialLoginButtons />
          <Divider text="or continue with email" />
          <div className="flex flex-col space-y-4">
            <InputField type="email" id="email" placeholder="Email" />
            <InputField type="password" id="password" placeholder="Password" />
            <div className="flex justify-between items-center space-x-2">
              <CheckboxWithLabel id="remember" label="Remember me" />
              <Link href="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
          <PrimaryButton text="Log in" />
          <span className="text-center text-sm">
            Don’t have an account?{" "}
            <Link
              className="text-secondary_navy hover:underline"
              href="/signup"
            >
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
