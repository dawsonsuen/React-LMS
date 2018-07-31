import React, {Component} from 'react';
import { fetchLecturerById, saveLecturer, updateLecturer } from '../api/lecturer';
import Button from '../UI/Button';
import { Layout } from 'antd';

export default class LecturerEditView extends Component {
    constructor(props){
        super(props);
        if (this._isNEW()) {
            this.state={lecturer: {}};
        }
        else {
            const {lecturer} = props.location;
            this.state={lecturer:{}};
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    _isNEW() {
        const {Id} = this.props.match.params;
        return Id==='NEW';
    }

    handleInputChange(event) {
        const {name,value} = event.target;
        const lecturer = {...this.state.lecturer};
        lecturer[name]=value;
        this.setState({lecturer});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({isSaving:true});
        const {Id} = this.state.lecturer;
        const data = this.state.lecturer;
        if (this._isNEW()) {
            saveLecturer(data)
            .then(response => {
                this.setState({lecturer: response.data});
            })
        } else {
            updateLecturer(Id,data)
            .then(response => {
                this.setState({lecturer:response.data});
            })
        }
        
        
        setTimeout(()=>{
            this.setState({isSaving:false});
            alert('Detail Saved');
        },2000);
    }

    handleCancel(event){
        this.props.history.push('/lecturers');
    }

componentDidMount() {

    const {Id} =this.props.match.params
        if ('NEW'=== Id) {
            this.setState({lecturer:{}, isEditing: true})
        return;
        }

        fetchLecturerById(Id)
        .then(response => {
            this.setState({lecturer:response.data});
        })
}
render() {
    const {lecturer} = this.state;
    const inputProps =(placeholder, attr, ...rest) =>({
        placeholder,
        name: attr,
        value: lecturer[attr] || '',
        className: 'form-control',
        onChange: this.handleInputChange.bind(this),

    });
        return (
        <Layout style={{ padding: '0 24px 24px'}} className='container'>

            <form onSubmit={this.handleSubmit}>
            
                <table border='1' className="table table-bordered">
                <tr>
                    <th>LecturerId</th>
                    <td><input {...inputProps('LecturerId','LecturerId')}/></td>

                </tr>
                
                <tr>
                    <th>Name</th>

                    <td><input {...inputProps('Name','Name')}/></td>
                </tr>
                
                <tr>
                    <th>Payroll</th>

                    <td><input {...inputProps('Payroll','Payroll')}/></td>

                </tr>
                
                <tr>
                    <th>Feedback</th>

                    <td><input {...inputProps('Feedback','Feedback')}/></td>
                </tr>
                
                {/* <tr>
                    <th>Description</th>
                    <td>Math is science.</td>

                </tr> */}
                </table>
                <Button className='save'>Save</Button> 
                
            
            </form>
        </Layout>
        )
    }
}