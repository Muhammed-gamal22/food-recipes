import { useEffect, useState } from "react";
import RecipesScreen from "./pages/RecipesScreen";
import StartingScreen from "./pages/StartingScreen";
import { Routes, Route } from "react-router-dom";
import RecipeDetailsScreen from "./pages/RecipeDetailsScreen";
import Header from "./components/Header";
import { Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
const Paths = ["/fish", "/chicken", "/vegetables", "/fruits"];
function App() {
  const [isShow, setIsShow] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 4000);
  }, []);
  return (
    <div>
      {!isShow && (
        <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      )}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {!isShow && <Route path="/" element={<Navigate to="/fish" />} />}
          {isShow && <Route path="/" element={<StartingScreen />} />}
          {!isShow &&
            Paths.map((path) => (
              <>
                <Route
                  path={path}
                  element={<RecipesScreen showSidebar={showSidebar} />}
                />
                <Route
                  path={`${path}/:recipeId`}
                  element={<RecipeDetailsScreen showSidebar={showSidebar} />}
                />
              </>
            ))}
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
