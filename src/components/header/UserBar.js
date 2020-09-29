import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { authOperations } from '../../redux/auth';

import styles from './Header.module.css';

export default function UserBar() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(authOperations.logOut()), [
    dispatch,
  ]);

  return (
    <div className={styles.userBar}>
      <p className={styles.text}>Welcome, {name}!</p>
      <div></div>
      <button type="button" className={styles.btn} onClick={onLogout}>
        LogOut
      </button>
    </div>
  );
}
