import Card from "./Components/Card";

import Search from "./Components/Search";
import { useState, useEffect } from "react";


function App() {
  
  
  // const [characters, setCharacters] = useState([]);

  // useEffect(() => {
  //   fetch('../data.json')
  //     .then(response => response.json())
  //     .then(characters => {
  //       setCharacters(characters);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);


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
    <div className="h-full p-4 w-full bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-900 min-h-screen overflow-x-hidden ">
      <div className="bg-gray-900  w-full h-16 p-1 shadow-lg sticky top-0 z-10">
        <a className="m-2 text-3xl  text-white" href="/">
          Naruto Verse
        </a>

        <span className="text-l text-green-300">Unleash the ninja within!</span>
      </div>

      <Search />
      <div className="flex items-center flex-wrap justify-center ">
        
        
        {characters.map((character) => (
          <Card character={character} key={character.id} />
        ))}

        {/* {characters.map(character => (
        <Card key={character.id}>{character.name}</Card>
      ))} */}

      </div>
      {/* <CardDetails/> */}
    </div>
  );
}

export default App;
