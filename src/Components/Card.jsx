

function Card({ character }) {
  return (
    <div className=" w-1/3 h-96">
      <div className=" p-5 ">
        <a
          href="https://www.narutodb.xyz/"
          target="-blank"
          className=" rounded-lg overflow-hidden border-2 border-green-500 hover:border-green-700 flex flex-col "
        >
          <img
            className="w-full h-48 object-cover"
            src={
              character.images
                ? character.images[0]
               :"https://i.quotev.com/kik36hpugfra.jpg"
            }
            alt="Card Image"
          />

         
          <div className="px-6 py-4 h-28 ">
            <div className="font-bold text-xl mb-2 text-white">
              {character.name}
            </div>
            <p className="text-white text-xs">
              {character.jutsu ? character.jutsu[0] : " --No data--"}
            </p>
          </div>
        </a>
      </div>
      
    </div>
  );
}

export default Card;
