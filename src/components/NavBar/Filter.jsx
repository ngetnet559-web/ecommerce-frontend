import { IoClose } from "react-icons/io5";

const Filter = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 sm:w-72 bg-white border-r shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b">
        <h2 className="text-lg font-semibold">Filters</h2>

        <button
          onClick={() => setIsOpen(false)}
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <IoClose className="text-2xl" />
        </button>
      </div>

      {/* Filter List */}
      <div className="flex flex-col gap-3 p-5 overflow-y-auto h-full pb-24">
        {[
          "Electronics",
          "Fashion",
          "Women",
          "Men",
          "Beauty & Health",
          "Home & Living",
          "Groceries",
          "Sports",
          "Automotive",
          "Best Deals",
        ].map((category) => (
          <label
            key={category}
            className="flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 hover:bg-gray-100 transition"
          >
            <input
              type="checkbox"
              className="w-4 h-4 accent-blue-600"
            />
            <span className="text-gray-700">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;