import Ingredient from "./Ingredient";
import "./RecipeDetails.css";

const RecipeDetails = ({ recipeItem }) => {
  return (
    <div className="recipeDetails">
      <div className="container">
        <div className="recipeDetailsContainer">
          <div className="recipeDetailsLeft">
            <img src={recipeItem.image} alt={recipeItem.label} />
          </div>
          <div className="recipeDetailsRight">
            <h2 className="recipeLabel">{recipeItem.label}</h2>
            {recipeItem.label && (
              <span className="ingTitle">Ingredients : </span>
            )}
            <ul>
              {recipeItem?.ingredientLines?.map((item, index) => (
                <li className="ingredientLine">
                  <span>{index + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="recipeDetailsBottom">
          {recipeItem.ingredients?.map((ing) => (
            <Ingredient ingredient={ing} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
