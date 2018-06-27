import React, {Component, Children} from 'react';
import { Link } from 'react-router-dom';
import CourseDetailView from './CourseDetailView';


export default function CourseCard(props) {
    const {Name,CourseCode,Credit,MaxNumber,Id} = props.course;
    return (
    <div className='coursecard'>
        <div className="thumbnail">
          
            <h4 >{Name}</h4>
            <span>CourseCode: {CourseCode}</span>|
            <span>Credit: {Credit}</span>|
            <span>MaxNumber: {MaxNumber}</span>
        </div>
          
        <div className='action'>
            
              <Link to={`/courses/${Id}`} className="btn detail">Detail</Link>
              <Link to={`/courses/edit/${Id}`} className='btn edit'>Edit</Link>
              <Link to='/courses/edit/NEW' className="btn add">Add</Link>
        </div>
        

    </div>
  );
  
}  








