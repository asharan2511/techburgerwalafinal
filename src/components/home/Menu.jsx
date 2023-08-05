import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
const Menu = () => {
  const dispatch = useDispatch();
  const addToCartHandler = (ItemNum) => {
    switch (ItemNum) {
      case 1:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 2:
        dispatch({ type: "vegCheeseBurgerIncrement" });
        toast.success("Added To Cart");
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        dispatch({ type: "burgerWithFriesIncrement" });
        toast.success("Added To Cart");
        dispatch({ type: "calculatePrice" });
        break;

      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
    }
  };
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          ItemNum={1}
          BurgerSrc={burger1}
          Price={200}
          Title={"Cheese Burger"}
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          ItemNum={2}
          BurgerSrc={burger2}
          Price={500}
          Title={"Veg Cheese Burger"}
          handler={addToCartHandler}
          delay={0.5}
        />
        <MenuCard
          ItemNum={3}
          BurgerSrc={burger3}
          Price={1800}
          Title={"Cheese Burger with French Fires"}
          handler={addToCartHandler}
          delay={0.8}
        />
      </div>
    </section>
  );
};

export default Menu;
