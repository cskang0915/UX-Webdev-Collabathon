import React from 'react';
import { Link } from 'react-router-dom';
import Forms from './Forms';
import Button from 'react-bootstrap/Button'
// import SubmitContainer from './containers/SubmitContainer'
import Submit from './Submit';
import Nav from './Nav'

const Header = () => {
  return (
    <header className='main'>
      <Nav />
      <nav id="home">
	  		<Link to={'/'} className="link">Home</Link>
      </nav>
      <h2>Want a free drink?</h2>
      <div>
      	<h3>Subscribe to our newsletter, so you can stay up-to-date on our events.</h3>
      </div>
   	
			<Forms />

      <p>By clicking "Submit" you agree to our <Link to={'/privacy'} className="link">Privacy Policy</Link></p>
      
			<Button variant="primary" type="submit" className="link">
      	<Link to={'/submit'}>
      		Submit
        </Link>
      </Button>

    </header>
  );
};

export default Header;