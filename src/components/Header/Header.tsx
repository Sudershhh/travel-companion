import Image from "next/image"
import Logo from "../../../public/images/Logo.png"
function Header() {
  return (
    <header className=" p-4 h-full w-full bg-white">
        <nav className=" w-full ml-10">
        <Image
          src={Logo}
          alt="Logo"
          width={198}
          height={24}
        />
        </nav>

        </header>
  )
}

export default Header