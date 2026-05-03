"use client";

import { BarChart3, Home, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../shared/lib/utils";
import { SearchQueryClient } from "@/features/search/ui/Search-query-client";

export const Header = () => {
  const pathname = usePathname();
  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      isActive: pathname === "/",
    },
    {
      href: "/coins",
      label: "All Coins",
      icon: BarChart3,
      isActive: pathname === "/coins" || pathname.startsWith("/coins/"),
    },
  ];

  return (
    <header className="site-header">
      <div className="flex min-w-0 items-center gap-3">
        <Link href="/" className="brand-link" aria-label="CryptoPulse home">
          <span className="brand-mark">
            <Sparkles size={18} />
          </span>
          <span className="truncate">CryptoPulse</span>
        </Link>
      </div>

      <SearchQueryClient />

      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map(({ href, label, icon: Icon, isActive }) => (
          <Link
            key={href}
            href={href}
            className={cn("nav-link", {
              "is-active": isActive,
            })}
            aria-current={isActive ? "page" : undefined}
          >
            <Icon size={16} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};
