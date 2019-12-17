import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import PrivacyPolicy from '../components/PrivacyPolicy';

export default (
	<div>
		<Route exact path='/' component={ Home }/>
		<Route path='/privacy' component={ PrivacyPolicy }/>
	</div>
		
);
