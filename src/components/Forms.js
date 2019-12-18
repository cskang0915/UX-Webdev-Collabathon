import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'	
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import '../index.css';

class Forms extends Component {
	render() {
		return(	
			<Form>
				<form id='firstform'>

            <h2>Want a free drink?</h2>
            <h3>Subscribe to our newsletter, so you can stay up-to-date on our events.</h3>
            <div className="form-group">
                <input className="form-control form-control-lg" type="text" id="name" name={"first_name"} placeholder='First Name' onChange={this.props.onChange}/>
                <p className='text-muted'>Cannot have a number or special character</p>
            </div>
            <div className="form-group">
                <input className="form-control form-control-lg" type="text" id="name" name={"last_name"} placeholder="Last Name" onChange={this.props.onChange}/>
                <p className='text-muted'>Cannot have a number or special charater</p>
            </div>
            <div className="form-group">
                <input className="form-control form-control-lg" type="email" id="email" name={"email"} placeholder="Email" onChange={this.props.onChange} />
            </div>
            <p id="special">This information won't be given to any third-party websites.</p>
            <p id="byClicking">By clicking "Submit" you agree to our <Link to={'/privacy'} className="link">Privacy Policy</Link></p>

			        <Button variant="primary" type="submit" className="link">
			        <Link to={'/submit'}>Submit</Link></Button>

        </form>
			</Form>
		)			
	}
}

export default Forms;