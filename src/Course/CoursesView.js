import React, {Component} from 'react';
import CourseCard from './CourseCard';
import axios from 'axios';
import {fetchCourses} from '../api/course';
import { Link } from 'react-router-dom';
import CourseDetailView from './CourseDetailView';
export default class CoursesView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            courses: [],
        };
    }

    // loadCourses(){
    //     this.setState({isLoading: true});
    //     axios.get('/course').then(response =>{
    //         console.log(response)

    //             this.setState({
    //                 courses: response.data,
    //                 isLoading:false,
    //             });
    //         });
    //         .catch(e=>console.log(e));
    // }

    
    componentDidMount() {
        // this.loadCourses();
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
                    <input type="search" className='text'/>
                    <hr></hr>
                </div>
                <div className="row">
                    {this.state.courses.map(course => <CourseCard course={course} key={course.Id}/>)}
                </div>
            </div>
        ) 
    }
}    