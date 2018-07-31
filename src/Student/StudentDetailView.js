import React, {Component} from 'react';
import { fetchStudentById } from '../api/student';
import { Layout} from 'antd';

export default class StudentDetailView extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoading: false,
            error: null,
            student: {}
        };

    }

    componentDidMount(){

        const {Id} = this.props.match.params;
        this.setState({isLoading: true});
        fetchStudentById(Id)
        .then(response => {
            this.setState({student: response.data});
        })
    }
    render(){
        const {Name,CreditLimited,StudentFee,StudentId} = this.state.student;
        return (
            <Layout style={{ padding: '0 24px 24px'}} className='container'>
                    <table border='1' className="table table-bordered">
                    <tr>
                        <th>StudentId</th>
                        <td>{StudentId}</td>

                    </tr>
                    
                    <tr>
                        <th>Name</th>

                        <td>{Name}</td>
                    </tr>
                    
                    <tr>
                        <th>CreditLimited</th>
                        <td>{CreditLimited}</td>

                    </tr>
                    
                    <tr>
                        <th>Student Fee</th>

                        <td>{StudentFee}</td>
                    </tr>
                    
                    <tr>
                        <th>Description</th>
                        <td>Leo is a freshman.</td>

                    </tr>
                    </table>
            </Layout>
        
        )    
    }
}




