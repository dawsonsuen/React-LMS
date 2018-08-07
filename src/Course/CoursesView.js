import React from 'react';
import CourseCard from './CourseCard';
import {fetchCourses} from '../api/course';
import { Link } from 'react-router-dom';
import { Layout,Breadcrumb,Spin } from 'antd';
import SideBar from '../App/SideBar'
export default class CoursesView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            courses: []
        };
    }

    
    
    componentDidMount() {
        this.setState({isLoading:true});
        fetchCourses()
        .then(response => {
            this.setState({courses: response.data});
            this.setState({isLoading:false});
        })
        .catch(e=>{
            console.log('error fetching courses');
            console.log(e);
            alert('error fetching course')
        });
    }


    render() {
        const { Header, Content, Footer, Sider } = Layout;

        const {isLoading} = this.state; 
        if (isLoading)

            return (<div><Spin size="small" />
            <Spin />
            <Spin size="large" /></div>)

        return (
        <Layout >
            <SideBar/>
            <Content>
            <Layout style={{ padding: '0 24px 24px'}}>

                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Course</Breadcrumb.Item>
                    <Link to = '/courses/edit/NEW' className='btn btn-sm btn-primary' style={{margin:'10px',color:'white'}}>
                        Add new Course
                    </Link>
                    
                </Breadcrumb>
        
                <div style={{ background: '', padding: '0 0 0 0', margin: 'auto', minHeight: 350 }}>
                    {this.state.courses.map(course => <CourseCard course={course} key={course.Id}/>)}
                </div>
            </Layout>
            </Content>
        </Layout>
        ) 
    }
}    