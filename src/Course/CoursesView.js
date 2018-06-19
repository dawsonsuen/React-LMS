import React, {Component} from 'react';
import CourseCard from './CourseCard';
import axios from 'axios';
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

    componentDidMount() {
        this.loadCourses();
    }
    loadCourses(){
        this.setState({isLoading: true});
        axios.get('/course/1').then(response =>{
            console.log(response)

                this.setState({
                    courses:[response.data],
                    isLoading:false,
                });
            });
    }

    
    


    render() {
        const {isLoading} = this.state; 
        if (isLoading)
            return <span>Loading course</span>;
        return (
            
            <div className="row">
                <div className='search'>
                    Search By
                    <input type="radio" checked/>
                    CourseCode
                    <input type="radio"/>
                    Name
                    <input type="search" className='text'/>
                    
                
                <hr></hr>
                </div>
            {this.state.courses.map(course => <CourseCard course={course} key={course.Id}/>)}

            </div>

        ) 
    }
}    