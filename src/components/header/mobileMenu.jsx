// components/MobileMenu.js

import styles from './MobileMenu.module.css';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.menu}>
          <div className='flex justify-between items-center'>
            <button className={styles.closeButton} onClick={toggleMenu}>
              &times;
            </button>
            <div className={styles.logo}>buzz teenz</div>
          </div>
          <div className={styles.links}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#">Manifesto</a>
            <a href="#">Log In</a>
            <button className={styles.waitlistButton}>Join Waitlist</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
