"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/site/mobile-nav";
import { TopBar } from "@/components/site/top-bar";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "transition-all duration-500"
      )}
    >
      {/* Utility / Contact Bar */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-out",
          scrolled ? "h-0" : "h-11"
        )}
      >
        <TopBar />
      </div>

      {/* Main Navigation */}
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "border-b border-border bg-[#F7F4EC]/95 shadow-sm backdrop-blur-md"
            : "border-b border-black/5 bg-[#F7F4EC]/90 backdrop-blur-sm"
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-content items-center justify-between",
            "px-6 lg:px-10 xl:px-16 2xl:px-20",
            "transition-all duration-500",
            scrolled ? "py-4" : "py-5"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-editorial text-lg leading-none tracking-tight text-primary"
          >
            VITAL
            <br />
            INDUSTRIES
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-1 text-sm tracking-wide",
                    "text-foreground/80 transition-colors",
                    "hover:text-foreground",
                    active && "text-foreground"
                  )}
                >
                  {item.label}

                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px w-full",
                      "origin-left scale-x-0",
                      "bg-accent-dark transition-transform duration-300",
                      active && "scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Contact */}
          <div className="hidden lg:block">
            <Button asChild size="sm">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}