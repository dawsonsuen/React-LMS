import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function CourseCard(props) {
    

    
    const {Name,CourseCode,Credit,MaxNumber,Id} = props.course;
    
    return (
    <div className='coursecard'>
        <div className="thumbnail">
          
            <h4>{Name}</h4>
        
            <span>CourseCode: {CourseCode}</span>|
            <span>Credit: {Credit}</span>|
            <span>MaxNumber: {MaxNumber}</span>
       
          
        <div className='action'>

              <Link to={`/courses/${Id}`} className="btn detail glyphicon glyphicon-info-sign"/>
              <Link to={`/courses/edit/${Id}`} className='btn edit glyphicon glyphicon-pencil'/>
              <Link to="/courses" className='btn delete glyphicon glyphicon-trash' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) axios.delete(`/course/${Id}`) } } />

        </div>
        </div>

    </div>
  );
}
  








