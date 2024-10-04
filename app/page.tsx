import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";

const links = [
  { tag: "Register", href: "/registration", gif: "/register.gif" },
  { tag: "Events", href: "/events", gif: "/events.gif" },
  { tag: "Sponsor", href: "/sponsors", gif: "/sponsor.gif" },
];

const Home = () => {
  return (
    <div className='w-full min-h-screen'>
      <Hero />
      <div className='px-3 py-12 flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-6'>
        <div className='relative flex justify-center md:w-[263px]'>
          <Image
            alt='President'
            priority
            width={263}
            height={366}
            src='/leader.webp'
            className='rounded-xl w-full aspect-auto sm:w-[400px] sm:aspect-auto md:w-[263px] md:h-[366px] object-cover '
          />
        </div>
        <div className='md:w-[60%] lg:w-[50%] dark:text-gray-400'>
          <p className=''>
            The International Human Rights and AIDS Orientation (IHRAA) is a
            global network of 62 member institutions dedicated to advancing
            research and education in the field of human rights. Representing 33
            countries, WHRAF brings together experts, scholars, and advocates
            across various disciplines to foster the exchange of ideas,
            collaboration, and dialogue on critical human rights issues.
          </p>
          <p className='mt-3'>
            With a strong commitment to supporting PhD researchers and
            facilitating cooperation between its member institutions, IHRAA
            creates opportunities for meaningful engagement and research
            development.
          </p>
          <p className='mt-3'>
            At the heart of IHRAA&apos;s mission are two pressing global
            concerns: migration, with a particular focus on immigration, and the
            complex issues surrounding propaganda and freedom of speech.
            Additionally, IHRAA addresses urgent humanitarian challenges such as
            the economic crisis, child protection, HIV/AIDS treatment,
            prostitution, and the rights of sex workers. Through these efforts,
            IHRAA is dedicated to protecting vulnerable populations and
            promoting justice, equality, and human dignity worldwide.
          </p>
        </div>
      </div>
      <div className='py-12 px-3 w-full max-w-5xl mx-auto dark:text-gray-400'>
        <h2
          className='text-center font-medium text-3xl
        '>
          Conference Aims and Objectives
        </h2>
        <div className='mt-6'>
          <p>
            The Human Rights Annual Conference is designed to bring together
            leading academic scholars, researchers, and human rights advocates
            from around the world. Its purpose is to create a space where these
            individuals can exchange insights, share their latest research, and
            collaborate on all aspects of International Human Rights Law.
          </p>
          <p className='mt-4'>
            The conference serves as a dynamic interdisciplinary platform,
            enabling researchers, practitioners, and educators to present and
            discuss the most recent advancements, trends, and challenges in
            human rights law. Attendees will also explore practical solutions to
            the real-world issues they face in their work.
          </p>
          <p className='mt-3'>
            All conference papers submitted will undergo a rigorous blind peer
            review process, evaluated by three qualified reviewers to ensure the
            highest standards of scholarship. Post-conference proceedings will
            be indexed in the International Science Index and submitted for
            inclusion in Google Scholar, Scopus, and Thomson Reuters, offering
            wide visibility for participants&apos; research.
          </p>
          <p className='mt-3'>
            During registration, participants will receive the conference
            abstracts and proceedings book, a CD, and a certificate of
            presentation, fostering a sense of community and recognition for
            their contributions to this vital field.
          </p>
        </div>
      </div>

      <div className='py-12 px-3 w-full max-w-5xl mx-auto dark:text-gray-400'>
        <h2
          className='text-center font-medium text-3xl
        '>
          Special Journal Issues
        </h2>
        <div className='mt-6'>
          <p>
            The International Human Rights and AIDS Orientation (IHRAA) is
            excited to announce its collaboration with the Special Journal Issue
            on Economic Crisis, Child Protection & HIV/AIDS Treatment,
            Prostitution, and Sex Workers for the 2017 conference. A selection
            of high-impact, full-text papers submitted to the conference will be
            considered for inclusion in this special journal issue.
          </p>
          <p className='mt-3'>
            All submitted papers will undergo a rigorous review process, with
            selection based on peer reviews and conference presentations.
            Submissions must be original and not under consideration by any
            other journal or publication. The final selection will be made
            collaboratively by the Guest Editors and the Editor-in-Chief,
            ensuring the highest academic standards. Selected full-text papers
            will be published online, free of charge, offering contributors
            global visibility.
          </p>
        </div>
      </div>

      <div className='py-12 px-3 w-full max-w-5xl mx-auto dark:text-gray-400'>
        <h2
          className='text-center font-medium text-3xl
        '>
          Participation and Registration
        </h2>

        <div className='mt-6'>
          <p>
            You do not need to belong to a specific organization to attend this
            event. Anyone, whether as an individual or as a group of up to eight
            people representing a country, family, or organization, is welcome
            to participate in the upcoming conference.
          </p>
          <p className='mt-3'>
            To register, please submit the names and passport numbers of your
            group members at your earliest convenience. Visa assistance requests
            will be forwarded directly to the U.S. Department of State for
            same-day authorization. Once approved, visa authorization will be
            sent to the U.S. Embassy in your country of residence.
          </p>
          <p className='mt-3'>
            All registered participants are entitled to round-trip airfare,
            meals, and accommodations for the duration of the conference,
            ensuring a smooth and enjoyable experience.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 dark:text-gray-400'>
          {links.map((link, i) => (
            <Link key={i} href={link.href}>
              <div className='flex flex-col items-center justify-center border p-9 rounded-xl shadow-md'>
                <Image
                  alt='register'
                  priority
                  width={150}
                  height={150}
                  src={link.gif}
                  className='dark:invert rounded-xl'
                />
                <p className='font-semibold text-xl mt-1'>{link.tag}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className='pb-12 px-3 w-full max-w-5xl mx-auto dark:text-gray-400'>
        <p>
          The International Human Rights and AIDS Orientation (IHRAA) is leading
          a vital humanitarian response to support thousands of people fleeing
          across the Syrian border each day, as well as those trapped by the
          ongoing violence within the country. WHRAF provides critical medical
          assistance, aids women and girls who are victims of violence, and
          ensures that refugees have access to their legal rights.
        </p>
        <p className='mt-3'>
          Founded in 1960 at the annual &quot;Conference of Four State
          Commissions&quot; in California, IHRAA is a private, non-profit
          organization based in Baltimore, Maryland. Since its inception, the
          foundation has remained committed to defending human rights and
          providing essential aid to vulnerable populations worldwide.
        </p>
      </div>
    </div>
  );
};

export default Home;
