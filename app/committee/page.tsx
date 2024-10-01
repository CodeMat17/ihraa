import Image from "next/image";

const list = [
  {
    name: "Chantal Henry",
    position: "Co-Chair, Steering Committee (Strategic Planning and Policy)",
  },
  {
    name: "Eduard Vieta",
    position:
      "Co-Chair, Scientific Program Committee (Research Initiatives and Innovation)",
  },
  {
    name: "James Cruze",
    position:
      "Co-Chair, Scientific Program Committee (Scientific Publications and Outreach)",
  },
  {
    name: "Christine Kuehne​r",
    position:
      "Co-Chair, Local Organizing Committee (Venue Coordination and Logistics)",
  },
  {
    name: "Michael Bauer",
    position:
      "Co-Chair, Local Organizing Committee (Speaker and Participant Liaison)",
  },
  {
    name: "Alexandra Raisman",
    position:
      "Co-Chair, Local Organizing Committee (Hospitality and Event Management)",
  },
  {
    name: "Patrick O'Brien",
    position: "Co-Chair, Steering Committee (Donor and Sponsor Relations)",
  },
  {
    name: "Gabriel Chen",
    position:
      "Co-Chair, Scientific Program Committee (Program Evaluation and Impact Assessment)",
  },
  {
    name: "Isabella Grange",
    position:
      "Co-Chair, Local Organizing Committee (Public Relations and Media)",
  },
  {
    name: "Rachel Huang",
    position:
      "Co-Chair, Steering Committee (Community Engagement and Inclusion)",
  },
  {
    name: "Samuel Williams",
    position:
      "Co-Chair, Scientific Program Committee (Technology Integration and IT)",
  },
  {
    name: "Lucas Schneider",
    position:
      "Co-Chair, Steering Committee (Risk Management and Legal Affairs)",
  },
  {
    name: "Julia Evans",
    position:
      "Co-Chair, Scientific Program Committee (Educational Outreach and Mentorship)",
  },
];

const Committee = () => {
  return (
    <div className='w-full min-h-screen max-w-6xl mx-auto px-4 pt-6 pb-12 dark:text-gray-400'>
      <h1 className='text-3xl text-center font-semibold'>Committee Members</h1>
      <div className='mt-12'>
        <div className='flex justify-center'>
          <Image
            alt=''
            priority
            width={1600}
            height={415}
            src='/comi.webp'
            className='rounded-md w-full h-[300px] object-cover'
          />
        </div>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {list.map((item, index) => (
            <div key={index}>
              <h1>{item.name}</h1>
              <p>{item.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Committee;
