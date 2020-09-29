import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import styles from './Header.module.css';

export default function AuthLinks() {
  return (
    <ul className={styles.userBar}>
      <li>
        <NavLink
          to={routes.login}
          className={styles.contactsLink}
          activeClassName={styles.contactsLinkActive}
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.register}
          className={styles.contactsLink}
          activeClassName={styles.contactsLinkActive}
        >
          Register
        </NavLink>
      </li>
    </ul>
  );
}
