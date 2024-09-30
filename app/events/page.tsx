import Image from "next/image";

const Events = () => {
  return (
    <div className='px-4 pb-12 pt-6 w-full min-h-screen max-w-6xl mx-auto dark:text-gray-400'>
      <h1 className='text-3xl text-center font-semibold'>EVENT AGENDA</h1>
      <div className='mt-6'>
        <p className='max-w-[800px] mx-auto'>
          The upcoming meeting offers participants a valuable opportunity to
          connect, exchange ideas, and contribute to the growth of the field. It
          will foster a sense of community among society members, enabling them
          to collaborate and learn from one another. Junior scholars will
          benefit especially, as they will have the chance to network, present
          their research, and engage in discussions with senior scholars,
          fostering mentorship and intellectual growth.
        </p>
        <p className='pt-4 pb-1 text-lg font-medium max-w-[800px] mx-auto'>
          Learning Objectives
        </p>
        <p className='max-w-[800px] mx-auto'>
          The Human Rights Annual Conference on Economic Crisis, Child
          Protection, HIV/AIDS Treatment, Prostitution, and Sex Work seeks to
          bring together leading academic scientists, researchers, and scholars
          to share their experiences and research findings on various aspects of
          International Human Rights Law. This conference will serve as a
          dynamic interdisciplinary platform where researchers, practitioners,
          and educators can present and discuss the latest innovations, trends,
          and pressing concerns. Attendees will also address the practical
          challenges they face and explore effective solutions within the realm
          of International Human Rights Law.
        </p>
        <div className='mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8'>
          <Image
            alt=''
            priority
            width={254}
            height={190}
            src='/usa.jpg'
            className='rounded-md'
          />
          <h2 className='text-2xl font-medium text-amber-500 max-w-sm'>
            Conference Venue @ Maryland Convention Center USA & Maison De La
            Culture Douta Seck, in Dakar, Senegal.
          </h2>
        </div>
        <div className='py-12 '>
          <h1 className='text-3xl text-center font-semibold'>AGENDA</h1>
          <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='border dark:border-none rounded-xl p-6 shadow-md bg-black/10 dark:bg-gray-950'>
              <h3 className='font-medium'>Day 1</h3>
              <div className='space-y-2.5 mt-3 text-sm'>
                <div className='leading-1'>
                  <p>10:00AM to 11:45AM </p>
                  <h3>Opening Remarks: Kenneth Pargament, Ph.D.</h3>
                </div>

                <div>
                  <p>11:50PM to 2:00PM </p>
                  <p>Paper Presentation Sessions by participants</p>
                </div>
                <div>
                  <p>2:00PM to 2:30PM </p>
                  <p>Lunch, posters still available for viewing</p>
                </div>
                <div>
                  <p>2:30PM to 4:00PM </p>
                  <p>Discussion on Corruption Prevention.</p>
                </div>
              </div>
            </div>

            <div className='border dark:border-none rounded-xl p-6 shadow-md bg-black/10 dark:bg-gray-950'>
              <h3 className='font-medium'>Day 2</h3>
              <div className='space-y-2.5 mt-3 text-sm'>
                <div>
                  <p>9:30AM to 11:30AM </p>
                  <h3>
                    Improving Sustainability, Impact and Effectiveness on how to
                    eradicate Corruption.
                  </h3>
                </div>
                <div>
                  <p>11:30PM to 12:00PM </p>
                  <p>- Tea break</p>
                </div>
                <div>
                  <p>12:00PM to 2:00PM </p>
                  <p>- Paper Presentation Sessions by participants</p>
                </div>
                <div>
                  <p>2:00PM to 2:30PM </p>
                  <p>- Reception Break </p>
                </div>
                <div>
                  <p>2:30PM to 4:00PM </p>
                  <p>Paper presentations by participants.</p>
                </div>
              </div>
            </div>

            <div className='border dark:border-none rounded-xl p-6 shadow-md bg-black/10 dark:bg-gray-950'>
              <h3 className='font-medium'>Day 3</h3>
              <div className='space-y-2 mt-3 text-sm'>
                <div>
                  <p>9:30AM to 11:30AM </p>
                  <h3>
                    Improving Sustainability, Impact and Effectiveness on how to
                    eradicate Unemployment.
                  </h3>
                </div>

                <div>
                  <p>11:50AM to 2:00PM </p>
                  <p>- Reception Break</p>
                </div>
                <div>
                  <p>2:00PM to 4:00PM </p>
                  <p>- Paper presentations by participants</p>
                </div>
              </div>
            </div>

            <div className='border dark:border-none rounded-xl p-6 shadow-md bg-black/10 dark:bg-gray-950'>
              <h3 className='font-medium'>Day 4</h3>
              <div className='space-y-2 mt-3 text-sm'>
                <div>
                  <p>9:30AM to 11:30AM </p>
                  <h3>Opening Remarks by Oriana Ambrosius</h3>
                </div>

                <div>
                  <p>11:30PM to 2:00PM </p>
                  <p>The causes of Corruption and Prevention.</p>
                </div>
                <div>
                  <p>2:00PM to 2:30PM </p>
                  <p>Reception Break</p>
                </div>
                <div>
                  <p>2:30PM to 4:00PM </p>
                  <p>Paper presentations by participants</p>
                </div>
              </div>
            </div>

            <div className='border dark:border-none rounded-xl p-6 shadow-md bg-black/10 dark:bg-gray-950'>
              <h3 className='font-medium'>Day 5</h3>
              <div className='space-y-2 mt-3 text-sm'>
                <div>
                  <p>10:00AM to 11:45AM </p>
                  <h3>Opening Remarks by BolÃƒ­var Amistad, M.D </h3>
                </div>

                <div>
                  <p>11:50PM to 2:00PM </p>
                  <p>The Future of Environment Protection and Contributions.</p>
                </div>
                <div>
                  <p>2:00PM to 2:30PM </p>
                  <p>Lunch</p>
                </div>
                <div>
                  <p>2:30PM to 3:00PM </p>
                  <p>Closing remarks.</p>
                </div>
                <div>
                  <p>3:00PM</p>
                  <p>The end.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='py-12 max-w-[800px] mx-auto'>
          <h2 className='text-3xl text-center font'>
            CONFERENCE EXECUTIVE DIRECTORS
          </h2>

          <div className='mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-medium gap-4'>
            <p className='text-center'>Mr. Catherine Craver, B.A, M.Ed</p>
            <p className='text-center'>Prof. Harold G. Koenig</p>
            <p className='text-center'>Mr. Jeff Levin, Ph.D</p>
            <p className='text-center'>Ms. Susan G. Meador, M.D</p>
          </div>
        </div>
        <p className='mt-6 max-w-[800px] mx-auto'>
          The conference will explore critical questions surrounding the
          equitable distribution of resources and the significance of social
          inclusion in fostering a fair and just society. Discussions will also
          focus on the influence of less-developed countries in global politics,
          business, education, and the public sector, while examining key social
          and economic trends that have the potential to reduce violence.
        </p>
        <p className='mt-3 max-w-[800px] mx-auto'>
          The Human Rights Annual Conference on Economic Crisis, Child
          Protection, HIV/AIDS Treatment, Prostitution, Sex Work, and Forced
          Labor will delve into pressing issues such as:
        </p>
        <p className='mt-2 max-w-[800px] mx-auto'>
          - Gaining a deeper understanding of the relationship between religion,
          human rights, and environmental protection
        </p>
        <p className='mt-2 max-w-[800px] mx-auto'>
          - Developing methods to measure the impact of spirituality, religion,
          and health on individual and societal well-being
        </p>
        <p className='mt-2 max-w-[800px] mx-auto'>
          - Investigating how participation in religious or spiritual
          communities affects the health and flourishing of both individuals and
          communities
        </p>
        <p className='mt-4 max-w-[800px] mx-auto'>
          This conference provides a platform for participants to critically
          engage with these themes, fostering meaningful discussions and
          innovative solutions to global challenges.
        </p>
      </div>
    </div>
  );
};

export default Events;
