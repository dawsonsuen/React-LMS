import React, {Component} from 'react';
import { fetchStudentById } from '../api/student';

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
        const {Name,CreditLimited,StudentFee,Id} = this.state.student;
        return (
        <div className='coursedetail'>
                    <table border='1' className="table-striped table-bordered">
                    <tr>
                        <th>Student Id</th>
                        <th>Student Name</th>
                    </tr>
                    <tbody>
                    <tr>
                        <td>{Id}</td>
                        <td>{Name}</td>
                    </tr>
                    </tbody>
                    <tr>
                        <th>CreditLimited</th>
                        <th>Student Fee</th>
                    </tr>
                    <tbody>
                    <tr>
                        <td>{CreditLimited}</td>
                        <td>{StudentFee}</td>
                    </tr>
                    </tbody>
                    {/* <tr>
                        <th colSpan="2">Description</th>
                    </tr>
                    <td colSpan="2">Math is science.</td> */}
                    </table>
        </div>
        
        )    
    }
}




