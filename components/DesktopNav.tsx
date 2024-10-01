"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
// import {} from ''

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <nav className='hidden lg:flex'>
      <Button
        asChild
        variant='ghost'
        className={`${
          pathname === "/" ? "bg-stone-200 dark:bg-stone-900" : ""
        }`}>
        <Link href='/'>Home</Link>
      </Button>
      <Button
        asChild
        variant='ghost'
        className={`${
          pathname === "/about-us" ? "bg-stone-200 dark:bg-stone-900" : ""
        }`}>
        <Link href='/about-us'>About Us</Link>
      </Button>
      <Button
        asChild
        variant='ghost'
        className={`${
          pathname === "/events" ? "bg-stone-200 dark:bg-stone-900" : ""
        }`}>
        <Link href='/events'>Events</Link>
      </Button>
      <Button
        asChild
        variant='ghost'
        className={`${
          pathname === "/our-staff" ? "bg-stone-200 dark:bg-stone-900" : ""
        }`}>
        <Link href='/our-staff'>Staff</Link>
      </Button>
      <Button
        asChild
        variant='ghost'
        className={`${
          pathname === "/registration" ? "bg-stone-200 dark:bg-stone-900" : ""
        }`}>
        <Link href='/registration'>Registration</Link>
      </Button>
      <Button
        asChild
        variant='ghost'
        className={`${
          pathname === "/awards" ? "bg-stone-200 dark:bg-stone-900" : ""
        }`}>
        <Link href='/awards'>Awards</Link>
      </Button>
      <Button
        asChild
        variant='ghost'
        className={`${
          pathname === "/sponsors" ? "bg-stone-200 dark:bg-stone-900" : ""
        }`}>
        <Link href='/sponsors'>Sponsors</Link>
      </Button>
      <Button
        asChild
        variant='ghost'
        className={`${
          pathname === "/committee" ? "bg-stone-200 dark:bg-stone-900" : ""
        }`}>
        <Link href='/committee'>Committee</Link>
      </Button>
      <Button
        asChild
        variant='ghost'
        className={`${
          pathname === "/visa-processing"
            ? "bg-stone-200 dark:bg-stone-900"
            : ""
        }`}>
        <Link href='/visa-processing'>Visa Processing</Link>
      </Button>
      <Button
        asChild
        variant='ghost'
        className={`${
          pathname === "/contact-us" ? "bg-stone-200 dark:bg-stone-900" : ""
        }`}>
        <Link href='/contact-us'>Contact Us</Link>
      </Button>
    </nav>
  );
};

export default DesktopNav;
