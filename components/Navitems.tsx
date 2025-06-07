"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Companions",
        href: "/companions",
    },
    {
        label: "My Journey",
        href: "/my-journey",
    },
]
const Navitems = () => {
  const pathname = usePathname()
    
  return (
    <nav className="flex items-center gap-4">
        {navItems.map((item) => (
            <Link href={item.href} key={item.label} className={`${pathname === item.href ? "text-primary" : "text-gray-500"}`}>
                {item.label}
            </Link>
        ))}
    </nav>
  )
}

export default Navitems