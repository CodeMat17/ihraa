import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    img: "/sponsors/1.webp",
  },
  {
    img: "/sponsors/2.webp",
  },
  {
    img: "/sponsors/3.webp",
  },
  {
    img: "/sponsors/4.webp",
  },
  {
    img: "/sponsors/5.webp",
  },
  {
    img: "/sponsors/6.webp",
  },
  {
    img: "/sponsors/7.webp",
  },
  {
    img: "/sponsors/8.webp",
  },
  {
    img: "/sponsors/9.webp",
  },
  {
    img: "/sponsors/10.webp",
  },
  {
    img: "/sponsors/11.webp",
  },
  {
    img: "/sponsors/12.webp",
  },
  {
    img: "/sponsors/13.webp",
  },
  {
    img: "/sponsors/14.webp",
  },
  {
    img: "/sponsors/15.webp",
  },
  {
    img: "/sponsors/16.webp",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
}: {
  img: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-[150px] cursor-pointer overflow-hidden rounded-xl border",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}>
      <div className='relative w-full aspect-video'>
        <Image className='rounded-xl' fill alt='' src={img} />
     
      </div>
    </figure>
  );
};

export default function Sponsors() {
  return (
      <div className='relative flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl'>
          <h1 className="text-3xl text-center font-semibold pb-6 dark:text-gray-400">OUR SPONSORS</h1>
      <Marquee pauseOnHover className='[--duration:40s]'>
        {firstRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:40s]'>
        {secondRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
    </div>
  );
}

