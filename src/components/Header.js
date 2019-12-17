import React from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';
import Nav from './Nav'
//import Form from './Form';

const Header = () => {
  return (
    <div>
      <Nav />
      <div id="home">
	  		<Link to={'/'}>Home</Link>
      </div>
      <h1>Want a free drink?</h1>

      <div>
      	<h3>Subscribe to our newsletter, so you can stay up-to-date on our events.</h3>
      </div>
   	
			<Form />

      <p>By clicking "Submit" you agree to our <Link to={'/privacy'} className="link">Privacy Policy</Link></p>
      
    </div>
  );
};

export default Header;