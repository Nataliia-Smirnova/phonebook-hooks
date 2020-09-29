import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
  contactsOperations,
  contactsSelectors,
} from '../../redux/contacts/index';

import styles from './Form.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const items = useSelector(contactsSelectors.getItems);
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    contact => dispatch(contactsOperations.addContact(contact)),
    [dispatch],
  );

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const sameContact = items.find(contact => contact.name === name);

    if (!name || !number) {
      setShowInfo(true);
      setTimeout(() => setShowInfo(false), 1500);
    } else if (sameContact) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 1500);
    } else if (name && number) {
      const data = { name, number };
      onSubmit(data);
    }

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.phonebook__form} onSubmit={handleFormSubmit}>
      <label className={styles.phonebook__label}>
        Name
        <input
          className={styles.phonebook__input}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label className={styles.phonebook__label}>
        Number
        <input
          className={styles.phonebook__input}
          type="text"
          name="number"
          value={number}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit" className={styles.btn}>
        Add contact
      </button>
      <CSSTransition
        in={showAlert}
        classNames="alert"
        timeout={500}
        unmountOnExit
      >
        <p className={styles.alert}>Contact already exists!</p>
      </CSSTransition>
      <CSSTransition
        in={showInfo}
        classNames="info"
        timeout={500}
        unmountOnExit
      >
        <p className={styles.info}>Fill both fields please</p>
      </CSSTransition>
    </form>
  );
}
