import { FC, SetStateAction, Dispatch } from 'react';
import styles from './SideMenu.module.css';
import { motion } from 'framer-motion';

interface SideMenuProps {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const menuOptions = [
  { name: 'What', ariaLabel: 'navigate to' },
  { name: 'Why', ariaLabel: 'navigate to' },
  { name: 'How', ariaLabel: 'navigate to' },
  { name: 'Others', ariaLabel: 'navigate to' },
  { name: 'You', ariaLabel: 'navigate to' },
];

const SideMenu: FC<SideMenuProps> = ({ setMenuOpen }) => {
  const handleClick = () => {
    setMenuOpen(false);
  };

  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        styles: { ease: 'easeInOut' },
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const overlayVariants = {
    initial: {
      opacity: 0,
      x: '-100%',
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        styles: { ease: 'easeInOut' },
      },
    },
    exit: {
      opacity: 0,
      x: '-100%',
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      x: 4,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <motion.div
        className={styles.menu}
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className={styles.navigation}>
          {menuOptions.map((option, index) => (
            <motion.div key={index} variants={itemVariants}>
              <a
                href={`#${option.name.toLocaleLowerCase()}`}
                aria-label={`${option.ariaLabel} ${option.name}`}
                onClick={handleClick}
              >
                {option.name}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className={styles.menu_overlay}
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      ></motion.div>
    </>
  );
};

export default SideMenu;
