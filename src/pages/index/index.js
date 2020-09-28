import React, { Component } from 'react'
import { Layout } from 'antd';
import Aside from './components/aside'
import ContainerMain from 'components/containerMain/index'
import "./index.scss"
const { Header, Content, Footer, Sider } = Layout;
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Layout className='layout_warp'>
                <Sider width="250px">
                    <Aside/>
                </Sider>
                <Layout className="site-layout">
                    <Header className='layout_header'>头部</Header>
                    <Content className='layout_main'>
                        <ContainerMain></ContainerMain>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Home;