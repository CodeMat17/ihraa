import Image from "next/image";

const Visa = () => {
  return (
    <div className='w-full min-h-screen px-4 pb-12 pt-6 max-w-4xl mx-auto dark:text-gray-400'>
      {/* <h1 className='text-3xl text-center font-semibold'>VISA PROCESSING</h1> */}

      <div>
        <div className='flex flex-col  justify-center items-center'>
          <Image alt='logo' priority width={130} height={130} src='/us.png' />
          <p className='font-medium mt-2 text-center'>
            Visa Processing for the Human Rights Annual Conference
          </p>
        </div>
      </div>
      <div className='mt-8 space-y-4'>
        <p>
          For participants requiring a visa to attend the Human Rights Annual
          Conference, we are pleased to facilitate the visa process. Your travel
          documents will be processed directly in the United States by the U.S.
          Immigration Bureau’s Visa Authorization Department. Upon approval, the
          same-day visa authorization will be sent to the U.S. Embassy or
          Consulate in your home country for collection, along with all relevant
          documents. You will receive a visa approval letter, which will be
          shared with both the U.S. Embassy and you personally.
        </p>
        <p className='font-medium'>
          Visa Process for Entering the United States
        </p>
        <div>
          <p className='font-medium'>Do I need a visa?</p>
          <p>
            The United States issues two types of visas: immigrant and
            non-immigrant. As a conference participant, you will require a
            non-immigrant visa. The U.S. Visa Authorization Department will work
            directly with the consular section of the U.S. Embassy in your
            country of residence to finalize your visa for the conference.
          </p>
        </div>
        <div>
          <p>Required Visa Application Documents</p>
          <p>
            To ensure a smooth visa process, please ensure you have the
            following documents ready:
          </p>
          <ul className='mt-2.5 space-y-1.5'>
            <li>
              - A valid passport with at least 6 months of remaining validity
            </li>
            <li>- Completed registration forms for the conference</li>
            <li>
              - A scanned copy of the data page from your international passport
            </li>
            <li>- A recent passport-sized photograph</li>
            <li>
              - Proof of immigration status in the USA (if applicable) and
              permission to re-enter the USA after your trip
            </li>
            <li>
              - Evidence of sufficient funds (e.g., a recent bank statement from
              the last 30 days or travelers’ cheques—credit card statements are
              not accepted)
            </li>
            <li>- Hotel booking confirmation</li>
          </ul>
          <p className='mt-4'>
            All participants must submit their hotel booking confirmation along
            with their completed registration forms to the conference
            secretariat. Once we receive your documents, we will begin
            processing your visa application.
          </p>
          <p className='mt-4'>
            Should you have any questions or require assistance, feel free to
            contact the conference secretariat at info@ihraa.org.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Visa;
