import React, {Component} from 'react';
import LecturerCard from './LecturerCard';
import {fetchLecturers} from '../api/lecturer';
import { Link } from 'react-router-dom';
import { Layout,Breadcrumb, Icon } from 'antd';

export default class LecturersView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            lecturers: [],
        };
    }


    componentDidMount() {
        fetchLecturers()
        .then(response => {
            this.setState({lecturers: response.data});
        })

    }


    render() {
        const { Header, Content, Footer, Sider } = Layout;

        const {isLoading} = this.state; 
        if (isLoading)
            return <div className='loading'>Loading lecturer</div>;
        return (
            <Layout style={{ padding: '0 24px 24px'}}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Lecturer</Breadcrumb.Item>
          <Link to = '/lecturers/edit/NEW' className='btn btn-sm btn-primary' style={{margin:'10px',color:'white'}}>
                 Add new Lecturer
                    </Link>
                    
        </Breadcrumb>
        
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
        {this.state.lecturers.map(lecturer => <LecturerCard lecturer={lecturer} key={lecturer.Id}/>)}
        </Content>
      </Layout>
        ) 
    }
}    