import Categories from "./components/Categories/Categories";
import Navbar from "./components/NavBar/Navbar";
import SummerDiscount from "./components/SummerDiscount/SummerDiscount";
import Products from "./components/Products/Products";

const App = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <SummerDiscount />
      <Products/>
    </div>
  );
};

export default App;
