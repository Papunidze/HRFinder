import Poppins from "@/components/appPoppins";
import { useQuery, useQueryClient } from "react-query"; // Import useQueryClient
import { deleteGroup, getGroup } from "../groups-api";
import { useState } from "react";
import CreateGroup from "@/modules/create-group/form/create-group";

interface Group {
  _id: string;
  name: string;
  image: string;
  admins: string[];
  members: string[];
  createdAt: string;
  __v: number;
}

export interface EditState {
  isOpen: boolean;
  name?: string;
  image?: string;
  id?: string;
}

const Groups = () => {
  const [isEditStates, setIsEditStates] = useState<EditState>({
    isOpen: false,
  });
  const queryClient = useQueryClient();

  const groupsQuery = useQuery(`groups`, () => getGroup(), {
    retry: true,
    onSuccess: ({ ...args }) => {
      console.log(args);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleEdit = (element: Group) => {
    setIsEditStates((prevState) => ({
      ...prevState,
      isOpen: true,
      name: element.name,
      image: element.image,
      id: element._id,
    }));
  };

  const handleDelete = async (groupId: string) => {
    await deleteGroup(groupId);
    queryClient.invalidateQueries("groups");
  };

  return (
    <div className="flex flex-col gap-4 w-full relative">
      {groupsQuery.isLoading && <p>Loading</p>}
      {groupsQuery.data &&
        groupsQuery.data?.data.groups.map((element, index) => (
          <div className="relative" key={index}>
            <div className="rounded-2xl mb-2 group bg-secondary relative">
              <div className="flex items-center justify-start gap-2 p-4 max-h-32">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <img
                    src={element.image}
                    alt=""
                    className="object-contain select-none rounded-full"
                  />
                </div>
                <div className="flex justify-between w-full px-4">
                  <div className="w-full flex flex-col items-start justify-center ">
                    <div className="font-medium leading-5 text-base">
                      <h1>{element.name}</h1>
                    </div>
                    <div className="font-normal font-MarkGeo text-left leading-5 text-xs">
                      <span>{element.members.length} მომხმარებელი</span>
                    </div>
                  </div>
                  <div className="w-14 h-9 m-auto mr-2">
                    <button className="button primary">ნახვა</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0">
              <Poppins
                list={[
                  { label: "პარამეტრები", fn: () => handleEdit(element) },
                  { label: "გამოსვლა", fn: () => handleDelete(element._id) },
                ]}
              />
            </div>
          </div>
        ))}
      {isEditStates.isOpen && (
        <CreateGroup isEdit={isEditStates} setIsEdit={setIsEditStates} />
      )}
    </div>
  );
};

export default Groups;
