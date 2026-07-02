const CategoryCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 cursor-pointer group">
      <div className="flex flex-col items-center justify-center w-32 h-32 md:w-36 md:h-36 bg-gray-200 rounded-full p-4 overflow-hidden">
     
        <img
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          src={product.image}
          alt={product.title}
        />
      </div>
      <span className="text-sm font-medium text-gray-700 text-center w-full truncate px-2">
        {product.category || product.title}
      </span>
    </div>
  );
};

export default CategoryCard;