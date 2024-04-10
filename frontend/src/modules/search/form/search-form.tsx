import { useState } from "react";
import { ArrowLeft, Search as SearchIcon } from "react-feather";
import ResultCard from "../components/result-card";
import { useMutation } from "@/lib/rest-query/use-mutation";
import { search } from "../search-api";
import { UserState } from "@/provider/loginProvider";
import { useQuery } from "react-query";
import { getGroup } from "@/modules/groups/groups-api";

export type SearchUser = Pick<UserState, "_id" | "name" | "email" | "avatar">;

const Search = () => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchResult, setSearchResult] = useState<SearchUser[] | null>([]);
  const [searchValue, setSearchValue] = useState("");

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
    setSearchResult(null);
  };

  const $searchQuery = useMutation(search);

  const groupsQuery = useQuery(`groups`, async () => await getGroup(), {
    retry: true,
  });

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
    if (event.currentTarget.value.length > 1) {
      $searchQuery.mutate(
        { member: event.currentTarget.value },
        {
          onSuccess: ({ ...args }) => {
            setSearchResult(args.result);
          },
          onError: (error) => {
            console.log(error.message);
          },
        }
      );
    }
    if (event.currentTarget.value.length < 1) {
      setSearchResult(null);
    }
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
          value={searchValue}
          onChange={handleSearch}
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
              value={searchValue}
              onChange={handleSearch}
            />
            <button>
              <SearchIcon />
            </button>
          </div>
        </div>
        {searchResult?.map((element, index) => (
          <div key={index}>
            <ResultCard
              element={element}
              setSearchResult={setSearchResult}
              isLoading={$searchQuery.isLoading}
              groupsQuery={groupsQuery.data?.data.groups}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
