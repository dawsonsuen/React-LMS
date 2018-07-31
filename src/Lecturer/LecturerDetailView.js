import React, {Component} from 'react';
import { fetchLecturerById } from '../api/lecturer';
import { Layout} from 'antd';

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
        const {Name,LecturerId,Payroll,Feedback} = this.state.lecturer;
        return (
            <Layout style={{ padding: '0 24px 24px'}} className='container'>
                    <table border='1' className="table table-bordered">
                    <tr>
                        <th>LecturerId</th>
                        <td>{LecturerId}</td>

                    </tr>
                    
                    <tr>
                        <th>Name</th>

                        <td>{Name}</td>
                    </tr>
                
                    <tr>
                        <th>Payroll</th>
                        <td>{Payroll}</td>

                    </tr>
                    
                    <tr>
                        <th>Feedback</th>

                        <td>{Feedback}</td>
                    </tr>
                    
                    <tr>
                        <th>Description</th>
                    
                        <td colSpan="2">Dr Leonards teaches Math.</td>
                    </tr>
                    </table>
            </Layout>
        
        )    
    }
}




