import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../';
import AuthService from '../../services/auth.service';

const Header = () => {
  return <header>
    <nav>
      <div className="container nav-wrapper">
        <div className="logo logo-nav"><Logo /></div>
        <ul className="right">
          <li>
            <Link to="/logout" onClick={AuthService.logout}>Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>;
};

export default Header;
