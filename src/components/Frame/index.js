import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {withRouter} from 'react-router-dom'
import {
    adminRouter
} from '../../routes'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;




class Frame extends Component {
    constructor (props){
        super(props);
        this.state = {
            defaultSelectedKeys:''
        }
        console.log(this.props)
    }
    static get(){
        this.setState({
            defaultSelectedKeys:this.props.history.location.pathname
        })
    }
    switchsubnav = ({ item, key, keyPath, domEvent }) => {
        debugger
    }
    render() {
        const subnav = adminRouter.filter(item => item.subnavtitle);
        console.log(this.state)
        const {defaultSelectedKeys} = this.state;
        return (
            <Layout>
                <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%',background:'#fff',borderBottom:'1px solid #dadada' }}>
                    <div className="logo" />
                </Header>
                <Layout style={{ marginTop:64 }}>
                    <Sider width={200} className="site-layout-background"  style={{ position: 'fixed', zIndex: 1,height:'100%' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[defaultSelectedKeys]}
                            style={{ 
                                height: '100%',
                                borderRight: 0,
                                borderRight:'1px solid #dadada'
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
export default withRouter(Frame)