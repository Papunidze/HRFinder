import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useAuthContext } from "@/provider/loginProvider";
import AdminCard from "../components/moderator-card";
import { getAdminsById, getMembersById } from "../members-api";
import React from "react";
import MembersCard from "../components/members-form";

const MembersFrom = () => {
  const { auth } = useAuthContext();
  const { id } = useParams() as { id: string };

  const { isLoading, data, isError } = useQuery(
    `getAdmins-${id}`,
    async () => await getAdminsById({ id }),
    {
      retry: true,
    }
  );

  const $members = useQuery(
    `getMembers-${id}`,
    async () => await getMembersById({ id }),
    {
      retry: true,
    }
  );
  return (
    <div className="flex flex-col gap-4 w-full relative">
      <div className="flex items-center w-full">
        <div className=" flex-grow bg-gray-400 h-px"></div>
        <p className="mx-4 text-gray-500 text-sm lowercase">მოდერატორები</p>
        <div className=" flex-grow bg-gray-400 h-px"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError || !data ? (
          <div>Error fetching data</div>
        ) : (
          data?.data?.admins.map(
            (admin) =>
              auth.user?._id !== admin._id && (
                <React.Fragment key={admin._id}>
                  <AdminCard admin={admin} />
                </React.Fragment>
              )
          )
        )}
      </div>
      <div className="flex items-center w-full">
        <div className=" flex-grow bg-gray-400 h-px"></div>
        <p className="mx-4 text-gray-500 text-sm lowercase">პერსონალი</p>
        <div className=" flex-grow bg-gray-400 h-px"></div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
        {$members.data?.members.map((element) => (
          <React.Fragment key={element._id}>
            <MembersCard element={element} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MembersFrom;
