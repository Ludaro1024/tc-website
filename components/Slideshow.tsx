'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  '/images/diashow/1.png',
  '/images/diashow/2.png',
  '/images/diashow/3.png',
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt="Slideshow"
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}