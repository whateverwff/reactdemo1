import React, { Component } from 'react'
import { Form, Input, Button, Card,message } from 'antd'
import {Link} from "react-router-dom"

import css from "./register.module.css"

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
}
const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
}
export default class Register extends Component {
    onFinish = values => {
        if(values.password != values.alignpassword){
            message.error("输入的密码不一致! 请重新输入");
            return
        }
        console.log('Success:', values);
    }
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    }
    render() {
        return (
            <div className={css.loginwrap}>
                <div className={css.loginwrapper}>
                    <Card headStyle={{fontSize:16,fontWeight:'bold',textAlign:'center'}} title="注册">
                        <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={(values)=>this.onFinish(values)}
                        onFinishFailed={(values)=>this.onFinishFailed(values)}
                        {...layout}
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[{ required: true, message: '请输入你的用户名!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: '请输入你的密码' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            label="再次输入密码"
                            name="alignpassword"
                            rules={[{ required: true, message: '请再次输入你的密码!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button  type="primary" htmlType="submit">
                                注册
                            </Button>
                        </Form.Item>
                        <Form.Item style={{textAlign:'right'}}>
                            <Link to="/login">去登录</Link>
                        </Form.Item>
                    </Form>
                    </Card>
                </div>
            </div>
        )
    }
}
