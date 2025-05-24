
export default function RightContainer() {
    return <div className="absolute top-0 right-0 h h-full min-w-[526px] backdrop-blur">

    <div className="flex justify-between mt-10 max-h-[50px] max-w-[371px] ml-5 text-white">
      <input type="text" placeholder='Search Location...'/>
      <img   src={searchImg} alt='Search loading...' />
    </div>

  </div>;
  }