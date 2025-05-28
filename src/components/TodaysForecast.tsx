import TodaysForecastItems from "./TodaysForecastItems";

type Props = {
    data: {
      forecast: {
        hour: HourlyForecast[];
      };
    };
  };

type HourlyForecast = {
    time: string;
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };

export default function TodaysForecast({data}:Props){
    

    return <div className="pt-10 pl-5 max-w-[354px]">
        <p className="text-white">Today's Weather Forecast...</p>
        
        
        <ul>
        {data?.forecast?.hour?.map((day: HourlyForecast) => <li key={day.time}> <TodaysForecastItems data={day}/></li>)}
        </ul>
    </div>
}