import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Card from 'react-bootstrap/Card'
import '../index.css';

class Forms extends Component {
	state = {
		first_name:'',
		last_name:'',
		email: '',
		topic: '',
		frequency: ''
	}

	render() {
		return(
			<Form>
	  		<div className="form-group">
					<input className="form-control form-control-lg" type="text" id="name" name="name" placeholder='First Name'/>
				</div>

				<div className="form-group">
					<input className="form-control form-control-lg" type="text" id="name" name="name" placeholder="Last Name"/>
				</div>

			  <Form.Group controlId="formBasicEmail">
				<Form.Control type="email" placeholder="Email address" />
				
			  </Form.Group>
			  <Form.Text className="text-muted">
				  We'll never share your email with anyone else.
				</Form.Text>
				
				

			 {/*  <div> */}
				{/*   <InputGroup className="mb-3"> */}
				{/* 	<InputGroup.Prepend> */}
				{/* 	  <InputGroup.Checkbox aria-label="Checkbox for following text input" /> */}
				{/* 	</InputGroup.Prepend> */}
				{/* 	<FormControl aria-label="Text input with checkbox" /> */}
				{/*   </InputGroup> */}
				{/*   <InputGroup> */}
				{/* 	<InputGroup.Prepend> */}
				{/* 	  <InputGroup.Radio aria-label="Radio button for following text input" /> */}
				{/* 	</InputGroup.Prepend> */}
				{/* 	<FormControl aria-label="Text input with radio button" /> */}
				{/*   </InputGroup> */}
				{/* </div> */}
			</Form>
		)
					
	}
}

export default Forms;