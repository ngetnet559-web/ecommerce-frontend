import { useState } from "react";
import { Rating } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import numeral from "numeral";
import styles from "./Products.module.css";

const ProductCard = ({ product }) => {
  const { image, title, description, price, discount, status, rating } =
    product;
  const [userRating, setUserRating] = useState(rating?.rate || 0);
  const [isFavorite, setIsFavorite] = useState(false);
  // additional styles for status only
  const idToStyle = {
    1: styles.AirBud_Status,
    2: styles.headset_Status,
    3: styles.bag_Status,
    4: styles.Camera_Status,
    5: styles.sneaker_Status,
  };
  const statusStyle = idToStyle[product.id] || "";
  return (
    <div className="border border-gray-200 rounded-xl p-4 flex flex-col hover:shadow-lg transition-all duration-300 bg-slate-100 shadow-xl">
      {/* Status & Favorite */}
      <div className="flex justify-between items-center gap-10">
        <span
          className={`text-sm font-bold px-2 py-1 rounded w-max text-red-600 bg-red-100 mb-2 ${statusStyle}`}
        >
          {status}
        </span>
        <div
          className="cursor-pointer"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </div>
      </div>

      {/* Image */}
      <div className="w-full h-40 mb-4 flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <h1 className="font-bold text-sm text-gray-900 line-clamp-1">{title}</h1>

      {/* Rating Row  */}
      <div className="flex items-center gap-2 my-2">
        <Rating
          value={userRating}
          precision={0.5}
          onChange={(event, newValue) => setUserRating(newValue)}
        />
        <small className="text-gray-500">
          ({numeral(rating?.count).format("0.0a")})
        </small>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 mt-1 mb-3">{description}</p>

      {/* Price & Discount */}
      <div className="flex items-center gap-2 mb-4 mt-auto">
        <h3 className="font-bold text-lg text-gray-900">
          {numeral(price).format("$0,0.00")}
        </h3>
        {discount && (
          <span className="text-sm text-gray-500 line-through">
            {numeral(discount).format("$0,0.00")}
          </span>
        )}
      </div>

      {/* Add to cart */}
      <button className="w-full border-2 border-blue-600 text-blue-600 font-semibold py-2 rounded-lg transition-all duration-300 hover:bg-slate-600 hover:text-white hover:border-slate-600 cursor-pointer">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
