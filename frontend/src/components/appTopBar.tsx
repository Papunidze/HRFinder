import UserForm from "@/modules/user/form/user-form";
import Search from "@/modules/search/form/search-form";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <header className="block  bg-secondary rounded-md fixed w-full left-0 top-0 z-[100]">
      <nav className="container mx-auto flex items-center justify-between py-4 px-2 lg:px-6  ">
        <div className="flex gap-4 items-center justify-center">
          <h1
            className="text-2xl lg:text-3xl font-bold text-primary font-dancing relative cursor-pointer flex items-center px-4 py-1.5"
            onClick={() => navigate("/")}
          >
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
          <div className="px-1 md:px-2 border-l border-gray-200 block">
            <UserForm />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
