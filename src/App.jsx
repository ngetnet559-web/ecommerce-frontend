import Categories from "./components/Categories/Categories";
import Navbar from "./components/NavBar/Navbar";
import SummerDiscount from "./components/SummerDiscount/SummerDiscount";
import Products from "./components/Products/Products";
import OurCollections from "./components/OurCollections/OurCollections";

const App = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <SummerDiscount />
      <Products />
      <OurCollections />
    </div>
  );
};

export default App;
