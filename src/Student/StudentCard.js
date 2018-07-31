import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Avatar } from 'antd';

export default function StudentCard(props) {
    

    
    const {Name,StudentId,Id} = props.student;
    const { Meta } = Card;

    return (
        <Card
        style={{ width: 250,float:'left',margin:'20px 10px' }}
        actions={[<Link to={`/students/${Id}`} className="btn detail glyphicon glyphicon-info-sign"/>,<Link to={`/students/edit/${Id}`} className='btn edit glyphicon glyphicon-pencil'/>,<Link to="/students" className='btn delete glyphicon glyphicon-trash' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) axios.delete(`/student/${Id}`) } } />]}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={Name}
          description={'Student ID: '+`${StudentId}`}
        />
      </Card>
  );
}
  








