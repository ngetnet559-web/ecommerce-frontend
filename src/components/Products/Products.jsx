import { ProductsInfo } from "../../data/products";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="grid grid:cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
      {ProductsInfo?.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Products;
