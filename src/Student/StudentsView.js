import React, {Component} from 'react';
import StudentCard from './StudentCard';
import {fetchStudents} from '../api/student';
import { Link } from 'react-router-dom';
import Button, {LoadingButton} from '../UI/Button';

export default class StudentsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            students: [],
        };
    }

    
    
    componentDidMount() {
        fetchStudents()
        .then(response => {
            this.setState({students: response.data});
        })
        
    }


    render() {
        
        const {isLoading} = this.state; 
        if (isLoading)
            return <div className='loading'>Loading student</div>;
        return (
            <div className='coursesview'>
                <div className='search'>
                    Search By
                    <input type="radio" checked/>
                    StudentId
                    <input type="radio"/>
                    Name
                    <input type="search" className='text' className="glyphicon glyphicon-search"/>
                    <span className="glyphicon glyphicon-search"></span>
                    <Link to = '/students/edit/NEW' className='btn btn-sm btn-primary' style={{margin:'10px'}}>
                    Add new student
                    </Link>
                    <hr></hr>
                    
                </div>
                
                
                <div className="row">
                    {this.state.students.map(student => <StudentCard student={student} key={student.Id}/>)}
                </div>
                
            </div>
        ) 
    }
}    