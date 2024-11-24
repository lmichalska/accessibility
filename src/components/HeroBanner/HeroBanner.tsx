import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import videoSrc from '/assets/hero_vid.mp4';
import WordCarousel from './components/WordCarousel';
import styles from './HeroBanner.module.css';

const HeroBanner: FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.hero_banner}>
      <video className={styles.video} autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <WordCarousel />
      </div>
      <button
        className={styles.scroll_button}
        onClick={handleScroll}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={styles.arrow}>
          <motion.div
            className={styles.arrow_inner}
            animate={isPaused ? { y: undefined } : { y: [2, 8, 2] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>
        </div>
      </button>
    </div>
  );
};

export default HeroBanner;
