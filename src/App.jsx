import Categories from "./components/Categories/Categories";
import SummerDiscount from "./components/SummerDiscount/SummerDiscount";
import Products from "./components/Products/Products";
import OurCollections from "./components/OurCollections/OurCollections";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Home />
      <Categories />
      <SummerDiscount />
      <Products />
      <OurCollections />
    </div>
  );
};

export default App;