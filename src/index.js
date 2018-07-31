import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import {browserHistory} from 'react-router';
import {
	HashRouter as Router,
} from 'react-router-dom';
import './styles';
import App from './App';
axios.defaults.baseURL = 'https://dawsonlms.azurewebsites.net/api';

ReactDOM.render(

    <Router>
		<App/>
	</Router>,

	document.getElementById('root'),
);
