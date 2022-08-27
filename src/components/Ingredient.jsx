import React from "react";
import "./Ingredient.css";
const Ingredient = ({ ingredient }) => {
  return (
    <div className="ingredientContainer">
      <div className="ingredientItem">
        <div className="ingredientLeft">
          <img src={ingredient.image} alt={ingredient.text} />
        </div>
        <div className="ingredientCenter">
          <h3 className="ingredientTitle">{ingredient.text}</h3>
        </div>
        <div className="ingredientRight">
          <span className="ingredientQuantity">
            amount : {ingredient.quantity.toFixed(2)}
          </span>
          <div className="ingredientWeight">
            {" "}
            weight : {ingredient.weight.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
