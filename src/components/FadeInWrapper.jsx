// src/components/FadeInWrapper.jsx
import React from "react";

import { motion } from "framer-motion";

export default function FadeInWrapper({ children, delay = 0.1 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
