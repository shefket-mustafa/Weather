import MiddleInfo from "./MiddleInfo";
import TodaysForecast from "./TodaysForecast";


type Props = {
  image: string
};

export default function RightContainer({image}:Props) {
    return <div className="absolute top-0 right-0 h h-full min-w-[526px] backdrop-blur overflow-y-auto">

    <div className="flex justify-between pb-1  mt-10 max-h-[400px] max-w-[371px] ml-5 text-white border-b">
      <input className="text-white placeholder:text-gray-300 placeholder:text-shadow-lg" type="text" placeholder='Search Location...'/>
      <img className="h-[20px] pr-3 " src={image} alt='Search loading...' />
    </div>

    <p className="text-lg text-white max-w-[141px] ml-5 pt-10 text-shadow-lg/30">Weather Details</p>

    <MiddleInfo />

    <TodaysForecast />

  
  </div>;
  }