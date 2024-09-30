const awards = [
  {
    title: "Best Paper Award of WHRAF",
    desc: "The Best Paper Award will be given to the most outstanding research paper presented at the WHRAF conference. The organizing committee, with input from the scientific review panel, will select the winner based on several factors: relevance to the conference’s themes, the depth and quality of research, and the significance of the findings. Both in-person and virtual paper submissions are eligible for this prestigious recognition. The recipient of the Best Paper Award will receive a Gold Medal and a Certificate of Achievement during the award ceremony. The decision made by the WHRAF organizing committee is final.",
  },
  {
    title: "Best Presentation Award of WHRAF",
    desc: "The Best Presentation Award is designed to recognize exceptional presentations delivered during the conference. Criteria for selection include the quality of the presentation, clarity of content, and the presenter’s ability to engage with the audience during the Q&A session. Each session chair will assess the presentations and select the best presenter in their respective session. Winners will be honored with a Gold Medal and Certificate of Excellence at the Awarding Ceremony. The decision of the session chairs will be final.",
  },
  {
    title: "Best Student Award of WHRAF",
    desc: "The Best Student Award recognizes outstanding student contributions to the conference. Selection will be based on the quality of the research, the relevance of findings to ongoing global practices, and effective time management during the presentation. Two students—Best Student (Local) and Best Student (International)—will be awarded Gold Medals and Certificates at the Awarding Ceremony. The WHRAF Research Panel will make the final decision on the award recipients.",
  },
];

const Awards = () => {
  return (
    <div className='w-full min-h-screen max-w-6xl mx-auto px-4 pb-12 pt-6 dark:text-gray-400'>
      <h1 className='text-center text-3xl font-semibold'>
        WHRAF AWARDS AND RECOGNITIONS
      </h1>

      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {awards.map((award, i) => (
          <div key={i} className='p-6 rounded-lg border'>
            <h2 className='text-lg font-medium mb-2'>{award.title}</h2>
            <p>{award.desc}</p>
          </div>
        ))}
      </div>

      <p className='mt-8'>
        These awards celebrate excellence and dedication to advancing knowledge
        and human rights practices, embodying WHRAF&apos;s mission of empowering
        individuals and fostering meaningful change.
      </p>
    </div>
  );
};

export default Awards;
