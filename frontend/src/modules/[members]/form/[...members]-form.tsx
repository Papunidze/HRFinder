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
              გიგა პაპუნიძე
            </h1>
            <label className="text-gray-500 mb-1">ფრონტ-ენდ დეველოპერი</label>
            <label className="text-gray-500">
              შოთა რუსთაველის სახელმწიფო უნივერსიტეტი
            </label>
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex gap-2 items-center">
              <Mail className="text-primary" size={16} />
              <h1 className="text-lg font-semibold font-Poppins text-primary">
                papunidze07@gmail.com
              </h1>
            </div>

            <div className="flex gap-2 items-center">
              <Phone className="text-primary" size={16} />
              <label className="text-gray-500 mb-1">558346767</label>
            </div>
            <div className="flex gap-2 items-center">
              <Map className="text-primary" size={16} />
              <label className="text-gray-500 mb-1">ბათუმი</label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex my-2 p-2">
        <div className="grid grid-cols-2 gap-2">
          <label className="">დაბადების წელი:</label>
          <label className="text-gray-500"> 2002 წელი</label>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <label className="">გამოცდილება: </label>
          <label className="text-gray-500"> 3 წელი</label>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <label className="">ხელმისაწვდომია:</label>
          <label className="text-gray-500"> დისწანციურად</label>
        </div>
      </div>
      <div className="border-gray-200 border shadow-sm p-4 w-full">
        <h1 className="text-lg font-semibold font-Poppins text-primary">
          აღწერა
        </h1>
        <span className="text-gray-700 font-medium leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
      </div>
      <div className="flex items-center justify-start gap-2">
        <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-900">
          <span className="font-MarkGeo">პროგრამირება</span>
        </div>
        <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-900">
          <span className="font-MarkGeo">სეო</span>
        </div>
        <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-900">
          <span className="font-MarkGeo">ვებ განვითარება</span>
        </div>
      </div>
    </div>
  );
};

export default MembersForm;
