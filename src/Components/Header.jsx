import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-gray-900 w-full h-16 p-1 shadow-lg sticky top-0 z-10 flex items-center">
      <Link className="m-2 text-xl sm:text-4xl  text-white" to="/">
        Naruto Verse
        <span className="text-sm sm:text-lg  text-green-300 pl-4 ">
           Unleash the ninja within!
        </span>
      </Link>
    </div>
  );
}

export default Header;
