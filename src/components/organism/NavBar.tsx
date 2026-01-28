import { navLinks } from "@/lib/constants/data"

export default function NavBar() {
  return (
    <div className="bg-maroon-700 text-zinc-50 dark:bg-softPink-200 dark:text-zinc-800 flex items-center justify-center  h-11 space-x-4">
      {navLinks.map((link) => (
        <div key={link.name} className="flex items-center space-x-2 p-3">
          {link.icon} <span>{link.name}</span>
        </div>))}
    </div>
  )
}

