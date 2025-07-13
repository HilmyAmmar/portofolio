import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollHint = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.5 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center gap-2 text-blue-200/80"
      >
        <span className="text-sm font-medium">Scroll down</span>
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollHint;