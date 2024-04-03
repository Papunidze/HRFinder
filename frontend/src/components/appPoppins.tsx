import { useState } from "react";
import { MoreVertical } from "react-feather";

const Poppins = ({ list }: { list: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block w-auto z-50">
      <div
        className="flex items-center relative cursor-pointer translate-x-3 -translate-y-3  hover:bg-secondary-light p-2 rounded-full "
        onClick={() => setIsOpen(true)}
      >
        <MoreVertical />
      </div>
      <div
        className={`block transition-all duration-300 ease-linear  ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`fixed inset-0  ${!isOpen ? "hidden" : "block"}`}
          onClick={() => setIsOpen(false)}
        ></div>
        <div
          className={`absolute top-full right-0 -translate-y-3  bg-secondary shadow-lg rounded-lg w-full min-w-44 z-10 transform origin-top 0 max-h-60 px-2`}
        >
          <ul className="py-2">
            {list.map((element) => (
              <li className="cursor-pointer" key={element}>
                <a className="block px-4 py-2 text-gray-800 rounded-md hover:bg-gray-200">
                  {element}
                </a>
              </li>
            ))}
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Poppins;
