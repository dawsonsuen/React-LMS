import React, {Component} from 'react';
import '../styles/course-card.css'
import { Link } from 'react-router-dom';
import CourseDetailView from './CourseDetailView';


export default function CourseCard(props) {
      
    // const {Name} = props.course;
    return (
    <div className='course-card'>
        <div className="thumbnail">
          
            <h4 >{props.course.Name}</h4>
            <span>CourseCode: {props.course.CourseCode}</span>|
            <span>Credit: 24</span>|
            <span>MaxNumber: 50</span>
            
            <div className='action'>
              <Link to="/courses/:id" className='detail'>Detail</Link>
            
              <Link to="/courses/edit/:id" className='edit'>Edit</Link>
            </div>

        </div>
        

    </div>
  );
  
}  








