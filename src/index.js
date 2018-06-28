import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';

import {
	BrowserRouter as Router,
} from 'react-router-dom';
import './styles';
import App from './App';
axios.defaults.baseURL = 'http://dawsonreactlms.azurewebsites.net/api';

ReactDOM.render(
	<Router>
		<App/>
	</Router>,
	document.getElementById('root'),
);
