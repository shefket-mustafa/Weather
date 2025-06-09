import cloudy from "../../public/Cloudy.png"

type Props = {
  data: any
}

export default function MiddleDetails({data}: Props) {

  const now = new Date();

const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const time = `${hours}:${minutes}`;

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

const weekday = weekdays[now.getDay()];
const month = months[now.getMonth()];
const date = now.getDate();
const year = now.getFullYear().toString().slice(-2);

const fullDate = `${time} - ${weekday}, ${date} ${month} '${year}`;

  
  
    return <div className='flex pt-140 pl-20 items-center'>

    <div className='flex'>
    <p className='text-white text-[160px]'>{data.current?.temp_c?.toFixed(0)}</p>
    <p className='text-white text-[120px] mt-4'>°</p>
    </div>
    <div className='flex flex-col items-center pl-5'>
      <p className='text-[100px] text-white leading-none font-light'>{data.location?.name ?? 'Loading...'}</p>
      <p className='text-white text-[15px]'>{fullDate}</p>
    </div>
    <img className='mt-7 pl-10' src={cloudy} alt="" />
  </div>
}