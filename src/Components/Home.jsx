import Card from "./Card"; // Importing the Card component
import Header from "./Header"; // Importing the Header component
import Search from "./Search"; // Importing the Search component
import { useState, useEffect } from "react"; // Importing useState and useEffect hooks from React

function Home() {
  const [characters, setCharacters] = useState([]); // Initializing 'characters' state variable as an empty array
  const [searchTerm, setSearchTerm] = useState(""); // Initializing 'searchTerm' state variable as an empty string
  const [count, setCount] = useState(1); // Initializing 'count' state variable as 1

  useEffect(() => {
    fetchCharacterData();
  }, [count]);

  // useEffect hook is used to perform side effects (like fetching data) in a React functional component.
  // It runs after the component has rendered, and it specifies a function to run when the dependency array (second argument) changes.
  // In this case, the effect will be triggered whenever 'count' changes.

  const fetchCharacterData = async () => {
    try {
      // Fetching character data from the API
      const response = await fetch(
        `https://api.narutodb.xyz/character?page=${count}&limit=20`
      );

      const data = await response.json(); // Parsing the response data
      setCharacters(data.characters); // Updating the 'characters' state variable with the fetched data
    } catch (error) {
      console.log("Error fetching character data:", error);
    }
  };

  console.log(characters); // Logging the 'characters' state variable to the console

  const getData = () => {
    // Filtering the 'characters' array based on certain conditions
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
      // Filtering the 'newData' array based on the 'searchTerm'
      newData = newData.filter((character) => {
        return character.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
    return newData; // Returning the filtered data
  };

  console.log(searchTerm); // Logging the 'searchTerm' state variable to the console
  const filteredData = getData(); // Getting the filtered data based on 'searchTerm' and other conditions

  const handleNextPage = () => {
    setCount(count + 1); // Incrementing 'count' by 1
    scrollUp();
  };

  const handlePreviousPage = () => {
    if (count > 1) {
      setCount(count - 1); // Decrementing 'count' by 1
      scrollUp();
    }
  };

  const scrollUp = () => {
    // Scrolling to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="h-full p-4 w-full bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-900 min-h-screen overflow-x-hidden">
      <Header /> {/* Rendering the Header component */}
      <div className="flex flex-col md:flex-row items-center flex-wrap justify-center">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />{" "}
        {/* Rendering the Search component */}
        <div className="flex flex-wrap justify-center">
          {filteredData.map((character) => (
            <Card character={character} key={character.id} /> // Rendering the Card component for each character in the filteredData array
          ))}
        </div>
        {count > 1 && (
          <button
            onClick={handlePreviousPage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-110 "
          >
            Prev.
          </button>
        )}
        <button
          onClick={handleNextPage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg ml-auto transition duration-300 ease-in-out transform hover:scale-110"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
