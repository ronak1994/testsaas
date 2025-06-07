import Link from "next/link"
import Image from "next/image"
import Navitems from "./Navitems"

const Navbar = () => {
  return (
   <nav className="flex justify-between items-center p-4">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Navitems />
            <p>Sign In</p>
          </div>
   </nav>
  )
}

export default Navbar