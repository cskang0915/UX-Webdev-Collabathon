import React, {Component} from 'react';
import Forms from './Forms';
import { Link } from 'react-router-dom';
import Nav from './Nav'
import Button from 'react-bootstrap/Button' 


class Header extends Component {

  state = {
    first_name:'',
    last_name:'',
    email: '',
    topic: 2,
    frequency: 3
  }
  onChange = (event) => {
    this.setState({ 
      [event.target.name] : event.target.value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    return fetch('http://localhost:3000/api/subscribers', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        topic: 2,
        frequency: 3
      })
    })
    .then(res => {
      return res.json()
    })
    .then(data => this.setState({
      first_name: '',
      last_name: '',
      email: '',
      topic: 2,
      frequency: 3
    }))
    .catch(error => console.log(error))
  }

  render() {
    return (
    <>
      <Nav />
      <header className='main'>
        <Forms {...this.state} 
            handleSubmit={this.handleSubmit}
            onChange={this.onChange}
        />
      </header>
    </>
    );
  }
  
};

export default Header;