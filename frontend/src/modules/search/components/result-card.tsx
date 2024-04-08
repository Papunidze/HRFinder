import { Menu } from "@headlessui/react";
import { SearchUser } from "../form/search-form";
import { Plus } from "react-feather";

interface ResultCardProps {
  setSearchResult: React.Dispatch<React.SetStateAction<SearchUser[] | null>>;
  element: SearchUser;
  isLoading: boolean;
}
const ResultCard = ({
  element,
  setSearchResult,
  isLoading,
}: ResultCardProps) => {
  return (
    <div className="block z-50 w-full">
      <div
        className={`block transition-all duration-300 ease-linear  ${
          element ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`fixed inset-0  ${!element ? "hidden" : "block"}`}
          onClick={() => setSearchResult(null)}
        ></div>

        <div
          className={`absolute right-0  w-full min-w-60 z-10 origin-top mt-4  max-h-60 px-2 `}
        >
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <ul className="py-1 fixed md:relative w-full left-1/2 -translate-x-1/2 md:translate-y-2 translate-y-3 max-w-xs bg-secondary shadow-lg rounded-lg px-2 mt-2">
              <li className="cursor-pointer">
                <div className="flex items-center justify-start gap-1 px-2 py-1 text-gray-800 rounded-md hover:bg-gray-200">
                  <img
                    src={element.avatar}
                    alt={element.name}
                    className="w-8 h-8 object-contain rounded-full"
                  />
                  <div className="ml-2">
                    <p className="text-sm font-medium">{element.name}</p>
                    <p className="text-xs text-gray-500">{element.email}</p>
                  </div>
                  <Menu>
                    <Menu.Button className="button secondary absolute right-4">
                      <Plus />
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 w-48 mt-2  top-12 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={`flex items-center justify-start gap-4 px-4 py-2  rounded-md  ${
                                active ? "hover:bg-gray-200" : "text-gray-800"
                              }`}
                            >
                              Account settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={`flex items-center justify-start gap-4 px-4 py-2  rounded-md  ${
                                active ? "hover:bg-gray-200" : "text-gray-800"
                              }`}
                              href="/documentation"
                            >
                              Documentation
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Menu>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
