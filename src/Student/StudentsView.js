import React, {Component} from 'react';
import StudentCard from './StudentCard';
import {fetchStudents} from '../api/student';
import { Link } from 'react-router-dom';
import { Layout,Breadcrumb, Icon } from 'antd';

export default class StudentsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            students: [],
        };
    }

    
    
    componentDidMount() {
        fetchStudents()
        .then(response => {
            this.setState({students: response.data});
        })
        
    }


    render() {
        const { Header, Content, Footer, Sider } = Layout;

        const {isLoading} = this.state; 
        if (isLoading)
            return <div className='loading'>Loading student</div>;
        return (
            <Layout style={{ padding: '0 24px 24px'}}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Student</Breadcrumb.Item>
                    <Link to = '/students/edit/NEW' className='btn btn-sm btn-primary' style={{margin:'10px',color:'white'}}>
                        Add new Student
                    </Link>
                    
                </Breadcrumb>
        
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    {this.state.students.map(student => <StudentCard student={student} key={student.Id}/>)}
                </Content>
            </Layout>
        ) 
    }
}    