"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/Logo.png";
import { useAuth } from "@/context/authorizationContext";

function HeaderHome() {
  const { isLoggedIn } = useAuth();

  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-2 bg-white">
      <div className="flex items-center justify-center md:justify-start bg-white">
        <Image src={Logo} alt="Logo" />
      </div>

      <nav className="flex justify-center md:justify-end mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/discover">Discover</Link>
          </li>
          <li>
            <Link href="/activities">Activities</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex justify-center md:justify-end mt-4 md:mt-0">
        {isLoggedIn ? (
          <Link href="/">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-4 md:mr-8 hover:bg-blue-700">
              Dashboard
            </button>
          </Link>
        ) : (
          <div className="flex">
            <Link href="/register">
              <button className="bg-white-600 text-blue-500 text-sm px-4 py-2 rounded-md mr-2 md:mr-4 border-2 border-solid border-blue-500">
                Register
              </button>
            </Link>
            <Link href="/sign-in">
              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700">
                Sign In
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderHome;
