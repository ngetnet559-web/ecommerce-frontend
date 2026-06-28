import Categories from "./components/Categories/Categories";
import Navbar from "./components/NavBar/Navbar";
import SummerDiscount from "./components/SummerDiscount/SummerDiscount";

const App = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <SummerDiscount />
    </div>
  );
};

export default App;
