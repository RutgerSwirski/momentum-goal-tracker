import PrimaryButton from "@/components/buttons/PrimaryButton";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col items-center justify-center bg-neutral_light_grey min-h-screen flex-1">
        <div className="p-8 rounded-md flex flex-col space-y-12 bg-neutral_light_grey text-black">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Momentum Logo"
              width={0}
              height={0}
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
          <div className="flex flex-col space-y-2">
            <h1 className="text-4xl font-semibold">Log in to your Account</h1>
            <h2 className="text-lg text-neutral_dark_grey">
              Welcome back! Select method to log in:
            </h2>
          </div>

          <div className="flex flex-col space-y-12">
            <div className="flex space-x-4">
              <button>Log in with Google</button>
              <button>Log in with Facebook</button>
            </div>

            <div className="flex items-center justify-center my-4">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="px-2 text-center text-sm text-gray-600">
                or continue with email
              </span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <div className="flex flex-col space-y-4">
              <input
                className="border border-gray-300 rounded-md p-2"
                type="email"
                id="email"
                placeholder="Email"
              />

              <input
                className="border border-gray-300 rounded-md p-2"
                type="password"
                id="password"
                placeholder="Password"
              />

              <div className="flex justify-between items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>

                <a href="/forgot-password">Forgot Password?</a>
              </div>

              {/* <button>Log in</button> */}
            </div>
            <PrimaryButton text="Log in" />

            <span className="text-center text-sm">
              dont have an account?{" "}
              <Link
                className=" text-secondary_navy hover:underline"
                href="/signup"
              >
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-[#2C3E50]">RIGHT SIDE</div>
    </div>
  );
};

export default LoginPage;
