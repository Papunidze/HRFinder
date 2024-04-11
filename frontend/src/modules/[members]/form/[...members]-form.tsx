import { Mail, Map, Phone } from "react-feather";
import { useQuery } from "react-query";
import { getMemberById } from "../[...members].api";
import { useParams } from "react-router-dom";

const MembersForm = () => {
  const { id } = useParams() as { id: string };

  const $members = useQuery(
    `getMembers-${id}`,
    async () => await getMemberById({ id }),
    {
      retry: true,
    }
  );

  return (
    <div className="container mx-auto mt-8 grid grid-cols-1 gap-4">
      <div className="flex items-center justify-start p-4 gap-4">
        <img
          src={$members.data?.member.avatar}
          alt=""
          className="rounded-lg w-16 h-16 object-contain "
        />
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-2 justify-center">
            <h1 className="text-lg font-semibold font-Poppins text-primary">
              {$members.data?.member.name}
            </h1>
            <label className="text-gray-500 mb-1">
              {" "}
              {$members.data?.member.role}
            </label>
            <label className="text-gray-500">
              {$members.data?.member.education}
            </label>
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex gap-2 items-center">
              <Mail className="text-primary" size={16} />
              <h1 className="text-lg font-semibold font-Poppins text-primary">
                {$members.data?.member.email}
              </h1>
            </div>

            <div className="flex gap-2 items-center">
              <Phone className="text-primary" size={16} />
              <label className="text-gray-500 mb-1">
                {$members.data?.member.mobile}
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <Map className="text-primary" size={16} />
              <label className="text-gray-500 mb-1">
                {$members.data?.member.location}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex my-2 p-2">
        <div className="grid grid-cols-2 gap-2">
          <label className="">დაბადების წელი:</label>
          <label className="text-gray-500">
            {$members.data?.member.birthday} წელი
          </label>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <label className="">გამოცდილება: </label>
          <label className="text-gray-500">
            {" "}
            {$members.data?.member.experience} წელი
          </label>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <label className="">ხელმისაწვდომია:</label>
          <label className="text-gray-500">
            {$members.data?.member.availability}
          </label>
        </div>
      </div>
      <div className="border-gray-200 border shadow-sm p-4 w-full">
        <h1 className="text-lg font-semibold font-Poppins text-primary">
          აღწერა
        </h1>
        <span className="text-gray-700 font-medium leading-relaxed">
          {$members.data?.member.about}
        </span>
      </div>
      <div className="flex items-center justify-start gap-2">
        {$members.data?.member.skills.map((element) => (
          <div
            className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-900"
            key={element}
          >
            <span className="font-MarkGeo">{element}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersForm;
