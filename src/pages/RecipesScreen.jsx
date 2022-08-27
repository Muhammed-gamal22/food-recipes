import { useCallback, useEffect, useState } from "react";
import Recipes from "../components/Recipes";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "./RecipesScreen.css";
import Sidebar from "../components/Sidebar";

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
  exit: {
    x: "-100vw",
    transition: {
      duration: 1.25,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
};

const RecipesScreen = ({ showSidebar }) => {
  const APP_ID = process.env.REACT_APP_API_ID;
  console.log(APP_ID);
  const APP_KEY = process.env.REACT_APP_API_KEY;
  console.log(APP_KEY);
  const [recipeData, setRecipeData] = useState({});
  const location = useLocation();

  const getRequest = useCallback(
    async (query) => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      console.log(data);
      setRecipeData(data);
    },
    [APP_ID, APP_KEY]
  );
  useEffect(() => {
    switch (location.pathname) {
      case "/fish":
        getRequest("fish");
        break;
      case "/chicken":
        getRequest("chicken");
        break;
      case "/vegetables":
        getRequest("vegetables");
        break;
      case "/fruits":
        getRequest("fruits");
        break;
      default:
        getRequest("chicken");
    }
  }, [location.pathname, getRequest]);
  return (
    <motion.div
      variants={containerVariants}
      animate="visible"
      initial="hidden"
      className="recipesScreen"
      exit="exit"
    >
      <Sidebar showSidebar={showSidebar} />
      <div className="container">
        <Recipes recipeObj={recipeData} />
      </div>
    </motion.div>
  );
};

export default RecipesScreen;
