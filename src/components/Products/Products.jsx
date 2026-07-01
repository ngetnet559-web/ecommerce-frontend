import { ProductsInfo } from "../../data/products";
import ProductCard from "./ProductCard";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className="p-6 bg-white">
      <h1 className={`${styles.heading_1} text-2xl font-bold `}>
        Recommended for you
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-4">
        {ProductsInfo?.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
