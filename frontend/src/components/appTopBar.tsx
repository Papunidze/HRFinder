import { PlusCircle } from "react-feather";
import UserForm from "@/modules/user/form/user-form";
import Search from "@/modules/search/form/search-form";

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
          <div className="md:block hidden">
            <Search />
          </div>
        </div>
        <div className="flex items-center gap-2 relative">
          <div className="md:hidden block ">
            <Search />
          </div>
          <button className="button primary flex items-center justify-between text-white text-center">
            <PlusCircle color="white" />
            <span className="text-white py-2 mb-0.5 hidden md:block">
              დამატება
            </span>
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
