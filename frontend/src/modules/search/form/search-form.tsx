import { useState } from "react";
import { ArrowLeft, Search as SearchIcon } from "react-feather";

const Search = () => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  return (
    <div className="ml-2 md:ml-0 items-center relative flex">
      <div className="border-0 md:border border-gray-200 flex rounded-lg px-1 py-1 lg:py-2 lg:px-2 gap-1 md:gap-2 items-center relative md:min-w-72 min-w-0 w-full">
        <button>
          <SearchIcon onClick={toggleMobileSearch} />
        </button>
        <input
          placeholder="ძებნა"
          className="outline-none font-sans font-semibold flex-grow ml-1 md:ml-2 text-sm md:text-base w-36 lg:w-full  hidden md:block"
        />

        <div
          className={`w-full fixed bg-white left-0 max-h-16 h-full z-50 flex px-8 transition-all duration-300 ease-linear md:hidden  ${
            isMobileSearchOpen ? "visible opacity-100" : "invisible opacity-0"
          } `}
        >
          <div className="flex w-full items-center h-10 rounded-lg border justify-center m-auto px-2">
            <button className="">
              <ArrowLeft onClick={toggleMobileSearch} />
            </button>
            <input
              placeholder="ძებნა"
              className="outline-none font-sans font-semibold flex-grow ml-1 md:ml-2 text-sm md:text-base w-36 lg:w-full md:block  px-2 "
            />
            <button>
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
