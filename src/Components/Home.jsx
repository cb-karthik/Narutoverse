import Card from "./Card";
import Header from "./Header";
import Search from "./Search";
import { useState, useEffect } from "react";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetchCharacterData();
  }, []);

  const fetchCharacterData = async () => {
    try {
      const response = await fetch(`https://api.narutodb.xyz/character`);
      const data = await response.json();
      setCharacters(data.characters);
    } catch (error) {
      console.log("Error fetching character data:", error);
    }
  };
  console.log(characters);

  const getData = () => {
    let newData = characters.filter((character) => {
      if (character.name === "Zero-Tails") {
        return false;
      } else if (!(character.images && character.images[0])) {
        return false;
      } else if (!(character.jutsu && character.jutsu[0])) {
        return false;
      }
      return true;
    });

    if (searchTerm) {
      newData = newData.filter((character) => {
        return character.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
    return newData;
  };
  console.log(searchTerm);
  const filterdData = getData();
  return (
    <div className="h-full p-4 w-full bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-900 min-h-screen overflow-x-hidden">
      <Header/>

      <div className="flex flex-col md:flex-row items-center flex-wrap justify-center">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="flex flex-wrap justify-center">
          {filterdData.map((character) => (
            <Card character={character} key={character.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
