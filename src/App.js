import React from 'react';
import { Layout} from 'antd';
import Routes from './App/Routes';
import SideBar from './App/SideBar';
import TopNav from './App/TopNav';
import Foot from './App/Foot';

export default function App() {
	const { Header, Footer, Sider, Content } = Layout;

	return (

		<Layout>
				<TopNav/>
					<Routes/>
				
				<Foot/>
		</Layout>
	);
}