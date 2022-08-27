import { motion } from "framer-motion";
import Recipe from "./Recipe";
import "./Recipes.css";
let containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 1.5,
    },
  },
};
const Recipes = ({ recipeObj }) => {
  console.log(recipeObj.hits);
  return (
    <motion.div
      variants={containerVariants}
      animate="visible"
      initial="hidden"
      className="recipes"
    >
      <div className="recipesContainer">
        {recipeObj.hits?.map(
          (re) =>
            !!re.recipe.image && <Recipe recipe={re} recipeObj={recipeObj} />
        )}
      </div>
    </motion.div>
  );
};

export default Recipes;
