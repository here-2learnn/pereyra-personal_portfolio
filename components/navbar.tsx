"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Hobbies", href: "/hobbies" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e8d8c5] bg-[#fff7df]/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-20 max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3">
        <Link href="/" className="flex flex-col">
          <span className="font-heading text-2xl font-semibold text-[#641e35]">
            my little corner.
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#99717a]">
            A PERSONAL PORTFOLIO
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                 className={buttonVariants({
                    variant: isActive ? "default" : "ghost",
                    size: "sm",
})}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
