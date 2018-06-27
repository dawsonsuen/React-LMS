import React, {Component} from 'react';
import axios from 'axios';
import { fetchCourseById } from '../api/course';
import CourseCard from './CourseCard';
import CoursesView from './CoursesView';

export default class CourseDetailView extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoading: false,
            error: null,
            course: {}
        };

    }

    componentDidMount(){

        const {Id} = this.props.match.params;
        this.setState({isLoading: true});
        fetchCourseById(Id)
        .then(response => {
            this.setState({course: response.data});
        })
    }
    render(){
        const {Name, CourseCode} = this.state.course;
        return (
        <div className='coursedetail'>
                <div className='thumbnail'>
                    <table border='1'>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                    </tr>
                    <tr>
                        <td>{CourseCode}</td>
                        <td>{Name}</td>
                    </tr>
                    <tr>
                        <th>Credit</th>
                        <th>Max Number</th>
                    </tr>
                    <tr>
                        <td>24</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <th colSpan="2">Description</th>
                    </tr>
                    <td colSpan="2">Math is science.</td>
                    </table>
                </div>
        </div>
        
        )    
    }
}




