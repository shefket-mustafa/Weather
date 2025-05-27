import { useEffect, useState } from "react";
import MiddleInfo from "./MiddleInfo";
import TodaysForecast from "./TodaysForecast";
import { useGetWeatherData } from "../api/request";


type Props = {
  image: string
};

export default function RightContainer({image}:Props) {

  const [cityInput, setCityInput] = useState('Sofia');
  const [city, setCity] = useState<any>({})
  const [searchClicked, setSearchClicked] = useState(false);
  const {getWeatherData} = useGetWeatherData();

  useEffect(() => {
    getWeatherData('Sofia')
    .then(setCity)
  },[]);

  useEffect(() => {
    if(cityInput.trim()){
      getWeatherData(cityInput)
      .then(setCity)
    }
  },[searchClicked])
    
    return <div className="absolute top-0 right-0 h h-full min-w-[526px] backdrop-blur overflow-y-auto">

    <div className="flex justify-between pb-1  mt-10 max-h-[400px] max-w-[371px] ml-5 text-white border-b">

      <input 
      onChange={(e) => setCityInput(e.target.value)} 
      value={cityInput} 
      className="text-white placeholder:text-gray-300 placeholder:text-shadow-lg focus:outline-none" 
      type="text"
      placeholder='Search Location...'
       
       />
      <img onClick={() => setSearchClicked(prev => !prev)} className="h-[20px] pr-3 cursor-pointer" src={image} alt='Search loading...' />
    </div>

    <p className="text-lg text-white max-w-[141px] ml-5 pt-10 text-shadow-lg/30">Weather Details</p>

    <MiddleInfo city={city} />

    <TodaysForecast />

  
  </div>;
  }