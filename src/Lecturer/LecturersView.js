import React from 'react';
import LecturerCard from './LecturerCard';
import {fetchLecturers} from '../api/lecturer';
import { Link } from 'react-router-dom';
import { Layout,Breadcrumb,Spin } from 'antd';
import SideBar from '../App/SideBar';

export default class LecturersView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            lecturers: [],
        };
    }


    componentDidMount() {
        fetchLecturers()
        .then(response => {
            this.setState({lecturers: response.data});
            this.setState({isLoading:false});

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
            <Layout style={{ padding: '0 24px 24px'}}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Lecturer</Breadcrumb.Item>
                    <Link to = '/lecturers/edit/NEW' className='btn btn-sm btn-primary' style={{margin:'10px',color:'white'}}>
                    Add new Lecturer
                    </Link>
                </Breadcrumb>
        
                <div style={{ background: '', padding: '0 0 0 0', margin: 'auto', minHeight: 350 }}>
                    {this.state.lecturers.map(lecturer => <LecturerCard lecturer={lecturer} key={lecturer.Id}/>)}
                </div>
            </Layout>
            </Content>
            </Layout>
        ) 
    }
}    