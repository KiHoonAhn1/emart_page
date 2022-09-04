import React, { memo } from 'react';
import styles from './header.module.css';

const header = memo(() => {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.img} src="images/arrow.png" alt="go back" />
        <img className={styles.img} src="images/home.png" alt="home" />
      </div>
      <p className={styles.title}>금주의 전단광고</p>
      <div>
        <img className={styles.img} src="images/menu.png" alt="menu" />
      </div>
    </header>
  );
});

export default header;