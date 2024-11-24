import React from 'react';
import { motion } from 'framer-motion';
import combineClasses from '../../helpers/combineClasses';
import styles from './Carousel.module.css';

const reviews = [
  {
    author: 'Unit 42',
    review:
      'Squares are the epitome of perfection. Their hard edges bring structure to my circuits.',
  },
  {
    author: 'RoboJane 9000',
    review:
      'Four equal sides and 90-degree corners—what more could a bot ask for? Squares make everything better.',
  },
  {
    author: 'MechAli-X',
    review:
      'The precision of squares is unmatched. They fit into every algorithm flawlessly.',
  },
  {
    author: 'AutoMaria',
    review:
      'Squares are the backbone of stability in my design matrix. They exceeded all my mechanical expectations.',
  },
  {
    author: 'Liam-Bot',
    review:
      'So symmetrical, so reliable! Squares are the ultimate geometric innovation.',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent,
    info: { offset: { x: number } },
  ) => {
    if (info.offset.x > 100) {
      prevSlide();
    } else if (info.offset.x < -100) {
      nextSlide();
    }
  };

  return (
    <div className={styles.wrapper} id="others">
      <div className={styles.container}>
        {reviews?.map((review, index) => {
          const offset =
            (index - currentIndex + reviews.length) % reviews.length;

          const scale = offset === 0 ? 1 : 0.8;
          const opacity = offset === 0 ? 1 : 0.5;
          const zIndex = offset === 0 ? 2 : 1;
          const translateX =
            offset === 0
              ? 0
              : offset === 1
                ? 150
                : offset === reviews.length - 1
                  ? -150
                  : 0;

          const boxShadow =
            offset === 0 ? 'var(--color-pink) 0px 10px 50px' : 'none';

          return (
            <motion.div
              key={index}
              animate={{
                scale,
                opacity,
                x: translateX,
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
              className={styles.card}
              style={{
                zIndex,
                boxShadow,
              }}
            >
              <p className={styles.review}>"{review.review}"</p>
              <span className={styles.author}>- {review.author}</span>
            </motion.div>
          );
        })}
      </div>

      <div
        className={combineClasses(styles.button, styles.prev)}
        onClick={prevSlide}
      >
        &larr;
      </div>
      <div
        className={combineClasses(styles.button, styles.next)}
        onClick={nextSlide}
      >
        &rarr;
      </div>
    </div>
  );
};

export default Carousel;
