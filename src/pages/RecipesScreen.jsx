import { useEffect, useState } from "react";
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
  const APP_ID = "7dbadd22";
  const APP_KEY = "ae323572d665977e22e1febc2ae22a8f";
  const [recipeData, setRecipeData] = useState({});
  const location = useLocation();
  console.log(location.pathname);
  const getRequest = async (query) => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setRecipeData(data);
  };
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
  }, [location.pathname]);
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
