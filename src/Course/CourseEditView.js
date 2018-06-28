import React, {Component} from 'react';
import { fetchCourseById, saveCourse, undateCourse } from '../api/course';
import Button, {LoadingButton} from '../UI/Button';
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
        const {Id} = this.state.course;
        const data = this.state.course;
        if (this._isNEW()) {
            saveCourse(data)
            .then(response => {
                this.setState({course: response.data});
            })
        } else {
            undateCourse(Id,data)
            .then(response => {
                this.setState({course:response.data});
            })
        }
        
        
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
                
                <form className='coursedetail' onSubmit={this.handleSubmit}>
                <div className='thumbnail'>
                
                    <table border='1'>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                    </tr>
                    <tr>
                        <td><input {...inputProps('CourseCode','CourseCode')}/>
                        </td>
                        <td><input {...inputProps('Name','Name')}/></td>
                    </tr>
                    <tr>
                        <th>Credit</th>
                        <th>Max Number</th>
                    </tr>
                    <tr>
                        <td><input {...inputProps('Credit','Credit')}/></td>
                        <td><input {...inputProps('MaxNumber','MaxNumber')}/></td>
                    </tr>
                    
                    {/* <tr>
                        <th colSpan="2">Description</th>
                    </tr>
                    <td colSpan="2">Math is science.</td> */}
                    </table>
                    <Button>Save</Button> 
                    
                </div>
                
                </form>


                // <form>
                //     <div className='coursedetail'>
                //         <label>
                //             Code
                //         </label>
                //         <input
                //             className='form-control'
                //             name='CourseCode'
                //             value={course.CousreCode || ''}
                //             onChange = {this.handleInputChange.bind(this)}
                //         />
                //     </div>
                // </form>
            )
            
         
        

        
    
    }
}