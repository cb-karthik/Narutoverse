

function CardDetails() {
  return (
    <div className="p-4 w-full bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-900 sm:h-screen overflow-x-hidden">
      Charcter details components
  <div className="flex flex-col sm:flex-row mt-5 h-[calc(100%-5.5rem)]">
    <div className="flex-[0.5] h-full w-full relative overflow-hidden">
      <img
        src="https://i.quotev.com/kik36hpugfra.jpg"
        alt=""
        className="h-fit w-full object-cover rounded-xl sm:rounded-l-xl"
      />
    </div>

    <div className="flex-[0.5] sm:px-6 sm:py-0 py-4 flex flex-col gap-5 sm:overflow-y-scroll overflow-x-hidden text-justify">
      <p className="text-white text-4xl ">Khansu</p>
      <p className="text-gray-400 text-2xl ">Titles: 十尾Jūbi</p>
      <p className="text-gray-400 text-2xl ">Sex: Male</p>
      <p className="text-gray-400 text-2xl">Debut: Naruto Shippūden the Movie</p>
      <p className="text-gray-400 text-2xl">Jutsu: Shadow Arms</p>
      <p className="text-gray-400 text-2xl">NatureType: Fire Release</p>
      <p className="text-gray-400 text-2xl">Species: Leech</p>
      <p className="text-gray-400 text-2xl">UniqueTraits: Detects negative emotions</p>
    </div>
  </div>
</div>
  )
}

export default CardDetails