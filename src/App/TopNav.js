import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu} from 'antd';

export default class TopNav extends React.Component {

  render() {
    const { Header, Content, Footer, Sider } = Layout;

  return (
    // <nav className="navbar navbar-inverse">
    //   <div className="navbar-header">
    //         LMS
    //       <button
    //         type="button"
    //         className="navbar-toggle collapsed"
    //         data-toggle="collapse"
    //         data-target="#navbar"
    //         aria-expanded="false"
    //         aria-controls="navbar"
    //       >
    //         <span className="sr-only">Toggle navigation</span>
    //         <span className="icon-bar" />
    //         <span className="icon-bar" />
    //         <span className="icon-bar" />
    //       </button>
    //     </div>
      
    //   <div className="container">
        
        
    //     <div id="navbar" className="navbar-collapse collapse">

    //       <ul className="nav navbar-nav" >
    //         <li className="nav-item">
    //           <Link to="/" >Home</Link> 
    //         </li>
    //         <br></br>
    //         <li>
    //           <Link to="/courses">Course Management</Link>
    //         </li>
    //         <br></br>

    //         <li>
    //           <Link to="/students">Student Management</Link>
    //         </li>
    //         <br></br>


    //         <li>
    //           <Link to="/lecturers">Lecturer Management</Link>
    //         </li>
          
    //       <br></br>

    //         {/* {auth.loggedIn ?
    //           <DropDown/>: */}
    //           <li>
    //             <Link to="/signin">Sign in</Link>
    //           </li>
    //         {/* } */}
    //       </ul>
    //     </div>
    //   </div> 
    // </nav>
<Layout>
<Header className="header">
      <div className="logo"></div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/" >Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/courses">Course</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/students">Student</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/lecturers">Lecturer</Link></Menu.Item>

      </Menu>
</Header>


</Layout>

  )
  }
}