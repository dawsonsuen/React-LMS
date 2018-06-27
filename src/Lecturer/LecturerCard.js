import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import LecturerDetailView from './LecturerDetailView';


export default function LecturerCard(props) {
      
    const {Name,LecturerDetail} = props.lecturer;
    return (
    <div className='coursecard'>
        <div className="thumbnail">
          
            <h4 >{Name}</h4>
            <span>Detail: {LecturerDetail.detail}</span>|
            <span>LecturerId: {LecturerDetail.LecturerId}</span>|

        </div>
          
        <div className='action'>
            
              <Link to='/lecturers/:id' className="btn detail">Detail</Link>
              <Link to='/lecturers/edit/:id' className='btn edit'>Edit</Link>
              <Link to='/lecturers/edit/NEW' className="btn add">Add</Link>
        </div>
        

    </div>
  );
  
}  







