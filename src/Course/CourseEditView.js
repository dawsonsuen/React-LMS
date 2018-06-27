import React, {Component} from 'react';
import { fetchCourseById } from '../api/course';
// import Button, {LoadingButton} from '../UI/Button';
export default class CourseEditView extends Component {
    constructor(props){
        super(props);
        if (this._isNEW()) {
            this.state={course: {}};
        }
        else {
            const {course} = props.location;

            this.state={course:{}};

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    _isNEW() {
        const {Id} = this.props.match.params;
        return Id==='NEW';
    }

    handleInputChange(event) {
        const {name,value} = event.target;
        const course = {...this.state.course};
        course[name]=value;
        this.setState({course});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({isSaving:true});
        const {course} = this.state;
        setTimeout(()=>{
            this.setState({isSaving:false});
            alert('Detail Saved');
        },2000);
    }
    handleCancel(event){
        this.props.history.push('/courses');
    }
    componentDidMount() {

        const {Id} =this.props.match.params
        if ('NEW'=== Id) {
            this.setState({course:{}, isEditing: true})
        return;
        }

        fetchCourseById(Id)
        .then(response => {
            this.setState({course:response.data});
        })
    }

    render() {
        const {course} = this.state;
        const inputProps =(placeholder, attr, ...rest) =>({
            placeholder,
            name: attr,
            value: course[attr] || '',
            className: 'form-control',
            onChange: this.handleInputChange.bind(this),

        });
            return (
                
                <div className='coursedetail'>
                <div className='thumbnail'>
                    <table border='1'>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                    </tr>
                    <tr>
                        <td><input {...inputProps('CourseCode','CourseCode')}
                            />
                        </td>
                        <td><input {...inputProps('Name','Name')}/></td>
                    </tr>
                    <tr>
                        <th>Credit</th>
                        <th>Max Number</th>
                    </tr>
                    <tr>
                        <td>24</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <th colSpan="2">Description</th>
                    </tr>
                    <td colSpan="2">Math is science.</td>
                    </table>
                </div>
                </div>
            )
            
         
        

        
    
    }
}