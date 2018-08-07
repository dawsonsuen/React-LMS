import React from 'react';
import StudentCard from './StudentCard';
import {fetchStudents} from '../api/student';
import { Link } from 'react-router-dom';
import { Layout,Breadcrumb, Icon, Spin } from 'antd';
import SideBar from '../App/SideBar';

export default class StudentsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            students: [],
        };
    }

    
    
    componentDidMount() {
        fetchStudents()
        .then(response => {
            this.setState({students: response.data});
            this.setState({isLoading: false});
        })
        
    }


    render() {
        const { Header, Content, Footer, Sider } = Layout;

        const {isLoading} = this.state; 
        if (isLoading)
            return <div><Spin size="small" />
            <Spin />
            <Spin size="large" /></div>;
        return (
            <Layout>
                <SideBar/>
                <Content>
            <Layout style={{ padding: '0 24px 24px'}} >
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Student</Breadcrumb.Item>
                    <Link to = '/students/edit/NEW' className='btn btn-sm btn-primary' style={{margin:'10px',color:'white'}}>
                        Add new Student
                    </Link>
                    
                </Breadcrumb>
        
                <div style={{ background: '', padding: '0 0 0 0', margin: '0', minHeight: 350 }}>
                    {this.state.students.map(student => <StudentCard student={student} key={student.Id}/>)}
                </div>
            </Layout>
            </Content>

            </Layout>
        ) 
    }
}    