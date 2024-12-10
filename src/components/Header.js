import React from 'react';
import styles from './App.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav className={styles.navBar}>
          <h1>My App</h1>
          <ul className={styles.navList}>
            <li>
              <a href="#hero" className={styles.cta}>Home</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
