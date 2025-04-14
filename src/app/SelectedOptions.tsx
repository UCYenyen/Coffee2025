import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface SelectedOptionsProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  options: Array<{
    value: string;
    Image: any;
    description: string;
  }>;
}
export type { SelectedOptionsProps };
const SelectedOptions : React.FC<SelectedOptionsProps> = ({ selectedOption, setSelectedOption, options }) => 
{
  return (
    <div className="mt-10 relative flex justify-center w-[90vw] bg-gradient-to-b from-[#5ce88d00] to-[#008761] rounded-2xl md:w-[60vw]">
      <div className="absolute top-[-10px] bg-gradient-to-b from-[#93E2AE] to-[#46BF6F] rounded-2xl">
        <div className="">
          <select className="text-center text-[24px] pl-[3vw] pr-[3vw] sm:text-[24px] text-black font-semibold p-2 focus:outline-0" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            {options.map((option) => (
              <option key={option.value} value={option.value} className="bg-[#93E2AE]">
                {option.value}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#93e2af00] rounded-2xl mt-20 mb-5 w-[95%]">
        <div className="flex justify-center w-full">
          <Image className="w-[100%] border-solid border-4 border-[#93E2AE]" src={options.find((opt) => opt.value === selectedOption)?.Image} alt="Options" />
        </div>
        <p className="mt-5 text-amber-50 text-center font-bold max-w-[90%] text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
          {options.find((opt) => opt.value === selectedOption)?.description}
        </p>
        <a href="" className="mt-5 text-center font-bold max-w-[70%] text-card-yellow text-[20px] pl-2 pr-2 sm:text-[5px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
        Read More
        </a>
      </div>
  </div>
  );
}

export default SelectedOptions;