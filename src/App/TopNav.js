import React from 'react';
import { Link } from 'react-router-dom';

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
        </div>
        
        <div id="navbar">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link> 
            </li>
            <br></br>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <br></br>

            <li>
              <Link to="/students">Students</Link>
            </li>
            <br></br>


            <li>
              <Link to="/lecturers">Lecturers</Link>
            </li>
          
          <br></br>

            {/* {auth.loggedIn ?
              <DropDown/>: */}
              <li>
                <Link to="/signin">Sign in</Link>
              </li>
            {/* } */}
          </ul>
        </div>
      </div> 
    </nav>
  )
  }
}