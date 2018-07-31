import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;

export default class SideBar extends React.Component {
    render(){
        const { Sider } = Layout;

        return (
            <Sider className='sidebar' width={198} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" />User Profile</span>}>
            <Menu.Item key="1"><Link to="/mydetail/:Id">My Detail</Link></Menu.Item>
            <Menu.Item key="2"><Link to>Message</Link></Menu.Item>
            <Menu.Item key="3"><a target='_blank' href="https://login.live.com/">My Email</a></Menu.Item>
            <Menu.Item key="4"><Link to="/signin">Sign in</Link></Menu.Item>
          </SubMenu>
          
        </Menu>
      </Sider>
        )
    }
}
