import React from 'react';

import logo from '../assets/logo.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} />
        <div className="user-logged">
          <span>User</span>
          <i className="material-icons" style={{ marginLeft: 10 }}>
            account_circle
          </i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
