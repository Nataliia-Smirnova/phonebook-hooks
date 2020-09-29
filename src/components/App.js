import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Header from './header/Header';
import routes from '../routes';

import '../styles.css';

const ContactsView = lazy(() =>
  import('../views/ContactsView' /* webpackChunkName: "contacts-view" */),
);
const LoginView = lazy(() =>
  import('../views/LoginView' /* webpackChunkName: "login-view" */),
);
const RegisterView = lazy(() =>
  import('../views/RegisterView' /* webpackChunkName: "register-view" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading</h1>}>
        <Switch>
          <Route exact path="/" component={LoginView} />

          <PublicRoute
            path={routes.login}
            restricted
            redirectTo="/contacts"
            component={LoginView}
          />
          <PublicRoute
            exact
            path={routes.register}
            restricted
            redirectTo="/contacts"
            component={RegisterView}
          />
          <PrivateRoute
            exact
            path={routes.contacts}
            redirectTo="/login"
            component={ContactsView}
          />
        </Switch>
      </Suspense>
    </>
  );
}
