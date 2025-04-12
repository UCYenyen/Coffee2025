import Image from "next/image";
import ArrowDown from "./../Images/arrowdown.svg"
export default function navbar() {
  return (
      <nav className="bg-navbar p-10 flex justify-between">
        <h1 className="font-bold">FTP LOGO</h1>
        <ul className="flex gap-5">
            <li><a href="" className="font-semibold">ABOUT</a></li>
            <li><a href="" className="font-semibold">TIMELINE</a></li>
            <li><a href="" className="font-semibold flex gap-2">AGENDA <Image src={ArrowDown} width={10} height={10} alt="Coffee Logo"/> {}</a></li>
            <li><a href="" className="font-semibold">REGISTER</a></li>
        </ul>
      </nav>
  );
}
