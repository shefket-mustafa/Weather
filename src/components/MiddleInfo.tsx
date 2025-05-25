import { useEffect, useState } from "react";
import MiddleInfoItems from "./MiddleInfoItems";
import { useGetWeatherData } from "../api/request";
import { useWeatherDetails } from "../context/weatherDetailsContext/details-context-hook";


export default function MiddleInfo() {

    const {city, setCity, details ,setDetails} = useWeatherDetails();
    const {getWeatherData} = useGetWeatherData();


    useEffect(() => {
        getWeatherData(city)
        .then(data => {
            setDetails(data)
        })
    },[city])

    return <div className="max-w-[354px] pt-10 pl-5 pr-5 text-white">

            <p>THUNDERSTORM WITH LIGHT DRIZZLE</p>

            <MiddleInfoItems title="Temp max" degrees={details?.forecast?.day?.maxtemp_c} imageUrl="/temp-max.png"/>
            <MiddleInfoItems title="Temp min" degrees={details?.forecast?.day?.mintemp_c} imageUrl="/temp-low.png"/>
            <MiddleInfoItems title="Humidity" degrees={details?.forecast?.day?.avghumidity} imageUrl="/humidity.png"/>
            <MiddleInfoItems title="Cloudy" degrees={details?.current?.cloud} imageUrl="/clouds.png"/>
            <MiddleInfoItems title="Wind" degrees={details?.forecast?.day?.maxwind_kph} imageUrl="/winds.png"/>

            <div className="border-b pt-20"></div>
         </div>
}