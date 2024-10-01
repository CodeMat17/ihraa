import Image from "next/image";

const list = [
  { name: "Prof. Charles Anderson | Conference Secretariat" },
  { name: "DOROTHY Mifflin | Web Publisher " },
  { name: "Ms. Kate James |Resources and Administration" },
  { name: "Prof. Michael Smith | Senior Staff" },
  { name: "Dr. Nancy Dominic | Director of Human Affairs " },
  { name: "Julie Berlin | Senior Manager" },
  { name: "Chris Lines | Development and Communications" },
  { name: "Linda Benjamin Moore | Regional and Program Director" },
  { name: "Ms. Tracy Anthony Davis | Director of Finance " },
  { name: "Stuart Grey | Grants and Contracts Officer" },
  { name: "Benson Hamilton | Senior Grant Accountant " },
  { name: "Warren G. Harding | Accountant" },
  { name: "Dr. Christina Walker | Program Assistant" },
  { name: "Ms Monica Cohen | Regional Director " },
  { name: "Ms. Ruth Christopher | Program coordinator" },
  { name: "Laura Samuel | International Legal Director" },
  { name: "CELINA Felix | Refugee Protection Program" },
  { name: "PATRICIA Jefferson | Senior Associate Law and Security Program" },
  { name: "LINDA Thomas | Information Services Analyst" },
  { name: "HELEN Wilson | New Media and Online Coordinator" },
  { name: "SHARON Wythe | Network and Systems Engineer " },
  { name: "BRENDA Dayton | Video Producer" },
  {
    name: "Dr. Jackie Simmons | Coordinating Committee of Scientific Activities ",
  },
  { name: "Deputy Director Refugee Protection Program" },
  { name: "STEPHANIE Gerry | Director of Finance " },
  { name: "TERESA Martin | Director Crimes against Humanity Program" },
  { name: "Elevezia M Cepolina | Project Coordinator/Analyst (Temporary) " },
  { name: "Michael Cooper | Advisor Fighting Discrimination Program" },
  { name: "James Croll | Receptionist / Human Resources Assistant" },
];

const OurStaff = () => {
  return (
    <div className='w-full min-h-screen max-w-5xl mx-auto px-4 pb-12 pt-6  dark:text-gray-400'>
      <h1 className='text-3xl font-semibold text-center'>OUR STAFF</h1>
      <div className='mt-8'>
        <div className='flex justify-center'>
          <Image
            alt=''
            priority
            width={500}
            height={200}
            src='/staff.webp'
            className='rounded-lg w-[500px] aspect-video object-cover'
          />
        </div>

        <div className='mt-3 space-y-3'>
          <p>
            Our dedicated staff has always embraced a philosophy of unwavering
            commitment and diligence, consistently going above and beyond to
            ensure the success of this seminar. We are deeply committed to
            providing exceptional service to our registered delegates, ensuring
            their experience is both seamless and enriching.
          </p>
          <p>
            Our team plays an essential role in bringing this conference to
            life. They have invested their time and energy into making the event
            vibrant and inclusive, spreading invitations worldwide and engaging
            organizations, individuals, and associations to participate. Their
            efforts are key to making this gathering a truly global and
            impactful event.
          </p>
        </div>
      </div>
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2'>
              {list.map((item, index) => (
                  <p key={index}>{item.name}</p>
              ))}
      </div>
    </div>
  );
};

export default OurStaff;
