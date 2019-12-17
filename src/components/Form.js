import React, { Component } from 'react';
import '../index.css'

class Form extends Component{
	state = {
		first_name:'',
		last_name:'',
		email: '',
		topic: '',
		frequency: ''
	}

	render() {
		return(
		<form>
			<h1>Subscribe Here!!</h1>
			<div className="form-group">
				<label>First Name</label>
				<input className="form-control form-control-lg" type="text" id="name" name="name" placeholder='First Name'/>
			</div>
			<div className="form-group">
				<label>Last Name</label>
				<input className="form-control form-control-lg" type="text" id="name" name="name" placeholder="Last Name"/>
			</div>
			<div className="form-group">
				<label>Email</label>
				<input className="form-control form-control-lg" type="email" id="email" name="email" placeholder="Email" />
			</div>
			<button className="btn btn-lg btn-block btn-outline-secondary registerBtn" type="submit">Submit</button>
		</form>
		)
	}

}



export default Form;