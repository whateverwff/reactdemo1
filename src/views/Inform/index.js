import React, { Component } from 'react'
import { Card, Button, List, Avatar } from 'antd'
import { connect } from "react-redux"
import {changeinformtitle,changeinformtitleAsync} from "../../actions/inform_action"

const mapStoteToProp = (store) => {
    return {
        ...store.infrom
    }
}


@connect(mapStoteToProp,{changeinformtitle,changeinformtitleAsync})
class Inform extends Component {
    render() {
        const data = [
            {
                title: 'Ant Design Title 1',
            },
            {
                title: 'Ant Design Title 2',
            },
            {
                title: 'Ant Design Title 3',
            },
            {
                title: 'Ant Design Title 4',
            },
        ];
        return (
            <div>
                <Card title={this.props.test} extra={<Button type="primary"  onClick={this.props.changeinformtitle.bind(this,"新的标题")}>全部已读</Button>}>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item extra={<Button type="default" onClick={this.props.changeinformtitleAsync.bind(this,"异步调用")}>设为已读</Button>}>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </List.Item>
                        )}
                    />
                </Card>
            </div>
        )
    }
}

export default Inform
