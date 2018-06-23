import React, {Component} from 'react';
import axios from 'axios';
// import Button, {LoadingButton} from '../UI/Button';
export default class CourseEditView extends Component {
    constructor(props){
        super(props);
        if (this._isNEW()) {
            this.state={
            course: {}};
        }
        else {
            // let {course} = props.location.state;
            let {course} =props.match.params;
            this.state={course};
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    _isNEW() {
        const {id} = this.props.match.params;
        return id==='NEW';
    }

    handleInputChange(event) {
        const {name: fieldName,value} = event.target;
        this.setState({
            course: {
                ...this.state.course,
                [fieldName]: value,
            },
        });
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

componentDidMount() {

    const {id} =this.props.match
    if ('NEW'=== this.props.match.params.id) {
        this.setState({course:{}, isEditing: true})
        return;
    }
    // this.loadCourses(id)

}
    render() {
      return (
        <div className='course-edit'>
        fsdfsfs
          <h4>{this.props.match.params.Name}</h4>
        </div>
      )
    }
}