import Image from "next/image";
import NavbarUI from "./navbar";
import dotbg from "./../Images/dottedbackground.svg"
import CoffeeLogo from "./../Images/coffeeLogo.svg"
import Waves from "./../Images/waves.svg"
export default function Home() {
  return (
      <div className="overflow-x-hidden">
        <NavbarUI />
        
        <div className="relative flex justify-center w-[100vw] h-[100vh]" style={{backgroundImage: `url('${dotbg.src}')`, backgroundSize: 'cover', backgroundRepeat: 'repeat'}}>
          <Image className="absolute z-[-10] w-[50vw] h-[50vh] top-[-20vh] right-[-15vw]" src={Waves} alt="Waves" />
          <Image className="" src={CoffeeLogo} width={1000} height={1000} alt="Coffee Logo"/> {}
          <Image className="absolute rotate-180 z-[-10] w-[50vw] h-[50vh] bottom-[-20vh] left-[-15vw]" src={Waves} alt="Waves" />
        </div>
        <div className="bg-[#132D31] pt-10 w-[100vw] h-[100vh]" style={{backgroundImage: `url('${dotbg.src}')`, backgroundSize: 'cover', backgroundRepeat: 'repeat'}}>
          <h1 className="text-center text-6xl font-semibold">ABOUT</h1>
          <div className="ThemeAndScopes w-[100vw] flex justify-center items-center">
            <div className="w-96 h-96 bg-card-green"></div>
          </div>
        </div>
      </div>
  );
}
