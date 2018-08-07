import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import CoursesView from '../Course/CoursesView';
import CourseDetailView from'../Course/CourseDetailView';
import CourseEditView from'../Course/CourseEditView';
import LecturersView from '../Lecturer/LecturersView';
import LecturerDetailView from'../Lecturer/LecturerDetailView';
import LecturerEditView from '../Lecturer/LecturerEditView';
import StudentsView from'../Student/StudentsView';
import StudentDetailView from'../Student/StudentDetailView';
import StudentEditView from '../Student/StudentEditView';
import MyDetail from '../User/MyDetail';
import SigninView from'../User/SigninView';
import Register from '../User/Register';
import {fakeAuth} from '../User/SigninView';
import { Layout } from 'antd';
import Profile from '../User/Profile';
const { Content } = Layout;

export default () =>(

    <Content>
        <ProtectedRoute exact path="/" component={CoursesView}/>
        <ProtectedRoute exact path="/courses" component={CoursesView}/>
        <Route exact path="/courses/:Id" component={CourseDetailView}/>
        <Route exact path="/courses/edit/:Id" component={CourseEditView}/>

        <ProtectedRoute exact path="/lecturers" component={LecturersView}/>
        <Route exact path="/lecturers/:Id" component={LecturerDetailView}/>
        <Route exact path="/lecturers/edit/:Id" component={LecturerEditView}/>

        <ProtectedRoute exact path="/students" component={StudentsView}/>
        <Route exact path="/students/:Id" component={StudentDetailView}/>
        <Route exact path="/students/edit/:Id" component={StudentEditView}/>
        <Route exact path="/mydetail/:Id" component={MyDetail}/>
        <Route exact path="/signin" component={SigninView}/>
        <Route exact path="/register" component={Register}/>
        <ProtectedRoute exact path="/profile" component={Profile}/>
    </Content>
);
const ProtectedRoute = ({component:ProtectedComponent, ...rest})=>(
    <Route 
        {...rest} 
        render={props =>
         fakeAuth.isAuthenticated ? (
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
