import { FC, useState } from 'react';
import styles from './Navbar.module.css';
import SideMenu from './components/SideMenu';
import { AnimatePresence } from 'framer-motion';
import combineClasses from '../../helpers/combineClasses';

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.menu_wrapper}>
      <div className={styles.navbar}>
        <div className={styles.navbar_logo}>
          <a href="/">
            <div className={styles.logo}></div>
          </a>
        </div>
        <div
          className={combineClasses(
            styles.navbar_menu,
            menuOpen ? styles.open : '',
          )}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && <SideMenu setMenuOpen={setMenuOpen} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
