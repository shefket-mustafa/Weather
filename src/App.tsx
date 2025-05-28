import Logo from './components/Logo'
import RightContainer from './components/RightContainer'
import MiddleDetails from './components/MiddleDetails'
import { useState } from 'react'


function App( ) {

  const [middleDataCityInput, setMiddleDataCityInput] = useState<any>({});

  const middleDataHandler = (data:any) => {
    setMiddleDataCityInput(data);
  };

  return <div className=" relative min-h-screen bg-cover bg-no-repeat" style={{ backgroundImage: "url('/bg-weather.png')" }}>

<Logo />
{/* right scrollable comp */}
<div className='flex flex-col lg:flex-row'>
<MiddleDetails data={middleDataCityInput}/>

<RightContainer handler={middleDataHandler} image='/Vector (2).png' />
</div>
  </div>
}

export default App
