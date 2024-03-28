'use client';
import { useAuth } from "@/context/authorizationContext";
import Header from "../../components/Header/Header";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useRef } from "react";


function Register()
{
  const router = useRouter();
  const {registerEmail} = useAuth();
  const emailRef = useRef<any>();
  function handleRegisterPasswordRedirect(event: any)
  {
    event.preventDefault()
    registerEmail(emailRef.current.value)
    router.push('/register-with-email')
  } 


    return (
        <>
        <Header />
      
        <section className="flex flex-col justify-center w-full items-center h-screen">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <div className="w-full max-w-md p-8 bg-gray-100 rounded-lg shadow-lg">
        <form onSubmit={handleRegisterPasswordRedirect}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-10 bg-gray-300 p-3"
              placeholder="Enter your email"
              required
              ref={emailRef}
            />
          </div>
         
          <div className="mt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white rounded-md focus:outline-none bg-blue-500 text-sm"
            >
              Continue with Email
            </button>
          </div>
          <p className="text-sm mt-4">or use one of these options</p>
          <button className="w-full mt-2 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Continue with Google</button>
          <button className="w-full mt-2 px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-blue-800">Continue with Facebook</button>
          <p className="text-sm mt-8">Already have an account? <Link href="/sign-in" className="text-blue-600">
            Sign In
          </Link></p>
        </form>
      </div>
    </section>
     
    </>
    )

  
}

export default Register;