import { LoaderIcon } from "lucide-react";

const Loading = () => {
  return (
    <div className='w-full py-32 flex flex-col gap-4 justify-center items-center'>
      <LoaderIcon className='w-8 h-8 animate-spin' /> <p>Please wait</p>
    </div>
  );
};

export default Loading;
