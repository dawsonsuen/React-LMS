import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/topnav.css'

export default class TopNav extends React.Component {

  render() {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link to="/" className="navbar-brand">
            <img src='./favicon.ico' style={{height:20}} alt="logo"/>
          </Link>  
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            
            <li>
              <Link to="/students">Students</Link>
            </li>
            

            <li>
              <Link to="/lecturers">Lecturers</Link>
            </li>
          </ul>
          {/* <ul className="nav navbar-nav navbar-right">
            {auth.loggedIn ?
              <DropDown/>:
              <li>
                <Link to="/signin">Sign in</Link>
              </li>
            }
          </ul> */}
        </div>
      </div> 
    </nav>
  )
  }
}