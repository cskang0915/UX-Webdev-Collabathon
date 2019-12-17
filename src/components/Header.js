import React from 'react';
import { Link } from 'react-router-dom';
//import Form from './Form';

const Header = () => {
  return (
    <header>
      <nav id="home">
	  		<Link to={'/'}>Home</Link>
      </nav>
      <h1>Want a free drink?</h1>

      <div>
      	<h2>Subscribe to our newsletter, so you can stay up-to-date on our events.</h2>
      </div>
   		
   		{/* <Form /> */}

      
      <p>By clicking "Submit" you agree to our <Link to={'/privacy'}>Privacy Policy</Link></p>
      

    </header>
  );
};

export default Header;