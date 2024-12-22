import { motion } from "framer-motion";

const NewsHeadline = () => {
  return (
    <div className="overflow-hidden  border bg-gradient-to-r from-red-500 to-fuchsia-500  my-12 py-3 w-full">
      <motion.div
        className="inline-block whitespace-nowrap text-lg font-semibold px-4 text-white"
        animate={{ x: ["-100%", "300%"] }} // Moves fully from left to right
        transition={{
          repeat: Infinity, // Infinite loop
          duration: 30, // Time for one full cycle
          ease: "linear", // Smooth motion
        }}
        initial={{ x: "-100%" }} // Starts off-screen on the left
      >
        You can contact me via social handles also, Have a good day!
      </motion.div>
    </div>
  );
};

export default NewsHeadline;
