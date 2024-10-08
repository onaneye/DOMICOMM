
import Link from "next/link";

const Infonav = () => {
  

  return (
    <div className=' bg-black p-2 flex-1 flex justify-center items-center'>
        <div className=" container mx-auto px-2 flex items-center justify-between  md:w-[700px] lg:w-[1015px] gap-4">  
            <p className="text-white text-[12px] w-full text-center">
             Sign up and get 20% off your first order. <Link href="/signup" className="underline underline-offset-[4px]">Sign Up Now</Link>
             </p>  
         <p  className="hidden md:block text-lg text-white text-center cursor-pointer">x</p>
        </div>
    </div>
  );
};

export default Infonav;
