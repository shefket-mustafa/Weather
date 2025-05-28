type Props ={
    data: any
}

export default function TodaysForecastItems({ data }:Props) {

    // const time = data?.hour?.split(" ");
    console.log();
    

    return <div className="text-white flex justify-between items-center pt-10">
    <img src={data.condition.icon} alt="" />

    <div>
        <p className="pr-40">{data.time.split(" ")[1]}</p>
        <p className="text-gray-300">{data.condition.text}</p>
    </div>

    <p>19°</p>
</div>
}