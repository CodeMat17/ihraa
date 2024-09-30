import Image from "next/image";
import HamburgerSheet from "./HamburgerSheet";
import ModeToggle from "./ModeToggle";
import DesktopNav from "./DesktopNav";

const Header = () => {
  return (
   
      
      <div className='w-full py-2 pl-4 pr-2 sticky top-0 z-50 bg-white/60 dark:bg-gray-950/60 backdrop-filter backdrop-blur-md shadow-md'>
        <div className='flex items-center justify-between max-w-6xl mx-auto  gap-5'>
        <Image alt="logo" priority width={50} height={50} src='/logo.webp' className="rounded-full" />
          <div className='flex items-center gap-2'>
            <ModeToggle />
            <div className="flex items-center">
            <HamburgerSheet />
            <DesktopNav />
            </div>
          </div>
        </div>
      </div>

  );
};

export default Header;
