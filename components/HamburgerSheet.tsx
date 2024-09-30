"use client";

import * as React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

// Navigation items
const navs = [
  { tag: "HOME", link: "/" },
  { tag: "ABOUT US", link: "/about-us" },
  { tag: "EVENTS", link: "/events" },
  { tag: "OUR STAFF", link: "/our-staff" },
  { tag: "REGISTRATION", link: "/registration" },
  { tag: "AWARDS", link: "/awards" },
  { tag: "SPONSORS", link: "/sponsors" },
  { tag: "COMMITTEE", link: "/committee" },
  { tag: "VISA PROCESSING", link: "/visa-processing" },
  { tag: "CONTACT US", link: "/contact-us" },
];

const HamburgerSheet = () => {
  const [open, setOpen] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);

  // Ensure that the component only renders certain elements on the client side
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant='ghost' onClick={() => setOpen(true)}>
            {isClient && <AlignRightIcon className='h-6 w-6' />}
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className='py-12 px-4 space-y-4'>
            {navs.map((nav, i) => (
              <Button key={i} asChild variant='ghost' onClick={handleClose}>
                <Link
                  href={nav.link}
                  className='w-full text-2xl tracking-wider'>
                  {nav.tag}
                </Link>
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HamburgerSheet;
