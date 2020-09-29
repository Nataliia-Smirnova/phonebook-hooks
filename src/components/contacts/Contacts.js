import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  contactsOperations,
  contactsSelectors,
} from '../../redux/contacts/index';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './Contacts.module.css';

export default function Contacts({ mounted }) {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteBtnClick = useCallback(
    id => dispatch(contactsOperations.deleteContact(id)),
    [dispatch],
  );

  return (
    <TransitionGroup component="ul" className={styles.contacts}>
      {contacts.map(({ name, number, id }) => (
        <CSSTransition
          key={id}
          timeout={300}
          classNames={mounted ? 'contactItem-appear' : 'contactItem-fade'}
        >
          <li key={id} className={styles.contacts__item}>
            <p className={styles.contact__text}>
              <span className={styles.contact__part}>{name}: </span>
              <span>{number}</span>
            </p>
            <button className={styles.btn} onClick={() => onDeleteBtnClick(id)}>
              Удалить
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
