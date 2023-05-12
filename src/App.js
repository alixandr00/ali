import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import MealSummary from "./components/meal-summary/MealSummary";
import Meals from "./components/meals/Meals";
import Basket from "./components/basket/Basket";
import CartProvider from "./store/cart-context";

function App() {
  const [toggle, setToggle] = useState(false);

  function toggleHandler() {
    setToggle((prev) => !prev);
  }
  return (
    <CartProvider>
      <Header onToggle={toggleHandler} />
      <MealSummary />
      <Meals />

      {toggle && <Basket onToggle={toggleHandler} />}
    </CartProvider>
  );
}

export default App;
