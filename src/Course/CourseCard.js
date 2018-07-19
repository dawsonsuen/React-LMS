import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Icon, Avatar } from 'antd';

export default function CourseCard(props) {
    

    
    const {Name,CourseCode,Credit,MaxNumber,Id} = props.course;
    const { Meta } = Card;

    return (
      <Card
        style={{ width: 250,float:'left',margin:'20px 10px' }}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        actions={[<Link to={`/courses/${Id}`} className="btn detail glyphicon glyphicon-info-sign"/>,<Link to={`/courses/edit/${Id}`} className='btn edit glyphicon glyphicon-pencil'/>,<Link to="/courses" className='btn delete glyphicon glyphicon-trash' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) axios.delete(`/course/${Id}`) } } />]}
      >
        <Meta
          // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={Name}
          description={CourseCode}
        />
      </Card>
  );
}
  








