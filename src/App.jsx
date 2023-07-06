import Card from "./Components/Card";
import CardDetails from "./Components/CardDetails";

import Search from "./Components/Search";
import { useState, useEffect } from "react";


function App() {
  
  
   const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacterData();
  }, []);

  const fetchCharacterData = async () => {
    try {
      const response = await fetch("https://api.narutodb.xyz/character");
      const data = await response.json();
      setCharacters(data.characters);
    } catch (error) {
      console.log("Error fetching character data:", error);
    }
  };
  console.log(characters);



  return (

    <div className="h-full p-4 w-full bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-900 min-h-screen overflow-x-hidden">
    <div className="bg-gray-900 w-full h-16 p-1 shadow-lg sticky top-0 z-10 flex items-center">
    <a className="m-2 text-3xl sm:text-2xl text-white" href="/">
  Naruto Verse
</a>
<span className="text-sm sm:text-xs text-green-300 ">Unleash the ninja within!</span>

    </div>
  
    <div className="flex flex-col md:flex-row items-center flex-wrap justify-center">
      <Search />
      <div className="flex flex-wrap justify-center">
        {characters.map((character) => (
          <Card character={character} key={character.id} />
        ))}
      </div>
    </div>
    <CardDetails/>
  </div>
  








    // <div className="h-full p-4 w-full bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-900 min-h-screen overflow-x-hidden ">
    //   <div className="bg-gray-900  w-full h-16 p-1 shadow-lg sticky top-0 z-10">
    //     <a className="m-2 text-3xl  text-white" href="/">
    //       Naruto Verse
    //     </a>

    //     <span className="text-l text-green-300">Unleash the ninja within!</span>
    //   </div>

    //   <Search />
    //   <div className="flex items-center flex-wrap justify-center ">
        
        
    //     {characters.map((character) => (
    //       <Card character={character} key={character.id} />
    //     ))}

    //          </div>
    //   {/* <CardDetails/> */}
    // </div>
  );
}

export default App;
