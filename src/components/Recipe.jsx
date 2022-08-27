import "./Recipe.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const recipeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      ease: "easeInOut",
    },
  },
};

const Recipe = ({ recipe, recipeObj }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={recipeVariants}
      className="recipeItem"
      whileHover="hover"
      onClick={() => navigate(`/${recipeObj.q}/${recipe.recipe.uri.slice(51)}`)}
    >
      <div className="recipeImg">
        <img src={recipe.recipe.image} alt={recipe.recipe.label} />
      </div>

      <div className="recipeContent">
        <h4 className="recipeLabel">{recipe.recipe.label}</h4>
        <span className="recipeRate">{recipe.recipe.yield.toFixed(1)}</span>
      </div>
    </motion.div>
  );
};

export default Recipe;
