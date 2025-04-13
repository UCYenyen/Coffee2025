import Image from "next/image";
import ArrowDown from "./../Images/arrowDown.svg"
import UClogo from "./../Images/uclogo.svg"
import FTPlogo from "./../Images/ftplogo.svg"
export default function navbar() {
  return (
      <nav className="bg-navbar p-10 flex justify-between items-center">
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
            <li><a href="" className="font-semibold text-xl">ABOUT</a></li>
            <li><a href="" className="font-semibold text-xl">TIMELINE</a></li>
            <li><a href="" className="font-semibold flex gap-2 text-xl">AGENDA <Image src={ArrowDown} width={10} height={10} alt="Coffee Logo"/> {}</a></li>
            <li><a href="" className="font-semibold text-xl">REGISTER</a></li>
        </ul>
      </nav>
  );
}
