import React, { useState, useEffect, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../redux/contacts/index';
import Contacts from '../components/contacts/Contacts';
import Form from '../components/form/Form';
import Filter from '../components/filter/Filter';

export default function ContactsView() {
  const [isMounted, setIsMounted] = useState(false);
  const [cMounted, setCMounted] = useState(false);
  const items = useSelector(contactsSelectors.getItems);
  const dispatch = useDispatch();
  const getContacts = useCallback(
    () => dispatch(contactsOperations.getContacts()),
    [dispatch],
  );

  useEffect(() => {
    if (items.length > 1) {
      setIsMounted(true);
    }

    getContacts();
    setCMounted(true);
  }, [getContacts, items.length]);

  useEffect(() => {
    setIsMounted(false);
    setCMounted(false);
  }, [items]);

  return (
    <div id="content">
      <CSSTransition in={true} appear={true} classNames="title" timeout={750}>
        <h1 id="title">Phonebook</h1>
      </CSSTransition>
      <Form />
      <h2 id="text">Contacts</h2>
      <CSSTransition
        in={items.length > 1}
        classNames={isMounted ? 'filter-appear' : 'filter'}
        timeout={500}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>
      <Contacts mounted={cMounted} />
    </div>
  );
}
