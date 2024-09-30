import Link from "next/link";
import { Button } from "./ui/button";

const DesktopNav = () => {
  return (
    <nav className='hidden lg:flex'>
      <Button asChild variant='ghost'>
        <Link href='/'>Home</Link>
      </Button>
      <Button asChild variant='ghost'>
        <Link href='/about-us'>About Us</Link>
      </Button>
      <Button asChild variant='ghost'>
        <Link href='/events'>Events</Link>
      </Button>
      <Button asChild variant='ghost'>
        <Link href='/our-staff'>Staff</Link>
      </Button>
      <Button asChild variant='ghost'>
        <Link href='/registration'>Registration</Link>
      </Button>
      <Button asChild variant='ghost'>
        <Link href='/awards'>Awards</Link>
      </Button>
      <Button asChild variant='ghost'>
        <Link href='/sponsors'>Sponsors</Link>
      </Button>
      <Button asChild variant='ghost'>
        <Link href='/committee'>Committee</Link>
      </Button>
      <Button asChild variant='ghost'>
        <Link href='/visa-processing'>Visa Processing</Link>
      </Button>
      <Button asChild variant='ghost'>
        <Link href='/contact-us'>Contact Us</Link>
      </Button>
    </nav>
  );
};

export default DesktopNav;
