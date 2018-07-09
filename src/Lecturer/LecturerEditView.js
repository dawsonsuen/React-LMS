import React, {Component} from 'react';
import { fetchLecturerById, saveLecturer, undateLecturer } from '../api/lecturer';
import Button, {LoadingButton} from '../UI/Button';
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
            undateLecturer(Id,data)
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
            
            <form className='coursedetail' onSubmit={this.handleSubmit}>
            
                <table border='1'>
                <tr>
                    <th>LecturerId</th>
                    <th>Name</th>
                </tr>
                <tr>
                    <td><input {...inputProps('Id','Id')}/>
                    </td>
                    <td><input {...inputProps('Name','Name')}/></td>
                </tr>
                <tr>
                    <th>Payroll</th>
                    <th>Feedback</th>
                </tr>
                <tr>
                    <td><input {...inputProps('Payroll','Payroll')}/></td>
                    <td><input {...inputProps('Feedback','Feedback')}/></td>
                </tr>
                
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