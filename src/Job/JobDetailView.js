import React, {Component} from 'react';
import { fetchJobById } from '../api/job';
import { Layout} from 'antd';

export default class JobDetailView extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoading: false,
            error: null,
            job: {}
        };

    }

    componentDidMount(){

        const {Id} = this.props.match.params;
        this.setState({isLoading: true});
        fetchJobById(Id)
        .then(response => {
            this.setState({job: response.data});
        })
    }
    render(){
        
        const {Name, jobNumber, Credit, MaxNumber} = this.state.job;
        return (
            <Layout style={{ padding: '0 24px 24px'}} className='container'>
                    <table border='1' className="table table-bordered">
                    <tr>
                        <th>Job Number</th>
                        <td>{jobNumber}</td>                    
                    </tr>
                    
                    <tr>
                    <th>Job Name</th>

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




