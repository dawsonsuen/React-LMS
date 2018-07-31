import React, {Component} from 'react';
import { fetchCourseById, saveCourse, updateCourse } from '../api/course';
import Button from '../UI/Button.js';
import { Layout } from 'antd';

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
            updateCourse(Id,data)
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
            <Layout style={{ padding: '0 24px 24px'}} className='container'>

                <form onSubmit={this.handleSubmit}>
                
                    <table border='1' className="table table-bordered">
                    <tr>
                        <th>Course Code</th>
                        <td><input {...inputProps('CourseCode','CourseCode')}/></td>

                    </tr>
                    
                    <tr>
                        
                        <th>Course Name</th>

                        <td><input {...inputProps('Name','Name')}/></td>
                    </tr>
                    
                    <tr>
                        <th>Credit</th>
                        <td><input {...inputProps('Credit','Credit')}/></td>

                    </tr>
                    
                    <tr>
                    <th>Max Number</th>

                        <td><input {...inputProps('MaxNumber','MaxNumber')}/></td>
                    </tr>
                    
                    
                    </table>
                    <Button className='save'>Save</Button>
                
                </form>
               </Layout>
            )
            
         
        

        
    
    }
}