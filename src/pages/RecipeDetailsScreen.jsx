import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeDetails from "../components/RecipeDetails";
import { motion } from "framer-motion";
import "./RecipeDetailsScreen.css";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};
const RecipeDetailsScreen = ({ showSidebar }) => {
  const APP_ID = "7dbadd22";
  const APP_KEY = "ae323572d665977e22e1febc2ae22a8f";
  const params = useParams();
  const [recipe, setRecipe] = useState({});

  const { recipeId } = params;

  const fetchRecipe = useCallback(async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2/${recipeId}?app_id=${APP_ID}&app_key=${APP_KEY}&type=public`
    );
    const data = await response.json();
    setRecipe(data.recipe);
  }, [recipeId]);
  useEffect(() => {
    fetchRecipe();
  }, [fetchRecipe]);
  return (
    <motion.div
      className="recipeDetailsScreen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <RecipeDetails recipeItem={recipe} />
    </motion.div>
  );
};

export default RecipeDetailsScreen;
