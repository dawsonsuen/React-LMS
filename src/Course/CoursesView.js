import React, {Component} from 'react';
import CourseCard from './CourseCard';
import {fetchCourses} from '../api/course';
import { Link } from 'react-router-dom';
import Button, {LoadingButton} from '../UI/Button';

export default class CoursesView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            courses: [],
        };
    }

    
    
    componentDidMount() {
        fetchCourses()
        .then(response => {
            this.setState({courses: response.data});
        })
        // .catch(e=>{
        //     console.log('error fetching courses');
        //     console.log(e);
        //     alert('error fetching course')
        // });
    }


    render() {
        
        const {isLoading} = this.state; 
        if (isLoading)
            return <div className='loading'>Loading course</div>;
        return (
            <div className='coursesview'>
                <div className='search'>
                    Search By
                    <input type="radio" checked/>
                    CourseCode
                    <input type="radio"/>
                    Name
                    <input type="search" className='text' className="glyphicon glyphicon-search"/>
                    <span className="glyphicon glyphicon-search"></span>
                    <Link to = '/courses/edit/NEW' className='btn btn-sm btn-primary' style={{margin:'10px'}}>
                    Add new Course
                    </Link>
                    <hr></hr>
                    
                </div>
                
                
                <div className="row">
                    {this.state.courses.map(course => <CourseCard course={course} key={course.Id}/>)}
                </div>
                
            </div>
        ) 
    }
}    