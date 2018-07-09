import React, {Component} from 'react';
export default class CourseDelete extends Component {
    constructor(props){
        super(props);
    }
    deletePost(id){
        if(('Are you sure ?')){
          // Delete Post API call will be here !!
        }
      }
    render() {
        const {Id} =this.props.match.params

        return (
            <span onClick={this.deletePost.bind(this,Id)} className="glyphicon glyphicon-remove"></span>
        )

        
    }
}