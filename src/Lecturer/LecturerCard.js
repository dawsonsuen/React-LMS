import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import LecturerDetailView from './LecturerDetailView';


export default function LecturerCard(props) {
      
    const {Name,Payroll,Feedback,Id} = props.lecturer;
    return (
    <div className='coursecard'>
        <div className="thumbnail">
          
            <h4 >{Name}</h4>
            <span>Payroll: {Payroll}</span>|
            <span>Feedback: {Feedback}</span>|

        </div>
          
        <div className='action'>
            
              <Link to={`/lecturers/${Id}`} className="btn detail">Detail</Link>
              <Link to={`/lecturers/edit/${Id}`} className='btn edit'>Edit</Link>
        </div>
        

    </div>
  );
  
}  







