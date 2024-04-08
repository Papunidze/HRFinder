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

  const groupsQuery = useQuery(`groups`, async () => await getGroup(), {
    retry: true,
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {groupsQuery.isLoading && <p>Loading</p>}
        {groupsQuery.data &&
          groupsQuery.data?.data.groups.map((element, index) => (
            <div
              className="flex flex-col relative items-center justify-center rounded-lg gap-4 shadow-sm p-4 border border-gray-200"
              key={index}
            >
              <div className="p-2 rounded-lg w-full shadow-sm border border-gray-200">
                <img
                  src={element.image}
                  alt={`Group: ${element.name}`}
                  className="w-full h-24 object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-lg font-semibold font-Poppins">
                  {element.name}
                </h2>
                <label className="text-gray-500">წევრი: 0</label>
              </div>
              <div className="w-full">
                <div className="absolute top-2 right-0">
                  <Poppins
                    list={[
                      { label: "პარამეტრები", fn: () => handleEdit(element) },
                      {
                        label: "გამოსვლა",
                        fn: () => handleDelete(element._id),
                      },
                    ]}
                  />
                </div>
                <button className="button primary" style={{ width: "100%" }}>
                  ნახვა
                </button>
              </div>
            </div>
          ))}
        {isEditStates.isOpen && (
          <CreateGroup isEdit={isEditStates} setIsEdit={setIsEditStates} />
        )}
      </div>
    </div>
  );
};

export default Groups;
