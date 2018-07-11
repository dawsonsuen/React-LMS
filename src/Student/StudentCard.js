import React, {Component, Children} from 'react';
import { Link } from 'react-router-dom';
import StudentDetailView from './StudentDetailView';


export default function StudentCard(props) {
    

    
    const {Name,CreditLimited,StudentFee,Id} = props.student;
    
    return (
    <div className='coursecard'>
        <div className="thumbnail">
          
            <h4>{Name}</h4>
        
            <span>CreditLimited: {CreditLimited}</span>|
            <span>StudentFee: {StudentFee}</span>|
        </div>
          
        <div className='action'>

              <Link to={`/students/${Id}`} className="btn detail glyphicon glyphicon-info-sign"></Link>
              <Link to={`/students/edit/${Id}`} className='btn edit glyphicon glyphicon-pencil'></Link>
  
        </div>
        

    </div>
  );
}
  








