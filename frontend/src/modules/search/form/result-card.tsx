import { useAuthContext } from "@/provider/loginProvider";
import { useState } from "react";

const ResultCard = () => {
  const { auth } = useAuthContext();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="block w-auto z-50 ">
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
          className={`absolute top-full right-0 -translate-y-3  bg-secondary shadow-lg rounded-lg w-full min-w-44 z-10 transform origin-top mt-4  max-h-60 px-2`}
        >
          <ul className="py-2">
            <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <div className="flex items-center justify-start gap-4 px-4 py-2 text-gray-800 rounded-md hover:bg-gray-200">
                <img
                  src={auth.user?.avatar}
                  alt=""
                  className="w-8 h-8 object-contain"
                />
                <span className="text-base font-semibold font-Poppins  whitespace-nowrap leading-7 overflow-ellipsis overflow-hidden">
                  {auth.user?.email}
                </span>
              </div>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
