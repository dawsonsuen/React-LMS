import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class CourseDetailView extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoading: false,
            error: null,
            course: null
        };
    }
    render(){
        return (
        <div>
          {/* <h4>{props.course.Name}</h4> */}
        </div>
        )    
}
}




