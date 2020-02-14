import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className='header'>
    <div>
      <h1>Tiny Url - url shortener service</h1>
    </div>
    <div className='navbar'>
      <Link to='/admin'>admin page</Link>
      <Link to='/'>home</Link>
    </div>
  </header>
);

export default Header;
