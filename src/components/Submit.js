import React, { Component } from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from '../components/Home';
import '../index.css';
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class Submit extends Component {
	render() {
		return(
			<div id='formtext'>
				<Form.Text id="newsletter">
				  Which newsletters do you want to receive? (Please check all that apply)
				</Form.Text>

			  <Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" className="check" label="Female DJ Events" />
					<Form.Check type="checkbox" className="check" label="Funky Techno" />
					<Form.Check type="checkbox" className="check" label="Darker Techno" />
					<Form.Check type="checkbox" className="check" label="Heavy and Hard" />
					<Form.Check type="checkbox" className="check" label="Loopy and Minimal" />
					<Form.Check type="checkbox" className="check" label="Tech Housey" />
			  </Form.Group>

				<Form.Text id="newsletter">
				  How often do you want to get notified?
				</Form.Text>
			  <p className="notify">
		      <label>
		        <input name="group1" type="radio" checked />
		        <span>Weekly</span>
		      </label>
		    </p>
		    <p className="notify">
		      <label>
		        <input name="group1" type="radio" checked />
		        <span>Bi-Weekly</span>
		      </label>
		    </p>
		    <p className="notify">
		      <label>
		        <input name="group1" type="radio" checked />
		        <span>Monthly</span>
		      </label>
		    </p>
		    <Button variant="primary" type="submit" className="link">
      	<Link to={'/updated'}>
      		Apply Changes
        </Link>
      </Button>
			</div>
		)
	}
}
	
export default Submit;
