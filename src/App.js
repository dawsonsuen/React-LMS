import React from 'react';
import { Layout} from 'antd';

import Routes from './App/Routes';
import SideBar from './App/SideBar';
import TopNav from './App/TopNav';
export default function App() {

	return (
		<div className='root'>
				<TopNav/>
				<Layout>
				<SideBar/>
				<Routes/>
				</Layout>
		</div>	
	);
}