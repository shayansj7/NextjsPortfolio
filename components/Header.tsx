"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `hover:text-gray-300 ${
      pathname === path ? "font-bold text-white" : "text-gray-100"
    }`;
  return (
    <header className="sticky top-0 z-50 bg-emerald-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide">
          Shayan Portfolio
        </h1>

        <nav className="space-x-6 text-sm">
          <a href="/" className={linkClass("/")}>Home</a>
          <a href="/about" className={linkClass("/about")}>About</a>
          <a href="/works" className={linkClass("/works")}>Works</a>
        </nav>
      </div>
    </header>
  );
}
