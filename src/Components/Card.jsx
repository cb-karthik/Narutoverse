function Card({ character }) {
  return (

    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto md:h-96 p-2">
  <div className="p-5">
 
  <a
  href="https://www.narutodb.xyz/"
  rel="noreferrer"
  target="_blank"
  className="rounded-lg overflow-hidden border-2 border-violet-600 hover:border-double hover:border-green-600 flex flex-col transition duration-300 ease-in-out transform hover:scale-105"
>


    
      <img
        className="w-full h-48 object-cover"
        src={character?.images?.[0] || "https://i.imgur.com/IVfLx2t.png"}
        alt="Card Image"
      />

      <div className="px-6 py-4 md:h-28">
        <div className="font-bold text-xl mb-2 text-white">
          {character.name}
        </div>
        <p className="text-white text-xs">
          {character.jutsu ? character.jutsu[0] : "-- No data --"}
        </p>
      </div>
    </a>
  </div>
</div>





    // <div className=" w-1/3 h-96">
      
    //   <div className=" p-5 ">
    //     <a
    //       href="https://www.narutodb.xyz/"
    //       target="-blank"
    //       className=" rounded-lg overflow-hidden border-2 border-green-500 hover:border-green-700 flex flex-col "
    //     >
    //       <img
    //         className="w-full h-48 object-cover"
    //         src={
    //           character.images
    //             ? character.images[0]
    //             : "https://i.quotev.com/kik36hpugfra.jpg"
    //         }
    //         alt="Card Image"
    //       />

    //       <div className="px-6 py-4 h-28 ">
    //         <div className="font-bold text-xl mb-2 text-white">
    //           {character.name}
    //         </div>
    //         <p className="text-white text-xs">
    //           {character.jutsu ? character.jutsu[0] : " --No data--"}
    //         </p>
    //       </div>
    //     </a>
    //   </div>
    // </div>
  );
}

export default Card;
