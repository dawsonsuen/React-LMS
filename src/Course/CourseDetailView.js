import React, {Component} from 'react';
import { fetchCourseById } from '../api/course';
import { Layout} from 'antd';

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
        
        const {Name, CourseCode, Credit, MaxNumber} = this.state.course;
        return (
            <Layout style={{ padding: '0 24px 24px'}} className='container'>
                    <table border='1' className="table table-bordered">
                    <tr>
                        <th>Course Code</th>
                        <td>{CourseCode}</td>                    
                    </tr>
                    
                    <tr>
                    <th>Course Name</th>

                        <td>{Name}</td>
                    </tr>
                    <tr>
                        <th>Credit</th>
                        <td>{Credit}</td>

                    </tr>
                    
                    <tr>
                    <th>Max Number</th>

                        <td>{MaxNumber}</td>
                    </tr>
                    
                    <tr>
                        <th>Description</th>
                        <td>Introduction to computers and associated systems.</td>
                    </tr>
                    </table>
        </Layout>
        
        )    
    }
}




