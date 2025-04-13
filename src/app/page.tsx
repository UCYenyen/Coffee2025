import Image from "next/image";
import NavbarUI from "./navbar";
import dotbg from "./../Images/dottedbackground.svg"
import CoffeeLogo from "./../Images/coffeeLogo.svg"
import Waves from "./../Images/waves.svg"
export default function Home() {
  return (
      <div className="overflow-x-hidden">
        <NavbarUI />
        
        <div className="relative flex justify-center items-center w-[100vw] h-[50vh] sm:h-[100vh] md:h-[100vh] lg:h-[100vh] xl:h-[100vh]" style={{backgroundImage: `url('${dotbg.src}')`, backgroundSize: 'cover', backgroundRepeat: 'repeat'}}>
          <Image className="absolute z-[-10] w-[50vw] h-[50vh] top-[-20vh] right-[-15vw]" src={Waves} alt="Waves" />
          <Image className="w-[70vw] h-[100vh]" src={CoffeeLogo} width={1000} height={1000} alt="Coffee Logo"/> {}
          <Image className="absolute rotate-180 z-[-10] w-[50vw] h-[50vh] bottom-[-20vh] left-[-15vw]" src={Waves} alt="Waves" />
        </div>
        <div className="bg-[#132D31] pt-10 pb-10 w-[100vw]" style={{backgroundImage: `url('${dotbg.src}')`, backgroundSize: 'cover', backgroundRepeat: 'repeat'}}>
          <h1 className="text-center text-6xl font-semibold">ABOUT</h1>
          <div className="ThemeAndScopes w-[100vw] flex justify-center">
            <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#93e2af00] to-[#46BF6F] rounded-2xl">
              <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                <div className="">
                  <h1 className="text-[24px] text-black font-semibold p-2">THEME</h1>
                </div>
              </div>
              <div className="bg-[#93E2AE] rounded-2xl mt-15 mb-5 w-[95%]">
                <p className="text-center max-w-[100%] text-black sm:text-[20px] md:text-[20px] lg:text-[24px] xl:text-[28px]">The Plate of the Future: Optimization of Green Technology through Entrepreneurship for A Sustainable Food Industry</p>
              </div>
            </div>
          </div>

          <div className="3Bawahnya w-[100vw] h-auto flex flex-col justify-center items-center gap-[1.5vw] md:flex-row">
          <div className="mt-10 relative flex justify-center h-[100%] w-[90vw] bg-gradient-to-b from-[#93e2af00] to-[#46BF6F] rounded-2xl md:w-[29vw] sm:h-[40.5rem] md:h-[50.5rem] lg:h-[47.5rem] xl:h-[40.5rem]">
              <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                <div className="">
                  <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">BACKGROUND</h1>
                </div>
              </div>
              <div className="bg-[#93E2AE] rounded-2xl mt-20 mb-5 w-[95%]">
                <br />
                <p className="text-justify max-w-[100%] pl-2 pr-2 text-black sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                Conference on Future Food, Entrepreneurship and Estate (CoFFEE) 2025, is an international conference organized by the Student Union of Food Technology Program in Universitas Ciputra Surabaya. This event aims to enhance the stability, efficiency, and sustainability of the food industry through innovative solutions, by integrating green technology and alternative food sources.
                </p>
                <br />
              </div>
            </div>
            <div className="mt-10 relative flex justify-center h-[100%] w-[90vw] bg-gradient-to-b from-[#93e2af00] to-[#46BF6F] rounded-2xl md:w-[29vw] sm:h-[40.5rem] md:h-[50.5rem] lg:h-[47.5rem] xl:h-[40.5rem]">
              <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                <div className="">
                  <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">SCOPES</h1>
                </div>
              </div>
              <div className="bg-[#93E2AE] rounded-2xl mt-20 mb-5 w-[95%]">
                <br />
                <ul className=" text-left max-w-[85%] ml-10 text-black sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                  <li className="list-disc">Functional Food</li>
                  <li className="list-disc">Food Nutrition</li>
                  <li className="list-disc">Food Business and Entrepreneurship</li>
                  <li className="list-disc">Food Processing, Cultivation, Post Harvest, & Supply Chain</li>
                  <li className="list-disc">Food Engineering</li>
                  <li className="list-disc">Food Biotechnology</li>
                  <li className="list-disc">Food Microbiology</li>
                  <li className="list-disc">Food Safety & Security</li>
                  <li className="list-disc">Food Chemistry and Biochemistry Analysis</li>
                </ul>
                <br />
              </div>
            </div>
            <div className="mt-10 relative flex justify-center h-[100%] w-[90vw] bg-gradient-to-b from-[#93e2af00] to-[#46BF6F] rounded-2xl md:w-[29vw] sm:h-[40.5rem] md:h-[50.5rem] lg:h-[47.5rem] xl:h-[40.5rem]">
              <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                <div className="">
                  <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">BENEFITS</h1>
                </div>
              </div>
              <div className="bg-[#93E2AE] rounded-2xl mt-20 mb-5 w-[95%]">
                <br />
                <p className="font-semibold text-left ml-10 max-w-[100%] text-black sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                  For everyone
                </p>
                <ul className=" text-left max-w-[85%] mb-20 ml-10 text-black sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                  <li className="list-disc">Gain insights from industry experts</li>
                  <li className="list-disc">Networking with students</li>
                  <li className="list-disc">Networking with  worldwide professionals </li>
                </ul>
                <p className="font-semibold text-left mt-5 ml-10 max-w-[100%] text-black sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                  For highschool students
                </p>
                <ul className=" text-left max-w-[85%] ml-10 text-black sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                  <li className="list-disc">Earn a scholarship of up to 100% tuition fee coverage + cash</li>
                </ul>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
