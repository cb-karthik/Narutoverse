import { useEffect, useState } from "react"; // Importing the useEffect and useState hooks from the React library
import { useParams } from "react-router-dom"; // Importing the useParams hook from the react-router-dom library
import Header from "./Header"; // Importing the Header component

function CardDetails() {
  const params = useParams(); // Getting the URL parameters using the useParams hook
  const [characterData, setCharacterData] = useState([]); // Initializing a state variable to store the character data

  useEffect(() => {
    fetchCharacterData();
  }, []);

  const fetchCharacterData = async () => {
    try {
      const response = await fetch(
        `https://api.narutodb.xyz/character/search?name=${params.characterName}`
      ); // Sending a request to fetch character data based on the character name parameter from the URL
      const data = await response.json();
      setCharacterData(data); // Updating the character data state with the fetched data
    } catch (error) {
      console.log("Error fetching character data:", error);
    }
  };

  console.log(characterData);

  return (
    <div className="p-4 w-full bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-900 sm:h-screen overflow-x-hidden">
      
      <Header />
      <div className="flex flex-col sm:flex-row mt-5 h-[calc(100%-5.5rem)]">
        <div className="flex-[0.5] h-full w-full relative overflow-hidden">
          <img
            src={characterData.images}
            alt=""
            className="h-full w-full object-cover rounded-xl sm:rounded-l-xl"
          />
        </div>

        <div className="flex-[0.5] sm:px-6 sm:py-0 py-4 flex flex-col gap-5 sm:overflow-y-scroll overflow-x-hidden ">
          <p className="text-white text-4xl sticky">
            {characterData?.name?.toUpperCase()}
          </p>
          <li className="text-white text-xl list-none ">
            Jutsu:{" "}
            <span className="text-gray-400">
              {characterData?.jutsu || "Unknown"}
            </span>{" "}
          </li>
          <li className="text-white text-xl list-none ">
            Nature Type:{" "}
            <span className="text-gray-400 ">
              {characterData?.natureType || "Unknown"}
            </span>{" "}
          </li>
          <li className="text-white text-xl list-none ">
            Unique Traits:{" "}
            <span className="text-gray-400">
              {characterData?.uniqueTraits || "Unknown"}
            </span>{" "}
          </li>
          <li className="text-white text-xl list-none ">
            Debut:{" "}
            <span className="text-gray-400">
              {characterData?.debut?.manga || "Unknown"}
            </span>{" "}
          </li>
          <li className="text-white text-xl list-none ">
            Titles:{" "}
            <span className="text-gray-400">
              {characterData?.personal?.titles || "Unknown"}
            </span>{" "}
          </li>
          <li className="text-white text-xl list-none ">
            Clan:{" "}
            <span className="text-gray-400">
              {characterData?.personal?.clan || "Unknown"}
            </span>{" "}
          </li>
          <li className="text-white text-xl list-none ">
            Sex:{" "}
            <span className="text-gray-400">
              {characterData?.personal?.sex || "Unknown"}
            </span>{" "}
          </li>
          <li className="text-white text-xl list-none ">
            Voice Actor:{" "}
            <span className="text-gray-400">
              {characterData?.voiceActors?.english || "Unknown"}
            </span>{" "}
          </li>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
