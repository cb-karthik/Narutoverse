function Search() {
  return (
    <div className="mt-10">
  <p className="text-white text-center text-lg sm:text-xl">
    Character Profiles
  </p>
  <div className="flex flex-col sm:flex-row w-full justify-center items-center m-4">
    <input className="outline-none border-0 rounded-lg mr-0 sm:mr-4 mb-4 sm:mb-0 h-10 p-4 w-full sm:w-96 text-center text-lg bg-slate-400 hover:bg-white text-black placeholder-gray-900" type="text" placeholder="Search character" />
  </div>
</div>





    // <div className="mt-10">
    //   <p className="text-white text-center text-lg hover:text-xl ">
    //     Character Profiles
    //   </p>
    //   <div className="flex w-full justify-center items-center m-4 ">
    //     <input className=" outline-none border-0 rounded-lg mr-4 h-10 p-4 w-96 text-center text-lg bg-slate-400 hover:bg-white text-black placeholder-gray-900" type="text" placeholder="Search character" />
    //   </div>
    // </div>
  );
}

export default Search;
