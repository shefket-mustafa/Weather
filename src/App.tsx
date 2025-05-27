import Logo from './components/Logo'
import RightContainer from './components/RightContainer'
import cloudy from "../public/cloudy.png"


function App( ) {

  return <div className=" relative min-h-screen bg-cover bg-no-repeat" style={{ backgroundImage: "url('/bg-weather.png')" }}>

<Logo />
{/* right scrollable comp */}

<div className='flex  pt-180 pl-20 items-center'>

  <div className='flex'>
  <p className='text-white text-[160px] '>16</p>
  <p className='text-white text-[120px] mt-4'>°</p>
  </div>
  <div className='flex flex-col items-center pl-5'>
    <p className='text-[70px] text-white leading-none font-light'>London</p>
    <p className='text-white'>06:09 - Monday, 9 Sept '23</p>
  </div>
  <img className='mt-7 pl-10' src={cloudy} alt="" />
</div>

<RightContainer image='/Vector (2).png' />

  </div>
}

export default App
