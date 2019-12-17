import React, { Component } from 'react';
import Home from './Home';
import { Link } from 'react-router-dom'
import '../index.css';
import Button from 'react-bootstrap/Button'
import Submit from './Submit';

class Updated extends Component {
	render() {
		return(
			<div>
				<form>
				<h4>You preferences have been updated.</h4>
				<Link to={'/'} className="link">Return Home</Link>
				</form>
			</div>
		)
	}
}

export default Updated;