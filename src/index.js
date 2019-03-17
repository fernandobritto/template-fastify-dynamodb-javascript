import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import AppRouters from './routers';


import './index.css';


render(
	<Router>
		<AppRouters />
	</Router>,
	 document.getElementById('root')
);
