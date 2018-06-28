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
                <div className='thumbnail'>
                    <table border='1'>
                    <tr>
                        <th>LecturerId</th>
                        <th>Name</th>
                    </tr>
                    <tr>
                        <td>{Id}</td>
                        <td>{Name}</td>
                    </tr>
                    <tr>
                        <th>Payroll</th>
                        <th>Feedback</th>
                    </tr>
                    <tr>
                        <td>{Payroll}</td>
                        <td>{Feedback}</td>
                    </tr>
                    {/* <tr>
                        <th colSpan="2">Description</th>
                    </tr>
                    <td colSpan="2">Dr Leonards teaches Math.</td> */}
                    </table>
                </div>
        </div>
        
        )    
    }
}




