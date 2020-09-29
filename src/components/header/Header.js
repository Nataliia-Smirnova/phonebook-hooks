import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import UserBar from './UserBar';
import AuthLinks from './AuthLinks';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsAuth);
  return <header>{isLoggedIn ? <UserBar /> : <AuthLinks />}</header>;
}
