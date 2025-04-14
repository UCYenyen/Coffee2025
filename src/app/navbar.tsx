import Image from "next/image";
import ArrowDown from "./../Images/arrowDown.svg"
import UClogo from "./../Images/uclogo.svg"
import FTPlogo from "./../Images/ftplogo.svg"
export default function navbar() {
  return (
      <nav className="bg-[#082128] p-10 flex justify-between items-center">
        <div className="flex gap-5">
          <Image src={UClogo} width={50} height={50} alt="UC Logo" />
          <Image src={FTPlogo} width={50} height={50} alt="FTP Logo" />
        </div>
        
        <div className="flex flex-col gap-1.5 sm:hidden md:hidden lg:hidden xl:hidden">
          <div className="bg-slate-50 w-10 h-2"></div>
          <div className="bg-slate-50 w-10 h-2"></div>
          <div className="bg-slate-50 w-10 h-2"></div>
        </div>
        <ul className="gap-5 hidden sm:flex md:flex lg:flex xl:flex">
            <li><a href="#About" className="font-semibold text-xl">ABOUT</a></li>
            <li><a href="#Timeline" className="font-semibold text-xl">TIMELINE</a></li>
            <li><a href="" className="relative font-semibold flex gap-2 text-xl">AGENDA <Image src={ArrowDown} width={10} height={10} alt="Coffee Logo"/> {} 
                <div className="absolute top-[300%] w-[12.5rem] bg-[#082128] border-solid border-t-8 border-t-[#FFCC00] h-[10rem]">
                  <ul className="flex flex-col gap-5 ml-2 justify-center h-full">
                    <li><a href="">CONFERENCE</a></li>
                    <li><a href="">COMPETITION</a></li>
                    <li><a href="">FUN ACTIVITIES</a></li>
                  </ul>
                </div>
                </a>
              </li>
            <li><a href="" className="font-semibold text-xl">REGISTER</a></li>
        </ul>
      </nav>
  );
}
