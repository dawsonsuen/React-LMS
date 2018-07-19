import React, {Component} from 'react';
import { fetchLecturerById } from '../api/lecturer';

export default class LecturerDetailView extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoading: false,
            error: null,
            lecturer: {},
        };

    }

    componentDidMount(){

        const {Id} = this.props.match.params;
        this.setState({isLoading: true});
        fetchLecturerById(Id)
        .then(response => {
            this.setState({lecturer: response.data});
        })
        
    }
    render(){
        const {Name,Id,Payroll,Feedback} = this.state.lecturer;
        return (
        <div className='coursedetail'>
                    <table border='1' className="table-striped table-bordered">
                    <tr>
                        <th>LecturerId</th>
                        <th>Name</th>
                    </tr>
                    <tbody>
                    <tr>
                        <td>{Id}</td>
                        <td>{Name}</td>
                    </tr>
                    </tbody>
                    <tr>
                        <th>Payroll</th>
                        <th>Feedback</th>
                    </tr>
                    <tbody>
                    <tr>
                        <td>{Payroll}</td>
                        <td>{Feedback}</td>
                    </tr>
                    </tbody>
                    {/* <tr>
                        <th colSpan="2">Description</th>
                    </tr>
                    <td colSpan="2">Dr Leonards teaches Math.</td> */}
                    </table>
                </div>
        
        )    
    }
}




