import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Techno Club Website</h1>
        <nav id="home">
		  		<Link to={'/'}>Home</Link>
        </nav>
        <nav id="privacy">
        	<Link to={'/privacy'}>Privacy Policy</Link>
        </nav>
    </header>
  );
};

export default Header;