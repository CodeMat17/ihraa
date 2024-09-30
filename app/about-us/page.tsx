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
    <div className='w-full max-w-[967px] mx-auto min-h-screen px-4 pt-6 pb-12'>
      <h1 className='text-3xl text-center font-semibold'>About WHRAF</h1>
      <div className='mt-5 flex gap-8'>
        <div className='w-full lg:w-[70%]'>
          <div className='relative w-full  h-[150px] aspect-video object-cover overflow-hidden rounded-md border'>
            <Image alt='' priority fill src='/about-whraf.webp' />
          </div>
          <div>
            <p className='mt-3'>
              The World Human Rights and AIDS Foundation (WHRAF) is a
              nonpartisan, nonprofit organization dedicated to the global
              promotion and protection of human rights, with a special focus on
              supporting individuals in closed and oppressed societies. WHRAF
              brings together people from all walks of life in a united mission
              to defend human rights and advance the cause of liberal democracy
              worldwide.
            </p>
            <p className='mt-3'>
              Our mission is simple yet profound: to safeguard freedom and
              ensure that it flourishes across the globe. We are committed to
              promoting the core principles that lie at the heart of the human
              rights movement, as outlined in the 1976 International Covenant on
              Civil and Political Rights (ICCPR). These founding ideals continue
              to guide our work, as we strive to protect civil liberties,
              political freedom, and the dignity of every individual.
            </p>
            <p className='mt-3'>
              To learn more about this international effort, you can view the
              full list of ICCPR signatories, standing in solidarity for the
              preservation and promotion of human rights.
            </p>
          </div>

          {/* Mission */}
          <Mission />

          <div>
            <h2 className='text-3xl text-center font-semibold my-12'>
              Our Work
            </h2>

            <p className='mt-4'>
              Grounded in a deep commitment to individual liberty, the World
              Human Rights and AIDS Foundation (WHRAF) is dedicated to raising
              awareness about the importance of freedom and its vulnerability
              across the globe. Our programs are designed to educate and
              inspire, helping people understand what makes a society truly
              free, why freedom is essential, and how it can be nurtured,
              developed, and sustained.
            </p>
            <p className='mt-3'>
              We strive to reach a wide audience—from global leaders and experts
              to intellectuals and the general public—by promoting freedom and
              tolerance in regions where these values are most under threat.
              WHRAF&apo;s initiatives span a broad spectrum, including:
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
              Founded in 2005, WHRAF officially opened its offices in New Jersey
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
        <div className='hidden lg:block -mt-3 space-y-3'>
          <Image
            alt=''
            width={400}
            height={200}
            src='/about-whraf-2.webp'
            className='w-full object-cover rounded-md'
          />

          <Image
            alt=''
            width={200}
            height={200}
            src='/about-whraf-3.webp'
            className='w-full object-cover rounded-md'
          />

          <Image
            alt=''
            width={200}
            height={200}
            src='/about-whraf-4.webp'
            className='w-full object-cover rounded-md'
          />

          <Image
            alt=''
            width={200}
            height={200}
            src='/about-whraf-5.webp'
            className='w-full object-cover rounded-md'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
