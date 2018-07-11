import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Auth from '../utils/Auth';
import CoursesView from '../Course/CoursesView';
import CourseDetailView from'../Course/CourseDetailView';
import CourseEditView from'../Course/CourseEditView';
import LecturersView from '../Lecturer/LecturersView';
import LecturerDetailView from'../Lecturer/LecturerDetailView';
import LecturerEditView from '../Lecturer/LecturerEditView';
import StudentsView from'../Student/StudentsView';
import StudentDetailView from'../Student/StudentDetailView';
import StudentEditView from '../Student/StudentEditView';
import SigninView from'../User/SigninView';
export default () =>(
    <div>
        <Route exact path="/" component={CoursesView}/>
        <Route exact path="/courses" component={CoursesView}/>
        <Route exact path="/courses/:Id" component={CourseDetailView}/>
        <Route exact path="/courses/edit/:Id" component={CourseEditView}/>

        <Route exact path="/lecturers" component={LecturersView}/>
        <Route exact path="/lecturers/:Id" component={LecturerDetailView}/>
        <Route exact path="/lecturers/edit/:Id" component={LecturerEditView}/>

        <Route exact path="/students" component={StudentsView}/>
        <Route exact path="/students/:Id" component={StudentDetailView}/>
        <Route exact path="/students/edit/:Id" component={StudentEditView}/>
        {/* <ProtectedRoute exact path="/students/:id" component={StudentDetailView}/>
        <ProtectedRoute exact path="/lecturers" component={LecturersView}/> */}
        <Route exact path="/signin" component={SigninView}/>
    </div>
);
const ProtectedRoute = ({component:ProtectedComponent, ...rest})=>(
    <Route 
        {...rest} 
        render={props =>
         Auth.loggedIn ? (
            <ProtectedComponent {...props} />
         ):(
            <Redirect to = {{
                pathname:'/signin', 
                state:{from: props.location}
            }}/>
            )
        }
    />
);
