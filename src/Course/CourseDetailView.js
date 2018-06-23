import React, {Component} from 'react';
import axios from 'axios';
import { fetchCourseById } from '../api/course';

export default class CourseDetailView extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoading: false,
            error: null,
            course: null
        };
    }
    
    componentDidMount(){

        const {id} = this.props.match.params;
        this.setState({isLoading: true});
        // fetchCourseById(id)
        // .then(response => {
        //     console.log(response);
        //     this.setState({course: response.data});
        // })
    }
    render(){

        return (
        <div className='coursedetail'>
          <h4>{this.props.match.params.id.Name}</h4>
        </div>
        )    
}
}




