"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { navigation } from "@/lib/navigation";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="flex items-center justify-center text-foreground lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="font-editorial text-xl leading-tight text-primary">
              VITAL
              <br />
              INDUSTRIES
            </div>
            <nav className="mt-12 flex flex-col gap-6">
              {navigation.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className="font-editorial text-3xl text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </div>
          <SheetClose asChild>
            <Button asChild size="default" className="w-full">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
