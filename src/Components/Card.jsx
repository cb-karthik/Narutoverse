import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom

/**
 * Card component represents a card displaying information about a character.
 * @param {Object} character - The character object containing information.
 */
function Card({ character }) {
  return (
    <Link
      className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto md:h-96 p-2"
      to={`/character/${character.name}`}
    >
      <div className="p-5">
        <div className="rounded-lg overflow-hidden border-2 border-violet-400 hover:border-double hover:border-green-600 flex flex-col transition duration-300 ease-in-out transform hover:scale-105">
          <img
            className="w-full h-48 object-cover"
            src={character?.images?.[0] || "https://i.imgur.com/IVfLx2t.png"}
            alt="Card Image"
          />

          <div className="px-6 py-4 md:h-28 ">
            <div className="font-bold text-xl mb-2 text-white">
              {character.name}
            </div>
            <p className="text-white text-xs">
              {character.jutsu ? character.jutsu[0] : "-- No data --"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
