"use client";
import Image from "next/image"
import Link from "next/link"
import Logo from "../../../public/images/Logo.png"
import { useAuth } from "@/context/authorizationContext"


function HeaderHome() {

  const {isLoggedIn} = useAuth();

  return (
    <header className="flex justify-between items-center p-2 bg-white">
    <div className="flex items-center bg-white">
      <Image src={Logo} alt="Logo" />
    </div>
    
    <nav className="flex justify-center">
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/discover">Discover</Link></li>
        <li><Link href="/activities">Activities</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
    
    {isLoggedIn ? (<div> <Link href="/">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-700">

        Dashboard
        </button>
      </Link></div>) : <div>
      

      <Link href="/register">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-700">

        Register
        </button>
      </Link>
      <Link href="/sign-in">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-700">
            Sign In
</button>
      </Link>
    </div>}

    
  </header>
  )
}

export default HeaderHome