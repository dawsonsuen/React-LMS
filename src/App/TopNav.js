import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon, Menu} from 'antd';

export default class TopNav extends React.Component {

  render() {
    const { Header, Content, Footer, Sider } = Layout;

  return (
    
<Layout>
<Header className="header">
      <div className="logo"></div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/" type="home">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/courses">Course</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/students">Student</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/lecturers">Lecturer</Link></Menu.Item>

      </Menu>
</Header>


</Layout>

  )
  }
}