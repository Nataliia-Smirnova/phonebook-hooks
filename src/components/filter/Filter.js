import React, { useCallback } from 'react';
import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const onChange = useCallback(
    event => dispatch(changeFilter(event.target.value)),
    [dispatch],
  );

  return (
    <label className={styles.phonebook__label}>
      Find contacts by name:
      <input
        className={styles.phonebook__input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
}
