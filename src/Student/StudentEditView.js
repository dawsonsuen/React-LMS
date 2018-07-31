import React, {Component} from 'react';
import { fetchStudentById, saveStudent, updateStudent } from '../api/student';
import Button from '../UI/Button';
import { Layout } from 'antd';

export default class StudentEditView extends Component {
    constructor(props){
        super(props);
        if (this._isNEW()) {
            this.state={student: {}};
        }
        else {
            const {student} = props.location;
            this.state={student:{}};
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    _isNEW() {
        const {Id} = this.props.match.params;
        return Id==='NEW';
    }

    handleInputChange(event) {
        const {name,value} = event.target;
        const student = {...this.state.student};
        student[name]=value;
        this.setState({student});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({isSaving:true});
        const {Id} = this.state.student;
        const data = this.state.student;
        if (this._isNEW()) {
            saveStudent(data)
            .then(response => {
                this.setState({student: response.data});
            })
        } else {
            updateStudent(Id,data)
            .then(response => {
                this.setState({student:response.data});
            })
        }
        
        
        setTimeout(()=>{
            this.setState({isSaving:false});
            alert('Detail Saved');
        },2000);
    }

    handleCancel(event){
        this.props.history.push('/students');
    }

componentDidMount() {

    const {Id} =this.props.match.params
        if ('NEW'=== Id) {
            this.setState({student:{}, isEditing: true})
        return;
        }

        fetchStudentById(Id)
        .then(response => {
            this.setState({student:response.data});
        })
}
render() {
    const {student} = this.state;
    const inputProps =(placeholder, attr, ...rest) =>({
        placeholder,
        name: attr,
        value: student[attr] || '',
        className: 'form-control',
        onChange: this.handleInputChange.bind(this),

    });
        return (
            <Layout style={{ padding: '0 24px 24px'}} className='container'>

            <form onSubmit={this.handleSubmit}>
            
                <table border='1' className="table table-bordered">
                <tr>
                    <th>Student Id</th>
                    <td><input {...inputProps('StudentId','StudentId')}/></td>
                </tr>
                <tr>
                    <th>Name</th>

                    <td><input {...inputProps('Name','Name')}/></td>
                </tr>
                <tr>
                    <th>CreditLimited</th>
                    <td><input {...inputProps('CreditedLimited','CreditLimited')}/></td>
                </tr>
                <tr>
                    <th>Student Fee</th>

                    <td><input {...inputProps('StudentFee','StudentFee')}/></td>
                </tr>
                {/* <tr>
                    <th colSpan="2">Description</th>
                </tr>
                <td colSpan="2">Math is science.</td> */}
                </table>
                <Button className='save'>Save</Button> 
            
            </form>
            </Layout>
        )
    }
}