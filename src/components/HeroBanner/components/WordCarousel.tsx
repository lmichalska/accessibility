import { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WordCarousel.module.css';

const WordCarousel: FC = () => {
  const words = ['square', 'NOT circle', 'triangle', 'rectangle', 'line'];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Do you want to...</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className={styles.animated_text}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default WordCarousel;
