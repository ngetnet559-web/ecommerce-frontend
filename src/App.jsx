import Categories from "./components/Categories/Categories";
import SummerDiscount from "./components/SummerDiscount/SummerDiscount";
import Products from "./components/Products/Products";
import OurCollections from "./components/OurCollections/OurCollections";
import Home from "./pages/Home";
import CustomerAndBrandsSection from "./components/CustomerSection/CustomerSection";

const App = () => {
  return (
    <div>
      <Home />
      <Categories />
      <SummerDiscount />
      <Products />
      <OurCollections />
      <CustomerAndBrandsSection/>
    </div>
  );
};

export default App;