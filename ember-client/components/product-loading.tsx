import { motion } from "framer-motion";

const LoadingProductCard = ({ index }: { index: number }) => (
  <motion.div
    className="w-64"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <motion.div
      className="h-64 w-64 rounded-xl bg-gray-200"
      animate={{ background: ["#f0f0f0", "#e0e0e0", "#f0f0f0"] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
    />
    <div className="flex items-center justify-between">
      <motion.div
        className="mt-2 h-12 w-3/4 rounded-xl bg-gray-200"
        animate={{ background: ["#f0f0f0", "#e0e0e0", "#f0f0f0"] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
          delay: 0.1,
        }}
      />
      <motion.div
        className="mt-2 size-12 rounded-full bg-gray-200"
        animate={{ background: ["#f0f0f0", "#e0e0e0", "#f0f0f0"] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
          delay: 0.2,
        }}
      />
    </div>
  </motion.div>
);

export default LoadingProductCard;
