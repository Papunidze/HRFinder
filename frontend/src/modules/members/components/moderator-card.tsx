import Poppins from "@/components/appPoppins";

const AdminCard = ({
  admin,
}: {
  admin: { _id: string; avatar: string; name: string; email: string };
}) => {
  return (
    <div
      key={admin._id}
      className="relative flex items-center justify-start w-full border border-gray-200 shadow-inner rounded-lg p-4 gap-4"
    >
      <img
        src={admin.avatar || "placeholder.jpg"}
        alt={admin.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-base font-semibold font-Poppins">{admin.name}</h2>
        <label className="text-gray-500">{admin.email}</label>
      </div>
      <div className="absolute right-2 top-2">
        <Poppins list={[{ label: "წაშლა" }]} />
      </div>
    </div>
  );
};

export default AdminCard;
