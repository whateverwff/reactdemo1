import React, { Component } from 'react'
import { Card, Button, List, Avatar } from 'antd'
import { connect } from "react-redux"
import {
    changeinformtitle,
    changeinformtitleAsync,
    setAllRead,
    setReadById,
    getList
} from "../../actions/inform_action"

const mapStoteToProp = (store) => {
    const {test,list=[]} = store.infrom;
    return {
        test,
        list
    }
}


@connect(mapStoteToProp,{changeinformtitle,changeinformtitleAsync,setAllRead,setReadById,getList})
class Inform extends Component {
    constructor(props) {
        super(props);
        this.props.getList();
    }

    render() {
        return (
            <div>
                <Card
                    title={this.props.test}
                    extra={
                        <Button
                            type="primary"
                            disabled={this.props.list.every(item => item.isread)}
                            onClick={this.props.setAllRead.bind(this)}
                        >全部已读</Button>
                    }>
                    <List
                        itemLayout="horizontal"
                        dataSource={this.props.list}
                        renderItem={item => (
                            <List.Item
                                extra={
                                    item.isread ? null :
                                    <Button
                                        type="default"
                                        onClick={
                                            this.props.setReadById.bind(this,item.cid)
                                        }
                                    >设为已读</Button>
                                }>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.cname} - {item.cid}</a>}
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
