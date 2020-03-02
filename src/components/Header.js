import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Aggiungi spesa{' '}
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Aiuto
    </NavLink>
  </header>
);

export default Header;
