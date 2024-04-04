import Poppins from "@/components/appPoppins";

const MembersCard = () => {
  return (
    <div className="container flex justify-center items-center gap-10 p-2">
      <div className="max-w-xs  bg-secondary shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out relative">
        <div className="w-12 h-12 absolute right-2 top-2  flex items-center">
          <Poppins list={["ამოშლა", "ჩასწორება"]} />
        </div>
        <div className=" z-10 m-auto p-4">
          <img
            src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"
            alt="Placeholder"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="content relative px-4 py-2 text-center transition duration-300 ease-in-out  opacity-100 visible">
          <h3 className="text-lg font-semibold mb-2">This is content</h3>
          <p className="text-sm text-gray-700">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
