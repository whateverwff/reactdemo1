import React, { Component } from 'react'
import {
    Layout,
    Menu,
    Breadcrumb,
    Dropdown,
    message,
    Badge
} from 'antd';

import { UserOutlined, LaptopOutlined, NotificationOutlined, DownOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import {
    adminRouter
} from '../../routes'

import "./frame.less"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



@withRouter
class Frame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultSelectedKeys: ''
        }
    }

    switchsubnav = ({ item, key, keyPath, domEvent }) => {
        this.props.history.push(key)
    }
    onclickmsgdropdown = ({ key }) => {
        this.props.history.push(key)
    }
    render() {
        const subnav = adminRouter.filter(item => item.subnavtitle);
        const menu = (
            <Menu onClick={this.onclickmsgdropdown}>
                <Menu.Item key="/admin/inform">
                    <Badge dot>我的通知</Badge>
                </Menu.Item>
                <Menu.Item key="/admin/center">个人中心</Menu.Item>
                <Menu.Item key="/login">退出登录</Menu.Item>
            </Menu>
        );
        return (
            <Layout>
                <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff', borderBottom: '1px solid #dadada' }}>
                    <div className="logo">
                        logo
                    </div>
                    <Dropdown overlay={menu}>
                        <div className="ant-dropdown-link">
                            <Badge count={5} offset={['6','0']}>
                                你好! admin <DownOutlined />
                            </Badge>
                            
                        </div>
                    </Dropdown>
                </Header>
                <Layout style={{ marginTop: 64 }}>
                    <Sider width={200} className="site-layout-background" style={{ position: 'fixed', zIndex: 1, height: '100%' }}>
                        <Menu
                            mode="inline"
                            selectedKeys={[this.props.location.pathname]}
                            style={{
                                height: '100%',
                                borderRight: 0,
                                borderRight: '1px solid #dadada'
                            }}
                            onClick={this.switchsubnav}
                        >
                            {
                                subnav.map(item => {
                                    return (
                                        <Menu.Item key={item.pathname}>{item.subnavtitle}</Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '25px 25px 25px 225px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 500,
                                background: '#fff'
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
export default Frame