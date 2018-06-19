import React, { Component } from 'react';

import Routes from './App/Routes';

import TopNav from './App/TopNav';
export default function App() {
	return (
		<div>
			
			<TopNav/>
			
			<main className="container">
			<Routes/>
			</main>
		</div>	
	);
}