import { OurCollectionsInfo } from "../../data/OurCollections";

const OurCollections = () => {
  return (
    <div className="py-8 px-4 max-w-[100rem] mx-auto  ">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
        Discover Our Collections
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white">
        {OurCollectionsInfo?.map((items, index) => {
          const { title, image, discount, btn, bgColor } = items;
          return (
            <div
              key={index}
              className={`rounded-md p-6 flex items-center justify-between shadow-xl ${bgColor}`}
            >
              <div className="flex flex-col items-start gap-2">
                <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                <p className="text-sm text-gray-600 mb-4">{discount}</p>
                <button className="bg-blue-800 text-white text-sm font-bold py-3 px-5 rounded-md shadow-sm transition-all duration-300 hover:bg-slate-600 hover:cursor-pointer">
                  {`Shop ${btn}`}
                </button>
              </div>

              <div className="w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 sm:mr-10 ">
                <img
                  src={image}
                  alt={title}
                  className="max-w-full h-full object-contain drop-shadow-md hover:scale-110 hover:cursor-pointer  transition-transform duration-300"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurCollections;
