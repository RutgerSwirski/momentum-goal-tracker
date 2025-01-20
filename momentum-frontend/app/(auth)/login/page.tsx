"use client";

import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import AuthHeader from "@/app/(auth)/components/AuthHeader";
import AuthLayout from "@/app/(auth)/components/AuthLayout";
import CheckboxWithLabel from "@/app/(auth)/components/CheckboxWithLabel";
import axiosInstance from "@/utils/axiosInstance";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import SocialLoginButtons from "../components/SocialLoginButtons";
import Divider from "../components/Divider";
import InputField from "../components/InputField";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginPage = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => await axiosInstance.post("/auth/login", data),
  });

  const router = useRouter();

  // const {}

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    mutate(data, {
      onSuccess: (data) => {
        console.log(data);
        router.push("/dashboard");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <AuthLayout
      rightSideContent={
        <h2>Momentum starts here—achieve your goals effortlessly.</h2>
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
          <form
            className="flex flex-col space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <InputField
                  {...field}
                  type="email"
                  id="email"
                  placeholder="Email"
                  error={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <InputField
                  {...field}
                  type="password"
                  id="password"
                  placeholder="Password"
                  error={errors.password?.message}
                />
              )}
            />

            <div className="flex justify-between items-center space-x-2">
              <CheckboxWithLabel id="remember" label="Remember me" />
              <Link href="/forgot-password">Forgot Password?</Link>
            </div>
            <PrimaryButton
              text={isPending ? "Logging in..." : "Log in"}
              type="submit"
              disabled={isPending}
            />
          </form>

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
