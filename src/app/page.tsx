import { Metadata } from 'next';
import Image from "next/image";

import NavbarUI from "./navbar";
import FunActivities from './FunActivities';
import LocationsAndAccommodations from "./LocationsAndAccomodation";
import Footer from "./footer";

import dotbg from "./../Images/dottedbackground.svg"
import CoffeeLogo from "./../Images/coffeeLogo.svg"
import Waves from "./../Images/Waves.svg"
import Timeline from "./../Images/timeline.svg"

import ConferenceSpeaker1 from "./../Images/Pembicara/ConferenceSpeaker1.svg";
import ConferenceSpeaker2 from "./../Images/Pembicara/ConferenceSpeaker2.svg";
import CEO1 from "./../Images/Pembicara/CEOSpeaker1.svg";
import CEO2 from "./../Images/Pembicara/CEOSpeaker2.svg";

import paper from "./../Images/Competition/paper.svg";
import poster from "./../Images/Competition/poster.svg";
import registrationFee from "./../Images/registrationFee.svg";

import DisableZoom from "./DisableZoom";
export const metadata: Metadata = {
  title: 'CoFFEE 2025',
  description:
    'FTP X UCIC',
};
export default function Home() {
  return (
      <div className="overflow-x-hidden bg-gradient-to-b from-[#132D31] to-[#2B4237]">
        <DisableZoom/>
        <NavbarUI />
        
        <div className="relative flex justify-center items-center w-[100vw] h-[80vh] sm:h-[100vh] md:h-[100vh] lg:h-[100vh] xl:h-[100vh]" style={{backgroundImage: `url('${dotbg.src}')`, backgroundSize: 'cover', backgroundRepeat: 'repeat'}}>
          <Image className="absolute z-[-10] w-[50vw] h-[50vh] top-[-20vh] right-[-15vw]" src={Waves} alt="Waves" />
          <Image className="w-[70vw] h-[100vh]" src={CoffeeLogo} width={1000} height={1000} alt="Coffee Logo"/> {}
          <Image className="absolute rotate-180 z-[-10] w-[50vw] h-[50vh] bottom-[-20vh] left-[-15vw]" src={Waves} alt="Waves" />
        </div>
        <div id="About" className="bg-[#082128] pt-10 pb-10 w-[100vw]" style={{backgroundImage: `url('${dotbg.src}')`, backgroundSize: 'cover', backgroundRepeat: 'repeat'}}>
          <h1 className="text-center text-4xl font-semibold text-amber-50 md:text-6xl">ABOUT</h1>
          <div className="ThemeAndScopes w-[100vw] flex justify-center">
            <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#93e2af00] to-[#008761] rounded-2xl">
              <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                <div className="">
                  <h1 className="text-[24px] text-black font-semibold p-2">THEME</h1>
                </div>
              </div>
              <div className="bg-[#93E2AE] rounded-2xl mt-15 mb-5 w-[95%]">
                <p className="text-center max-w-[100%] p-1 text-black sm:text-[20px] md:text-[20px] lg:text-[24px] xl:text-[28px]">The Plate of the Future: Optimization of Green Technology through Entrepreneurship for A Sustainable Food Industry</p>
              </div>
            </div>
          </div>

          <div className="3Bawahnya w-[100vw] flex flex-col gap-[1.5vw] items-center justify-center sm:items-stretch md:flex-row">
            <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#93e2af00] to-[#008761] rounded-2xl md:w-[29vw]">
                <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                  <div className="">
                    <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2 ">BACKGROUND</h1>
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
            <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#93e2af00] to-[#008761] rounded-2xl md:w-[29vw]">
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
              <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#93e2af00] to-[#008761] rounded-2xl md:w-[29vw]">
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
          
          <div className="w-full flex items-center justify-center mt-10">
              <a href="">
                <div className="bg-radial from-[#F4E39C] to-[#FFCC00] rounded-xl text-black text-[24px] font-semibold p-2 sm:text-[32px]">GUIDEBOOK</div>
              </a>
          </div>

          <h1 className="text-center text-4xl font-semibold mt-10 text-amber-50 md:text-6xl">TIMELINE</h1>
          <div className="flex justify-center w-full mt-10">
            <Image id="Timeline" className="w-[100vw] ml-[-2.5vw] h-[60vh] bottom-[-20vh] left-[-15vw] sm:h-[100vh] md:h-[100vh] xl:h-[150vh]" src={Timeline} alt="Timeline" />
          </div>

          <h1 className="text-center text-5xl font-semibold mt-20 text-amber-50 md:text-6xl">CONFERENCE</h1>
          <div id="Conference" className="Conference w-[100vw] flex flex-col items-center justify-center sm:items-stretch md:flex-row gap-[1.5vw]">
            <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#93e2af00] to-[#008761] rounded-2xl md:w-[29vw]">
                  <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                    <div className="">
                      <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">SPEAKER 1</h1>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[95%]">
                    <div className="flex justify-center w-full">
                      <Image className="w-[90%]" src={ConferenceSpeaker1} alt="Speaker1" />
                    </div>
                    <p className="mt-5text-amber-50 mt-5 text-center font-bold max-w-[90%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                    Muliasari Kartikawati, S.TP., M.Sc., Ph.D.
                    </p>
                    <p className="mt-5 text-amber-50 text-center font-bold max-w-[100%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                    Universitas Ciputra Surabaya, Indonesia
                    </p>
                  </div>
            </div>
            <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#93e2af00] to-[#008761] rounded-2xl md:w-[29vw]">
                  <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                    <div className="">
                      <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">SPEAKER 2</h1>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[95%]">
                    <div className="flex justify-center w-full">
                      <Image className="w-[90%]" src={ConferenceSpeaker2} alt="Speaker1" />
                    </div>
                    <p className="mt-5 text-amber-50 text-center font-bold max-w-[70%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                    MuliasaAssoc. Prof. Mito Kokawa, Ph.D.
                    </p>
                    <p className="mt-5 text-amber-50 text-center font-bold max-w-[60%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                    Tsukuba University, Japan
                    </p>
                  </div>
            </div>
          </div>

          <h1 className="text-center text-4xl font-semibold mt-20 md:text-6xl">CEO TALK</h1>
          <div id="CEOTalk" className="Conference w-[100vw] flex flex-col items-center justify-center sm:items-stretch md:flex-row gap-[1.5vw]">
            <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#93e2af00] to-[#008761] rounded-2xl md:w-[29vw]">
                  <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                    <div className="">
                      <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">SPEAKER 1</h1>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[95%]">
                    <div className="flex justify-center w-full">
                      <Image className="w-[90%]" src={CEO1} alt="Speaker1" />
                    </div>
                    <p className="mt-5 text-amber-50 text-center font-bold max-w-[80%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                    A.A. Raka Bagus Vinaya
                    </p>
                    <p className="mt-5 text-amber-50 text-center font-bold max-w-[90%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                    CEO & Owner of Ladang Lima
                    </p>
                  </div>
            </div>
            <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#93e2af00] to-[#008761] rounded-2xl md:w-[29vw]">
                  <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                    <div className="">
                      <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">SPEAKER 2</h1>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[95%]">
                    <div className="flex justify-center w-full">
                      <Image className="w-[90%]" src={CEO2} alt="Speaker1" />
                    </div>
                    <p className="mt-5 text-amber-50 text-center font-bold max-w-[70%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                    Jamie Najmi Misbah
                    </p>
                    <p className="mt-5 text-amber-50 text-center font-bold max-w-[90%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                    CEO of Mazaraat Artisan Cheese
                    </p>
                  </div>
            </div>
          </div>

          <h1 className="text-center text-4xl font-semibold mt-20 text-amber-50 md:text-6xl">COMPETITION</h1>
          <div id="Competition" className="Competition w-[100vw] flex flex-col items-center justify-center sm:items-stretch md:flex-row gap-[1.5vw]">
            <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#5ce88d00] to-[#008761] rounded-2xl md:w-[29vw]">
                  <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                    <div className="">
                      <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">SPEAKER 1</h1>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[95%]">
                    <div className="flex justify-center w-full">
                      <Image className="w-[90%]" src={paper} alt="Speaker1" />
                    </div>
                    <p className="mt-5 text-amber-50 text-center font-bold max-w-[80%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                    Paper Competition
                    </p>
                    <a href="" className="mt-5 text-center font-bold max-w-[70%] text-card-yellow text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                    Read More
                    </a>
                  </div>
            </div>
            <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#5ce88d00] to-[#008761] rounded-2xl md:w-[29vw]">
                  <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                    <div className="">
                      <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">SPEAKER 2</h1>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[95%]">
                    <div className="flex justify-center w-full">
                      <Image className="w-[90%]" src={poster} alt="Speaker1" />
                    </div>
                    <p className="mt-5 text-amber-50 text-center font-bold max-w-[70%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                    Poster Competition
                    </p>
                    <a href="" className="mt-5 text-center font-bold max-w-[70%] text-card-yellow text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                    Read More
                    </a>
                  </div>
            </div>
          </div>
          
          <FunActivities/>

          <LocationsAndAccommodations/>

          <div className="w-full flex items-center justify-center mt-10">
              <a href="">
                <div className="bg-radial from-[#F4E39C] to-[#FFCC00] rounded-xl text-black text-[24px] font-semibold p-2 px-20 sm:text-[32px]">FAQ</div>
              </a>
          </div>

          <h1 className="text-center text-4xl font-semibold mt-20 md:text-6xl">REGISTRATION</h1>
          <div id="Registration Fee" className="mb-20 Conference w-[100vw] flex flex-col items-center justify-center sm:items-stretch md:flex-row gap-[1.5vw]">
            <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#93e2af00] to-[#008761] rounded-2xl md:w-[60vw]">
                  <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                    <div className="">
                      <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">REGISTRATION FEE</h1>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[95%]">
                    <div className="flex justify-center w-full">
                      <Image className="w-[90%]" src={registrationFee} alt="Registration Fee" />
                    </div>
                    <p className="mt-5 text-amber-50 text-center font-bold max-w-[80%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                    Publication fees are not included. Participants who register for a competition are exempt from paying the non presenter (conference) fee.
                    </p>
                  </div>
            </div>
          </div>
      
      <Footer/>

      </div>
    </div>
  );
}
