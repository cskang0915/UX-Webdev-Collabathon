import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Submit from '../components/Submit';
import Updated from '../components/Updated';

export default (
	<div>
		<Route exact path='/' component={ Home }/>
		<Route path='/privacy' component={ PrivacyPolicy }/>
		<Route path='/submit' component={ Submit }/>
		<Route path='/updated' component={ Updated }/>
	</div>
		
);

