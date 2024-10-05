import Mission from "@/components/Mission";
import Image from "next/image";

const names = [
  { tag: "Kenneth Anderson" },
  { tag: "Diego Arria" },
  { tag: "George Ayittey" },
  { tag: "Vladimir Bukovsky" },
  { tag: "Palden Gyatso" },
  { tag: "Thor Halvorssen" },
  { tag: "Václav Havel – Chairman Emeritus [1936-2011]" },
  { tag: "Ron Jacobs" },
  { tag: "Garry Kasparov" },
  { tag: "Mart Laar" },
  { tag: "Jacqueline Moudeina" },
  { tag: "Amir Ahmad Nasr" },
  { tag: "Abdel Nasser Ould Ethmane" },
  { tag: "Park Sang Hak" },
  { tag: "Robert A. Sirico" },
  { tag: "Mutabar Tadjibaeva" },
  { tag: "Álvaro Vargas Llosa" },
  { tag: "Ramón José Velásquez [1916-2014]" },
  { tag: "Elie Wiesel" },
  { tag: "Harry Wu" },
];

const AboutUs = () => {
  return (
    <div className='w-full max-w-6xl mx-auto min-h-screen px-4 pt-6 pb-12'>
      <h1 className='text-3xl text-center font-semibold'>About IHRAA</h1>
      <div className='mt-5 flex gap-8'>
        <div className='w-full lg:w-[80%]'>
          <div className='relative w-full  h-[150px] aspect-video object-cover overflow-hidden rounded-md border'>
            <Image alt='' priority fill src='/about-whraf.webp' />
          </div>
          <div>
            <p className='mt-3'>
              The International Human Rights and AIDS Organization (IHRAA) is a
              nonpartisan, nonprofit organization committed to promoting and
              protecting human rights globally, with a focus on individuals in
              closed and oppressed societies. Our mission is to safeguard
              freedom, advance liberal democracy, and uphold the core principles
              of the 1976 International Covenant on Civil and Political Rights
              (ICCPR).
            </p>
            <p className='mt-3'>
              IHRAA addresses urgent humanitarian challenges like the economic
              crisis, child protection, HIV/AIDS treatment, prostitution, and
              the rights of sex workers. We also champion youth empowerment and
              climate change action.
            </p>
            <p className='mt-3'>
              Our goal is to establish NGOs in 25 countries, with an emphasis on
              Africa and parts of Asia. NGOs will be awarded to participants by
              merit.
            </p>
          </div>

          {/* Mission */}
          <Mission />

          <div>
            <h2 className='text-3xl text-center font-semibold my-12'>
              Our Work
            </h2>

            <p className='mt-4'>
              Grounded in a deep commitment to individual liberty, the
              International Human Rights and AIDS Organization (IHRAA) is
              dedicated to raising awareness about the importance of freedom and
              its vulnerability across the globe. Our programs are designed to
              educate and inspire, helping people understand what makes a
              society truly free, why freedom is essential, and how it can be
              nurtured, developed, and sustained.
            </p>
            <p className='mt-3'>
              We strive to reach a wide audience—from global leaders and experts
              to intellectuals and the general public—by promoting freedom and
              tolerance in regions where these values are most under threat.
              IHRAA&apo;s initiatives span a broad spectrum, including:
            </p>
            <p>- Successful campaigns to free political prisoners.</p>
            <p>- On-the-ground educational programs in closed societies.</p>
            <p>- Seminars on individual rights held on Capitol Hill.</p>
            <p>
              - The production of popular films and media focused on human
              rights.
            </p>
            <p>- In-depth legal analyses.</p>
            <p>
              - Organizing and hosting engaging, informative events around the
              world.
            </p>
            <p className='mt-3'>
              For more details on our work and initiatives, please explore the
              Programs section of our website.
            </p>
            <p className='mt-3'>
              Founded in 2005, IHRAA officially opened its offices in New Jersey
              in April 2006. Since then, we have been at the forefront of global
              efforts to defend human rights and promote liberty.
            </p>
          </div>
          <div>
            <h2 className='text-3xl text-center font-semibold my-12 capitalize'>
              BOARD AND INTERNATIONAL COUNCIL
            </h2>

            <p className='mt-4'>
              The Board of Directors and International Council are comprised of
              dedicated individuals from across the globe, all united by a
              shared passion for protecting and advancing individual rights and
              freedoms. This dynamic and diverse group includes legal experts,
              former prisoners of conscience, and influential policymakers, all
              of whom bring a wealth of experience and insight to our mission.
            </p>
            <p className='mt-3'>
              Each member generously offers their time and expertise on a
              pro-bono basis, guiding and overseeing our efforts to ensure that
              human rights are preserved and championed worldwide. Their
              collective commitment is at the heart of everything we do.
            </p>
            <div className='mt-3'>
              {names.map((name, i) => (
                <p key={i}>{name.tag}</p>
              ))}
            </div>
          </div>
        </div>
        <div className='hidden lg:block space-y-3'>
          <Image
            alt=''
            width={200}
            height={200}
            src='/cry.webp'
            className='w-full aspect-auto object-cover rounded-md'
          />

          <Image
            alt=''
            width={200}
            height={200}
            src='/chain.webp'
            className='w-full aspect-auto object-cover rounded-md'
          />

          <Image
            alt=''
            width={200}
            height={200}
            src='/one.webp'
            className='w-full aspect-auto object-cover rounded-md'
          />

          <Image
            alt=''
            width={200}
            height={200}
            src='/kids.webp'
            className='w-full object-cover rounded-md'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
