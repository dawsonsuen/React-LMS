import React, {Component} from 'react';
import { fetchStudentById, saveStudent, undateStudent } from '../api/student';
import Button, {LoadingButton} from '../UI/Button';
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
            undateStudent(Id,data)
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
            
            <form className='courseedit' onSubmit={this.handleSubmit}>
            
                <table border='1' className="table-striped table-bordered">
                <tr>
                    <th>Student Id</th>
                    <th>Name</th>
                </tr>
                <tbody>
                <tr>
                    <td><input {...inputProps('Id','Id')}/>
                    </td>
                    <td><input {...inputProps('Name','Name')}/></td>
                </tr>
                </tbody>
                <tr>
                    <th>CreditLimited</th>
                    <th>Student Fee</th>
                </tr>
                <tbody>
                <tr>
                    <td><input {...inputProps('CreditedLimited','CreditLimited')}/></td>
                    <td><input {...inputProps('StudentFee','StudentFee')}/></td>
                </tr>
                </tbody>
                {/* <tr>
                    <th colSpan="2">Description</th>
                </tr>
                <td colSpan="2">Math is science.</td> */}
                </table>
                <Button>Save</Button> 
                
            
            </form>
        )
    }
}