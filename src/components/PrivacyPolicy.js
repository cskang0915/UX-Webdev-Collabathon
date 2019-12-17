import React, { Component } from 'react';
import Home from './Home';
import { Link } from 'react-router-dom'
import '../index.css';

class PrivacyPolicy extends Component {
	render() {
		return(
			<div>
				<h4>Privacy Policy</h4>
				<p>We at TechnoClub respect the privacy of your personal information and, 
					as such, make every effort to ensure your information is protected 
					and remains private. As the owner and operator of loremipsum.io 
					(the "Website") hereafter referred to in this Privacy Policy as 
					"Lorem Ipsum", "us", "our" or "we", we have provided this Privacy 
					Policy to explain how we collect, use, share and protect information 
					about the users of our Website (hereafter referred to as “user”, “you” 
						or "your"). For the purposes of this Agreement, any use of the terms 
					"Lorem Ipsum", "us", "our" or "we" includes TechnoClub, without limitation. 
					We will not use or share your personal information with anyone except as 
					described in this Privacy Policy.</p>
					<Link to={'/'} className="link">Go Back</Link>
			</div>
		)
	}
}

export default PrivacyPolicy;