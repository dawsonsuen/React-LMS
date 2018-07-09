import React, {Component, Children} from 'react';
import { Link } from 'react-router-dom';
import CourseDetailView from './CourseDetailView';


export default function CourseCard(props) {
    

    
    const {Name,CourseCode,Credit,MaxNumber,Id} = props.course;
    
    return (
    <div className='coursecard'>
        <div className="thumbnail">
          
            <h4>{Name}</h4>
        
            <span>CourseCode: {CourseCode}</span>|
            <span>Credit: {Credit}</span>|
            <span>MaxNumber: {MaxNumber}</span>
        </div>
          
        <div className='action'>

              <Link to={`/courses/${Id}`} className="btn detail glyphicon glyphicon-info-sign"></Link>
              <Link to={`/courses/edit/${Id}`} className='btn edit glyphicon glyphicon-pencil'></Link>
              <Link to={`/courses/delete/${Id}`} className='btn delete glyphicon glyphicon-trash'></Link>
  
        </div>
        

    </div>
  );
}
  








