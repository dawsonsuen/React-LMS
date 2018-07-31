import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Avatar } from 'antd';

export default function LecturerCard(props) {
    const {Name,LecturerId,Id} = props.lecturer;
    const { Meta } = Card;

    return (
    
      <Card
        style={{ width: 250,float:'left',margin:'20px 10px' }}
        actions={[<Link to={`/lecturers/${Id}`} className="btn detail glyphicon glyphicon-info-sign"/>,<Link to={`/lecturers/edit/${Id}`} className='btn edit glyphicon glyphicon-pencil'/>,<Link to="/lecturers" className='btn delete glyphicon glyphicon-trash' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) axios.delete(`/lecturer/${Id}`) } } />]}
      >
        <Meta
          avatar={<Avatar src="http://img.135q.com/2015-06/21/14348895300002.jpg" />}
          title={Name}
          description={'Lecturer ID: '+`${LecturerId}`}
        />
      </Card>
  );
  
}  







