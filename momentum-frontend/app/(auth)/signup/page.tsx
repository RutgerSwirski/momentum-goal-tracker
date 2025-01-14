"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import AuthHeader from "@/app/(auth)/components/AuthHeader";
import AuthLayout from "@/app/(auth)/components/AuthLayout";
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
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const SignupPage = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => await axiosInstance.post("/auth/signup", data),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    // use react query to create a mutation to create a new user
    mutate(data, {
      onSuccess: (data) => {
        // redirect to the dashboard page
        console.log(data);

        // redirect to the dashboard page
        router.push("/dashboard");

        //reset
        reset();
      },
      onError: (error) => {
        console.log(error);
        // if the error .message is User already exists, set this error in the email form
        if (error.response.data.message === "User already exists") {
          // set the error in the email form
          console.log("User already exists");

          // set the error in the email form
          control.setError("email", {
            type: "manual",
            message: "User already exists",
          });
        }

        // TODO display error message
      },
    });
  };

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4"
          >
            <div className="flex space-x-4 ">
              <Controller
                control={control}
                name="firstName"
                render={({ field }) => (
                  <InputField
                    {...field}
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    error={errors.firstName?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name="lastName"
                render={({ field }) => (
                  <InputField
                    {...field}
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    error={errors.lastName?.message}
                  />
                )}
              />
            </div>

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

            <Controller
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <InputField
                  {...field}
                  type="password"
                  id="password"
                  placeholder="Confirm Password"
                  error={errors.confirmPassword?.message}
                />
              )}
            />
            <PrimaryButton
              text={isPending ? "Signing Up..." : "Sign Up"}
              disabled={isPending}
              type="submit"
            />
          </form>
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
