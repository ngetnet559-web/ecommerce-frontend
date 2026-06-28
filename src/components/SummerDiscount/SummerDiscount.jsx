import { DiscountInfo } from "../../data/SummerDiscount.js";

const SummerDiscount = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 bg-yellow-200">
      <div className=" p-6  bg-slate-100 rounded-2xl shadow-lg">
        <h2 className="text-red-600 font-extrabold">Up to 50% OFF</h2>
        <h2 className="text-3xl font-extrabold ">Summer Sale 🌴</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Hot deals on top brands Limited time only!
        </p>
        <button className="bg-blue-800 hover:bg-slate-700 text-white font-bold px-2 py-2.5 rounded-md mt-20 inline-block transition-colors duration-300 shadow-md cursor-pointer">
          Shop the Sale
        </button>
      </div>
      {DiscountInfo?.map((items) => {
        const { id, title, description, img_Link, price, discount } = items;
        return (
          <div
            key={id}
            className="flex justify-between items-center gap-6 p-6  bg-slate-100 rounded-2xl shadow-lg "
          >
            <div className="flex-1 min-w-0 font-extrabold ">
              <h2 className="text-3xl font-extrabold text-gray-900">{title}</h2>
              <p className="text-gray-600 mt-4 text-lg">{description}</p>
              <h3 className="text-xl font-semibold">{price}</h3>
              <h2 className="bg-red-200 text-red-700 px-4 py-2 rounded-full mt-6 inline-block  ">
                {discount}
              </h2>
            </div>
            <div className="w-36 h-36 flex-shrink-0">
              <img src={img_Link} className="w-full h-full object-contain" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SummerDiscount;
