'use client'

import Image from "next/image";
import Entertainment1 from "./../Images/LocationsAndAccommodation/entertainment1.svg";
import React, { useState } from "react";
import SelectedOptions from "./SelectedOptions";
import ArrowButton from "./../Images/buttonArrow.svg"
export default function LocationsAndAccommodation() {
    const [selectedOptionEntertainment, setSelectedOptionEntertainment] = useState('Entertainment 1');
    const [selectedOptionEntertainment2, setSelectedOptionEntertainment2] = useState('Entertainment 1');
    
    const optionsEntertainment = [
        {value: 'Entertainment 1', Image: Entertainment1, description: 'a'},
        {value: 'Entertainment 2', Image: Entertainment1, description: "b"},
    ];

    const [selectedOptionFood, setSelectedOptionFood] = useState('FOOD 1');
    const [selectedOptionFood2, setSelectedOptionFood2] = useState('FOOD 1');

    const optionsFood = [
        {value: 'FOOD 1', Image: Entertainment1, description: 'food1'},
        {value: 'FOOD 2', Image: Entertainment1, description: "food2"},
    ];

    const [selectedOptionHotel, setSelectedOptionHotel] = useState('HOTEL 1');
    const [selectedOptionHotel2, setSelectedOptionHotel2] = useState('HOTEL 1');

    const optionsHotel = [
        {value: 'HOTEL 1', Image: Entertainment1, description: 'hotel1'},
        {value: 'HOTEL 2', Image: Entertainment1, description: "hotel2"},
    ];

    return(
        <div>
            <div className="Dekstop hidden xl:block">
                <h1 className="text-center text-4xl font-semibold mt-20 text-amber-50 md:text-6xl">LOCATIONS & ACCOMMODATION</h1>
                <div id="Competition" className="Dekstop w-[100vw] flex flex-col items-center justify-center sm:items-stretch md:flex-row gap-[1.5vw]">
                    <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#5ce88d00] to-[#008761] rounded-2xl md:w-[29vw]">
                        <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                            <div className="">
                            <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">ENTERTAINMENT 1</h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[90%]">
                            <div className="flex flex-row items-center justify-center w-full gap-5">
                            <button><Image className="w-full" src={ArrowButton} alt="ArrowLeft" /></button>
                            <Image className="w-[70%]" src={Entertainment1} alt="Entertainment1" />
                            <button><Image className="w-full rotate-180" src={ArrowButton} alt="ArrowLeft" /></button>
                            </div>
                            <p className="mt-5 text-amber-50 text-center font-bold max-w-[80%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                            Paper Competition
                            </p>
                            <a href="" className="mt-5 text-center font-bold max-w-[70%] text-card-yellow text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                            Read More
                            </a>
                            <br />
                        </div>
                        <div className="Circles absolute flex bottom-[-2.5%] gap-2.5">
                            <div className="rounded-full w-8 h-8 bg-amber-50"></div>
                            <div className="rounded-full w-8 h-8 bg-[#205E58]"></div>
                            <div className="rounded-full w-8 h-8 bg-[#205E58]"></div>
                            <div className="rounded-full w-8 h-8 bg-[#205E58]"></div>
                        </div>
                    </div>
                    <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#5ce88d00] to-[#008761] rounded-2xl md:w-[29vw]">
                        <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                            <div className="">
                            <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">ENTERTAINMENT 2</h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[90%]">
                            <div className="flex flex-row items-center justify-center w-full gap-5">
                            <button><Image className="w-full" src={ArrowButton} alt="ArrowLeft" /></button>
                            <Image className="w-[70%]" src={Entertainment1} alt="Entertainment1" />
                            <button><Image className="w-full rotate-180" src={ArrowButton} alt="ArrowLeft" /></button>
                            </div>
                            <p className="mt-5 text-amber-50 text-center font-bold max-w-[80%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                            Paper Competition
                            </p>
                            <a href="" className="mt-5 text-center font-bold max-w-[70%] text-card-yellow text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                            Read More
                            </a>
                            <br />
                        </div>
                        <div className="Circles absolute flex bottom-[-2.5%] gap-2.5">
                            <div className="rounded-full w-8 h-8 bg-amber-50"></div>
                            <div className="rounded-full w-8 h-8 bg-[#205E58]"></div>
                            <div className="rounded-full w-8 h-8 bg-[#205E58]"></div>
                            <div className="rounded-full w-8 h-8 bg-[#205E58]"></div>
                        </div>
                    </div>
                </div>

                <div id="Food" className="Dekstop w-[100vw] flex flex-col items-center justify-center sm:items-stretch md:flex-row gap-[1.5vw]">
                    <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#5ce88d00] to-[#008761] rounded-2xl md:w-[29vw]">
                        <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                            <div className="">
                            <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">FOOD 1</h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[90%]">
                            <div className="flex flex-row items-center justify-center w-full gap-5">
                            <button><Image className="w-full" src={ArrowButton} alt="ArrowLeft" /></button>
                            <Image className="w-[70%]" src={Entertainment1} alt="Entertainment1" />
                            <button><Image className="w-full rotate-180" src={ArrowButton} alt="ArrowLeft" /></button>
                            </div>
                            <p className="mt-5 text-amber-50 text-center font-bold max-w-[80%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                            Paper Competition
                            </p>
                            <a href="" className="mt-5 text-center font-bold max-w-[70%] text-card-yellow text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                            Read More
                            </a>
                            <br />
                        </div>
                        <div className="Circles absolute flex bottom-[-2.5%] gap-2.5">
                            <div className="rounded-full w-8 h-8 bg-amber-50"></div>
                            <div className="rounded-full w-8 h-8 bg-[#205E58]"></div>
                            <div className="rounded-full w-8 h-8 bg-[#205E58]"></div>
                            <div className="rounded-full w-8 h-8 bg-[#205E58]"></div>
                        </div>
                    </div>
                    <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#5ce88d00] to-[#008761] rounded-2xl md:w-[29vw]">
                        <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                            <div className="">
                            <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">FOOD 2</h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[90%]">
                            <div className="flex flex-row items-center justify-center w-full gap-5">
                            <button><Image className="w-full" src={ArrowButton} alt="ArrowLeft" /></button>
                            <Image className="w-[70%]" src={Entertainment1} alt="Entertainment1" />
                            <button><Image className="w-full rotate-180" src={ArrowButton} alt="ArrowLeft" /></button>
                            </div>
                            <p className="mt-5 text-amber-50 text-center font-bold max-w-[80%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                            Paper Competition
                            </p>
                            <a href="" className="mt-5 text-center font-bold max-w-[70%] text-card-yellow text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                            Read More
                            </a>
                            <br />
                        </div>
                        <div className="Circles absolute flex bottom-[-2.5%] gap-2.5">
                            <div className="rounded-full w-8 h-8 bg-amber-50"></div>
                            <div className="rounded-full w-8 h-8 bg-[#205E58]"></div>
                            <div className="rounded-full w-8 h-8 bg-[#205E58]"></div>
                            <div className="rounded-full w-8 h-8 bg-[#205E58]"></div>
                        </div>
                    </div>
                </div>

                <div id="LocationsAndAccomodations" className="Dekstop w-[100vw] flex flex-col items-center justify-center sm:items-stretch md:flex-row gap-[1.5vw]">
                    <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#5ce88d00] to-[#008761] rounded-2xl md:w-[29vw]">
                        <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                            <div className="">
                            <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">ACCOMODATION 1</h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[90%]">
                            <div className="flex flex-row items-center justify-center w-full gap-5">
                            <button><Image className="w-full" src={ArrowButton} alt="ArrowLeft" /></button>
                            <Image className="w-[70%]" src={Entertainment1} alt="Entertainment1" />
                            <button><Image className="w-full rotate-180" src={ArrowButton} alt="ArrowLeft" /></button>
                            </div>
                            <p className="mt-5 text-amber-50 text-center font-bold max-w-[80%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                            Paper Competition
                            </p>
                            <a href="" className="mt-5 text-center font-bold max-w-[70%] text-card-yellow text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                            Read More
                            </a>
                            <br />
                        </div>
                        <div className="Circles absolute flex bottom-[-2.5%] gap-2.5">
                            <div className="rounded-full w-8 h-8 bg-amber-50"></div>
                            <div className="rounded-full w-8 h-8 bg-[#205E58]"></div>
                            <div className="rounded-full w-8 h-8 bg-[#205E58]"></div>
                            <div className="rounded-full w-8 h-8 bg-[#205E58]"></div>
                        </div>
                    </div>
                    <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#5ce88d00] to-[#008761] rounded-2xl md:w-[29vw]">
                        <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
                            <div className="">
                            <h1 className="text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2">ACCOMODATION 2</h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[90%]">
                            <div className="flex flex-row items-center justify-center w-full gap-5">
                            <button><Image className="w-full" src={ArrowButton} alt="ArrowLeft" /></button>
                            <Image className="w-[70%]" src={Entertainment1} alt="Entertainment1" />
                            <button><Image className="w-full rotate-180" src={ArrowButton} alt="ArrowLeft" /></button>
                            </div>
                            <p className="mt-5 text-amber-50 text-center font-bold max-w-[80%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                            Paper Competition
                            </p>
                            <a href="" className="mt-5 text-center font-bold max-w-[70%] text-card-yellow text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
                            Read More
                            </a>
                            <br />
                        </div>
                        <div className="Circles absolute flex bottom-[-2.5%] gap-2.5">
                            <div className="rounded-full w-8 h-8 bg-amber-50"></div>
                            <div className="rounded-full w-8 h-8 bg-[#205E58]"></div>
                            <div className="rounded-full w-8 h-8 bg-[#205E58]"></div>
                            <div className="rounded-full w-8 h-8 bg-[#205E58]"></div>
                        </div>
                    </div>
                </div>

          </div>

          <div className="Mobile block xl:hidden">
            <h1 className="text-center text-4xl font-semibold mt-20 text-amber-50 md:text-6xl">LOCATIONS & ACCOMMODATIONS</h1>
                <div id="FunActivities" className="FunActivities w-[100vw] flex flex-col items-center justify-center sm:items-stretch md:flex-row">
                <SelectedOptions selectedOption={selectedOptionEntertainment} setSelectedOption={setSelectedOptionEntertainment} options={optionsEntertainment} />
                <SelectedOptions selectedOption={selectedOptionEntertainment2} setSelectedOption={setSelectedOptionEntertainment2} options={optionsEntertainment} />

                <SelectedOptions selectedOption={selectedOptionFood} setSelectedOption={setSelectedOptionFood} options={optionsFood} />
                <SelectedOptions selectedOption={selectedOptionFood2} setSelectedOption={setSelectedOptionFood2} options={optionsFood} />

                <SelectedOptions selectedOption={selectedOptionHotel} setSelectedOption={setSelectedOptionHotel} options={optionsHotel} />
                <SelectedOptions selectedOption={selectedOptionHotel2} setSelectedOption={setSelectedOptionHotel2} options={optionsHotel} />
                </div>
            </div>
        </div>
    );
}