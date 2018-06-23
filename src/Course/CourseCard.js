import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CourseDetailView from './CourseDetailView';


export default function CourseCard(props) {
      
    const {Name,CourseCode,Credit,MaxNumber} = props.course;
    return (
    <div className='coursecard'>
        <div className="thumbnail">
          
            <h4 >{Name}</h4>
            <span>CourseCode: {CourseCode}</span>|
            <span>Credit: 12{Credit}</span>|
            <span>MaxNumber: 60{MaxNumber}</span>
        </div>
          
        <div className='action'>
            
              <Link to='/courses/:id' className="btn detail">Detail</Link>
              <Link to='/courses/edit/:id' className='btn edit'>Edit</Link>
              <Link to='/courses/edit/NEW' className="btn add">Add</Link>
        </div>
        

    </div>
  );
  
}  








