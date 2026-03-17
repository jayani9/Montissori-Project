import React from "react";
import { motion } from "framer-motion";

const Activities: React.FC = () => {
  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 20 }}   // start slightly below and invisible
      animate={{ opacity: 1, y: 0 }}    // fade in and slide up
      transition={{ duration: 0.6 }}    // animation duration
    >
      <h1 className="text-3xl font-bold">Activities Page</h1>
      <p className="mt-4 text-gray-700">
        Welcome to the Montessori Activities page! Explore fun and educational activities here.
      </p>
    </motion.div>
  );
};

export default Activities;