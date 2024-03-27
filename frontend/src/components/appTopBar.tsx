import { PlusCircle, Search } from "react-feather";
import UserForm from "@/modules/user/form/user-form";

const TopBar = () => {
  return (
    <header className="block  bg-secondary rounded-md fixed w-full left-0 top-0">
      <nav className="container mx-auto flex items-center justify-between py-4 px-2 lg:px-6  ">
        <div className="flex gap-4 items-center justify-center">
          <h1 className="text-2xl lg:text-3xl font-bold text-primary font-dancing relative cursor-pointer flex items-center px-4 py-1.5">
            HrFinder
            <span
              className="absolute w-full left-0 h-full bg-transparent border-[1px] border-blue-200 rounded-full rotate-[5deg]"
              aria-hidden="true"
            ></span>
            <span
              className="absolute w-full left-0 h-full bg-transparent border-[1px]  border-blue-200 rounded-full rotate-[10deg]"
              aria-hidden="true"
            ></span>
          </h1>
          <div className="ml-2 md:ml-0 flex items-center relative">
            <div className="border border-gray-200 flex rounded-md px-1 py-1 lg:py-2 lg:px-2 gap-1 md:gap-2 items-center relative">
              <Search />
              <input
                placeholder="ძებნა"
                className="outline-none font-sans font-semibold flex-grow ml-1 md:ml-2 text-sm md:text-base w-36 lg:w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 relative">
          <button className="button primary flex items-center justify-between text-white text-center">
            <PlusCircle color="white" />
            <span className="text-white py-2 mb-0.5">დამატება</span>
          </button>
          <div className="px-1 md:px-2 border-l border-gray-200 block">
            <UserForm />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
