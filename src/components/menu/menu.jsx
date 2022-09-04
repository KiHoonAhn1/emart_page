import React, { useState } from 'react';
import styles from './menu.module.css';

const Menu = ({ menus, clickMenu }) => {
  const [active, setActive] = useState("전체");

  return (
    <div className={styles.menu_list}>
        {menus &&
          menus.map(menu => (
            <span
              key={menu.id} 
              className={`${styles.menu} ${menu.name === active ? styles.active : ''}`}
              onClick={() => {
                clickMenu(menu.name)
                setActive(menu.name)}
              }
            >
              {menu.name}
            </span>
          ))
        }
    </div>
  );
};

export default Menu;