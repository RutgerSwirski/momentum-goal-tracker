import AuthHeader from "@/features/auth/AuthHeader";
import AuthLayout from "@/features/auth/AuthLayout";
import Divider from "@/features/auth/Divider";
import InputField from "@/features/auth/InputField";
import SocialLoginButtons from "@/features/auth/SocialLoginButtons";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Link from "next/link";

const SignupPage = () => {
  return (
    <AuthLayout>
      <div className=" w-1/2 rounded-md flex flex-col space-y-12 bg-neutral_light_grey text-black">
        <AuthHeader
          title="Create an Account"
          subtitle="Welcome to Momentum! Let's get started."
        />
        <div className="flex flex-col space-y-12">
          <SocialLoginButtons />
          <Divider text="or sign up with email" />
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4 ">
              <InputField type="text" id="name" placeholder="First Name" />
              <InputField type="text" id="name" placeholder="Last Name" />
            </div>
            <InputField type="email" id="email" placeholder="Email" />
            <InputField type="password" id="password" placeholder="Password" />
            {/* confirm password */}
            <InputField
              type="password"
              id="password"
              placeholder="Confirm Password"
            />
          </div>
          <PrimaryButton text="Sign Up" />
          <span className="text-center text-sm">
            Already have an account?{" "}
            <Link className="text-secondary_navy hover:underline" href="/login">
              Log in
            </Link>
          </span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignupPage;
