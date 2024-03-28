"use client";
import Header from "../../components/Header/Header";
import Link from "next/link";
import { SignInFormData } from "@/typescript/interfaces";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authorizationContext";
import Google from "@/components/Buttons/Google";
import FaceBook from "@/components/Buttons/FaceBook";

function SignIn() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function handleSignIn(signInData: SignInFormData) {
    try {
      const response = await fetch("/api/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInData),
      });

      const responseData = await response.json();
      console.log("Successfully Signed In ", responseData);
      login(responseData);
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <Header />
      <section className="flex flex-col justify-center w-full items-center h-screen bg-white">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <div className="w-full max-w-md p-8  rounded-lg max-h-full">
          <form onSubmit={handleSubmit(handleSignIn)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-10 bg-gray-100 p-3 ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Enter your email"
                required
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-10 bg-gray-100 p-3 pr-10 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 py-2 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeClosedIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeOpenIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
              <a
                href="#"
                className="text-blue-500 block text-sm mt-1 text-right font-semibold"
              >
                Forgot password?
              </a>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full px-4 py-2 text-white rounded-md focus:outline-none bg-blue-500 text-sm font-medium"
              >
                Continue with Email
              </button>
            </div>
            <p className="text-sm mt-4 text-center">
              or use one of these options
            </p>
            <Google />

            <FaceBook />

            <p className="text-md mt-8 text-center">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-blue-400 font-medium">
                Register
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default SignIn;
