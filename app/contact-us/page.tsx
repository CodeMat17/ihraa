"use client";

import ShimmerButton from "@/components/ui/shimmer-button";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className='w-full min-h-screen max-w-4xl mx-auto px-4 pb-12 pt-10 dark:text-gray-400'>
      <h1 className='text-3xl font-semibold text-center'>CONTACT US</h1>
      <div className='mt-8'>
        <p>
          Please contact our office for more information. We are happy to answer
          any questions you may have. One of our friendly staff members are
          always available to speak about our organization and the host event.
        </p>
        <p className='mt-6 text-center'>
          Address - 5609 Old Court Road, Windsor Mill, Baltimore, <br />
          MD 21244 - 1146, USA <br />
          Tel :+1- (770) 824-8695 Fax +1 (844) 381-2123 <br />
          E-mail: info@ihraa.org
        </p>
      </div>
      <div className='z-10 mt-8 flex items-center justify-center'>
        <Link href='mailto:info@ihraa.org'>
          <ShimmerButton className='shadow-2xl'>
            <span className='whitespace-pre-wrap text-center font-medium leading-none tracking-wider text-white dark:from-white dark:to-slate-900/10 lg:text-lg'>
              CONTACT US
            </span>
          </ShimmerButton>
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
