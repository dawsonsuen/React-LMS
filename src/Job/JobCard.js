// import React from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { Card, Icon, Avatar } from 'antd';

// export default function JobCard(props) {
//     const {address,jobNumber,Id,description} = props.job;
//     const { Meta } = Card;

//     return (
//       <Card
//         style={{ width: 250,float:'left',margin:'20px 10px' }}
//         // cover={<img alt="example" src="https://lh3.googleusercontent.com/taEY8PPiQABSVR2R-DRN3fmTiu6y2t10kB3gu-xyTyyiblPrUwQ_AfnFzRpyQ0T3plDxTlJteaGJLtoJLcMH0H7XAwruPg=s688" />}

//         actions={[<Link to={`/jobs/${Id}`} className="btn detail glyphicon glyphicon-info-sign"/>,<Link to={`/jobs/edit/${Id}`} className='btn edit glyphicon glyphicon-pencil'/>,<Link to="/jobs" className='btn delete glyphicon glyphicon-trash' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) axios.delete(`/job/${Id}`) } } />]}
//       >
//         <Meta
//           title={jobNumber}
//           description={'Description: '+`${description}`}
//         />
//       </Card>
//   );
// }
  








