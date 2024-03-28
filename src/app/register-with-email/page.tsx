"use client";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authorizationContext";
import Link from "next/link";
import Header from "../../components/Header/Header";
import { useForm } from "react-hook-form";
import { RegisterUserData } from "@/typescript/interfaces";
import { z } from "zod";
import { passwordSchema } from "@/zod-schema/authorizationSchema";
function RegisterWithPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserData>();
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const { email, registerUser } = useAuth();

  async function handleUserRegister(registerData: RegisterUserData) {
    try {
      passwordSchema.parse(registerData.password);
      passwordSchema.parse(registerData.confirmPassword);

      const passwordValidationResult = passwordSchema.safeParse(
        registerData.password
      );
      const confirmPasswordValidationResult = passwordSchema.safeParse(
        registerData.confirmPassword
      );

      console.log("Password validation result:", passwordValidationResult);
      console.log(
        "Confirm password validation result:",
        confirmPasswordValidationResult
      );

      if (registerData.password !== registerData.confirmPassword) {
        console.error("Passwords should be the same.");
        return;
      }

      if (
        passwordValidationResult.success &&
        confirmPasswordValidationResult.success
      ) {
        registerData = {
          ...registerData,
          email,
        };
        const response = await fetch("/api/sign-in", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(registerData),
        });

        const registerResponseData = await response.json();
        console.log("Successfully Registered ", registerResponseData);
        registerUser(registerResponseData);
        router.push("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center bg-white  h-screen max-h-screen">
        <h2 className="text-2xl font-bold text-center mb-4">Create password</h2>
        <p className="text-center mb-4">
          Use a minimum of 10 characters, including letters, lowercase letters,
          and numbers.
        </p>
        <div className="w-full max-w-md p-8 ">
          <form onSubmit={handleSubmit(handleUserRegister)}>
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="flex items-center relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm  focus:ring h-10 bg-gray-100 p-3 pr-10 focus:outline-none focus:border-none"
                  placeholder="Enter your password"
                  required
                  min={10}
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
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="flex items-center relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: "Password is required",
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  h-10 bg-gray-100 p-3"
                  placeholder="Confirm your password"
                  required
                  min={10}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 py-2 focus:outline-none"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? (
                    <EyeClosedIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeOpenIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 mb-4"
            >
              Create account
            </button>
          </form>

          <p className="text-center text-sm">
            By creating an account, you agree with our{" "}
            <Link href="/terms-and-conditions" className="text-blue-500">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy-statement" className="text-blue-500">
              Privacy Statement
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}

export default RegisterWithPage;
