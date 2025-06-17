import { useEffect, useState } from "react";
import MiddleInfo from "./MiddleInfo";
import TodaysForecast from "./TodaysForecast";
import { useGetWeatherData } from "../api/request";


type Props = {
  image: string,
  handler: (data:any) => void

};

export default function RightContainer({image, handler}:Props) {

  const [cityInput, setCityInput] = useState('Sofia');
  const [city, setCity] = useState<any>({})
  const [searchClicked, setSearchClicked] = useState(false);
  const {getWeatherData} = useGetWeatherData();

  useEffect(() => {
    getWeatherData('Sofia')
    .then(data => {
      setCity(data);
      
    })
  },[]);

  useEffect(() => {
    if(cityInput.trim()){
      getWeatherData(cityInput)
      .then(data => {
        setCity(data);
        handler(data)
      })
    }
  },[searchClicked])
    
    return <div className="w-full lg:w-[400px] lg:pr-12 absolute top-0 right-0 h h-full  backdrop-blur-md overflow-y-auto px-4">

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

    <TodaysForecast data={city}/>

  
  </div>;
  }