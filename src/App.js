import React, { Component } from 'react';

import Routes from './App/Routes';

import TopNav from './App/TopNav';
export default function App() {
	return (
		<div className='root'>
			
			<TopNav/>
			
			<main>
			<Routes/>
			</main>
		</div>	
	);
}