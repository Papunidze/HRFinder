import { useState } from "react";

const UserForm = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="block w-auto">
      <button onClick={() => setIsOpen(true)}>User</button>
      <div
        className={`block transition-all duration-300 ease-linear  ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`fixed inset-0 bg-transparent ${
            !isOpen ? "hidden" : "block"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>
        <div
          className={`absolute top-full right-0 mt-2 bg-secondary shadow-lg rounded-lg w-full min-w-36 z-10 transform origin-top 0 ${
            isOpen ? "animate-fadeIn" : "animate-fadeOut"
          } px-2`}
        >
          <ul className="py-2">
            <li>
              <a
                href="/cart"
                className="block px-4 py-2 text-gray-800 rounded-md hover:bg-gray-200"
              >
                პარამეტრები
              </a>
            </li>
            <li>
              <a
                href="/checkout"
                className="block px-4 py-2 text-gray-800 rounded-md hover:bg-gray-200"
              >
                გამოსვლა
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
