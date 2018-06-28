import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';

import {
	BrowserRouter as Router,
} from 'react-router-dom';
import './styles';
import App from './App';
<<<<<<< HEAD
axios.defaults.baseURL = 'https://dawsonreactlms.azurewebsites.net/api';
=======
axios.defaults.baseURL = 'https://lmsdemomar.azurewebsites.net/api';
>>>>>>> 2c822555c07ee3e7814d26436410ec54221d24a8

ReactDOM.render(
	<Router>
		<App/>
	</Router>,
	document.getElementById('root'),
);
