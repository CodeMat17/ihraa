'use client'

import ShimmerButton from "@/components/ui/shimmer-button";
import Link from "next/link";

const Registration = () => {
  return (
    <div className='w-full min-h-screen max-w-5xl mx-auto px-4 pb-12 pt-6 '>
      <h1 className='text-3xl text-center font-semibold'>REGISTRATION</h1>

      <div className='mt-8 space-y-3'>
        <p>
          Registration for the international conference is open to all
          individuals who wish to participate. Whether you&apos;re attending as
          an individual or representing an organization or country, you are
          welcome to join. There is no requirement to belong to any specific
          organization to attend this event.
        </p>
        <p>
          Each participant or group should submit a separate registration form.
          We encourage early registration to secure your spot in advance. Please
          note that any cancellations must be received prior to the conference
          date.
        </p>
        <p>
          Thanks to the generosity of our donors, registration for the
          conference is free for all participants. They have graciously covered
          all registration fees.
        </p>
        <p>
          Delegates will need to arrange and pay for their hotel accommodations
          with our recommended hotels. Further details
          will be provided upon confirmation of your registration.
        </p>
        <p>
          To complete your registration, simply click the button below to
          download the registration form. Fill it out with accurate information
          and submit the completed form, along with a scanned copy of your
          passport and hotel booking confirmation, to the conference secretariat
          at events@whraf.org. This will finalize your registration for the
          event.
        </p>
      </div>
      <div className='z-10 mt-8 flex items-center justify-center'>
        <Link href='mailto:events@whraf.org'>
          <ShimmerButton className='shadow-2xl'>
            <span className='whitespace-pre-wrap text-center font-medium leading-none tracking-wider text-white dark:from-white dark:to-slate-900/10 lg:text-lg'>
              REGISTER
            </span>
          </ShimmerButton>
        </Link>
      </div>
    </div>
  );
}

export default Registration