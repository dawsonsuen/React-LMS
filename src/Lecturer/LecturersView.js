import React, {Component} from 'react';
import LecturerCard from './LecturerCard';
import {fetchLecturers} from '../api/lecturer';
import { Link } from 'react-router-dom';
export default class LecturersView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            lecturers: [],
        };
    }


    componentDidMount() {
        fetchLecturers()
        .then(response => {
            this.setState({lecturers: response.data});
        })

    }


    render() {
        
        const {isLoading} = this.state; 
        if (isLoading)
            return <div className='loading'>Loading lecturer</div>;
        return (
            <div className='coursesview'>
                <div className='search'>
                    Search By
                    <input type="radio" checked/>
                    LecturerId
                    <input type="radio"/>
                    Name
                    <input type="search" className='text'/>
                    <Link to = '/lecturers/edit/NEW' className='btn btn-sm btn-primary'>
                    Add new Lecturer
                    </Link>
                    <hr></hr>
                </div>
                <div className="row">
                    {this.state.lecturers.map(lecturer => <LecturerCard lecturer={lecturer} key={lecturer.Id}/>)}
                </div>
            </div>
        ) 
    }
}    