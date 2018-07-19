import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
export default class SigninView extends React.Component {
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
          email:'',
          password:''
        };
    }

    handleEmailChange(e){
        this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }
    signIn(){
        // alert('Email address is ' + this.state.email + ' Password is ' + this.state.password);            
    }
    render() {
        
        return (
            
            <form className="form-signin">
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Sign in</button>

            </form>
            
        )
    }
}


// const FormItem = Form.Item;

// export default class SigninView extends React.Component {
//     constructor(props){
//         super(props);
//     }
    
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//       }
//     });
//   }

//   render() {
//     const { getFieldDecorator } = this.props.form;

//     return (
//       <Form onSubmit={this.handleSubmit} className="login-form">
//         <FormItem>
//           {getFieldDecorator('userName', {
//             rules: [{ required: true, message: 'Please input your username!' }],
//           })(
//             <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
//           )}
//         </FormItem>
//         <FormItem>
//           {getFieldDecorator('password', {
//             rules: [{ required: true, message: 'Please input your Password!' }],
//           })(
//             <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
//           )}
//         </FormItem>
//         <FormItem>
//           {getFieldDecorator('remember', {
//             valuePropName: 'checked',
//             initialValue: true,
//           })(
//             <Checkbox>Remember me</Checkbox>
//           )}
//           <a className="login-form-forgot" href="">Forgot password</a>
//           <Button type="primary" htmlType="submit" className="login-form-button">
//             Log in
//           </Button>
//           Or <a href="">register now!</a>
//         </FormItem>
//       </Form>
//     );
//   }
// }

