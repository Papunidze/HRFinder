import { useMutation } from "@/lib/rest-query/use-mutation";
import { useAuthContext } from "@/provider/loginProvider";
import { useState } from "react";
import { ArrowDown } from "react-feather";
import { SignOut } from "../user-api";
import Settings from "@/pages/settings";

const UserForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { auth } = useAuthContext();

  const $signOut = useMutation(SignOut);

  return (
    <div className="block w-auto z-50">
      <div
        className="flex items-center relative cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <button className="w-12 h-12 relative ">
          <img src={auth.user?.avatar} alt="" className="rounded-full" />
        </button>
        <div className="absolute bottom-0 bg-secondary-light rounded-full right-0 w-4 h-4 items-center flex">
          <ArrowDown color="black" strokeWidth={1.5} />
        </div>
      </div>
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
          className={`absolute top-full right-0 mt-2 bg-secondary shadow-lg rounded-lg w-full min-w-44 z-10 transform origin-top 0 max-h-60 px-2`}
        >
          <ul className="py-2">
            <li>
              <Settings />
            </li>
            <li className="cursor-pointer">
              <a
                onClick={() =>
                  $signOut
                    .mutateAsync()
                    .then(() => (location.href = "/"))
                    .catch(() => (location.href = "/"))
                }
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
