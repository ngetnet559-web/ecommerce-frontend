import { useEffect, useState, useRef } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import {productURL} from "../../api/axiosConfig";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Loader from "../Loader/Loader";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const scrollRef = useRef(null);

  useEffect(() => {
    axios
      .get(`${productURL}/products`)
      .then((res) => {
        setCategories(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  return (
    <div className="relative max-w-6xl mx-auto py-8">
      <div className="flex items-center justify-between  ">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <a
          href="#"
          className="text-blue-600 hover:underline  text-sm font-medium"
        >
          <span className="flex items-center justify-between font-bold  ">
            View All Categories &nbsp; <FaGreaterThan />
          </span>
        </a>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="relative flex items-center">
          <button
            onClick={scrollLeft}
            className="absolute -left-4 z-10 bg-white border border-gray-200 shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <FaLessThan className="text-gray-600 text-sm" />{" "}
          </button>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth hide-scroll-bar py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((product) => (
              <div key={product.id} className="min-w-max">
                <CategoryCard product={product} />
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute -right-4 z-10 bg-white border border-gray-200 shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <FaGreaterThan className="text-gray-600 text-sm" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Categories;
