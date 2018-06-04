import React from 'react';
import {Route, Redirect} from 'react-router-dom';
// import Auth from '../utils/auth';
import CoursesView from '../Course/CoursesView';
// import CourseDetailView from'../Course/CourseDetailView';
// import LecturersView from'../Lecturer/LecturersView';
// import StudentsView from'../Student/StudentsView';
// import StudentDetailView from'../Student/StudentDetailView';
// import SigninView from'.//User/SigninView';
export default () =>((
    <div>
        <Route exact path="/" component={()=><div>{'this is home'}</div>}/>
        <Route exact path="/courses" component={CoursesView}/>
        {/* <Route exact path="/courses/:id" component={CourseDetailView}/>
        <Route exact path="/students" component={StudentsView}/>
        <ProtectedRoute exact path="/students/:id" component={StudentDetailView}/>
        <ProtectedRoute exact path="/lecturers" component={LecturersView}/>
        <Route exact path="/signin" component={SigninView}/> */}
    </div>
));
// const ProtectedRoute = ({component:ProtectedComponent, ...rest}) 
//     <Route {...rest} render={props =>(
//         Auth.loggedIn ? <ProtectedComponent {...props} />:
//             <Redirect to = {{
//                 pathname:'/signin', state:{from: props.location}
//             }}/>
//     )}/>
