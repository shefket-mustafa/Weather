import MiddleInfoItems from "./MiddleInfoItems";

type City = {
    current?: {
        cloud?: number;
    };
    forecast?: {
        day?: {
            maxtemp_c: number;
            mintemp_c?: number;
            avghumidity?: number;
            maxwind_kph?: number;
        }
    }
}



type MiddleInfoProps = {
    city: City
};


export default function MiddleInfo({city}: MiddleInfoProps) {

  


    return <div className="max-w-[354px] pt-10 pl-5 pr-5 text-white">

            <p>THUNDERSTORM WITH LIGHT DRIZZLE</p>

            <MiddleInfoItems title="Temp max" degrees={city?.forecast?.day?.maxtemp_c ?? "--"} imageUrl="/temp-max.png"/>
            <MiddleInfoItems title="Temp min" degrees={city?.forecast?.day?.mintemp_c ?? "--"} imageUrl="/temp-low.png"/>
            <MiddleInfoItems title="Humidity" degrees={city?.forecast?.day?.avghumidity ?? "--"} imageUrl="/humidity.png"/>
            <MiddleInfoItems title="Cloudy" degrees={city?.current?.cloud ?? "--"} imageUrl="/clouds.png"/>
            <MiddleInfoItems title="Wind" degrees={city?.forecast?.day?.maxwind_kph ?? "--"} imageUrl="/winds.png"/>

            <div className="border-b pt-20"></div>
         </div>
}