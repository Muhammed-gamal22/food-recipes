import { motion } from "framer-motion";
import Svg from "../components/Svg";
import "./StartingScreen.css";
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

const StartingScreen = () => {
  return (
    <motion.div
      variants={containerVariants}
      className="StartingScreen"
      initial="hidden"
      animate="visible"
    >
      <Svg />
    </motion.div>
  );
};

export default StartingScreen;
