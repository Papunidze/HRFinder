import cola from "@/images/download.png";
const Groups = () => {
  return (
    <div className="flex flex-col mt-24 gap-4 w-full ">
      <div className=" rounded-2xl mb-2 group bg-secondary ">
        <div className="flex items-center justify-start gap-2 p-4 max-h-32">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <img src={cola} alt="" className="object-contain select-none" />
          </div>
          <div className="flex justify-between w-full px-4">
            <div className="w-full flex flex-col items-start justify-center ">
              <div className="font-medium leading-5 text-base">
                <h1>Title</h1>
              </div>
              <div className="font-normal font-MarkGeo text-left leading-5 text-xs">
                <span>81 ადამიანი</span>
              </div>
            </div>
            <div className="w-14 h-9 m-auto mr-2">
              <button className="button primary ">ნახვა</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
