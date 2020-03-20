import React, {Component} from 'react'
import {Form, Input, Button, Checkbox, Card, Spin} from 'antd'
import {Link, Redirect} from "react-router-dom"
import {connect} from "react-redux"
import axios from "axios"
import {
    loginrequest
} from "../../actions/login_action"

import css from "./login.module.css"

const layout = {
    labelCol: {span: 6},
    wrapperCol: {span: 18},
}
const tailLayout = {
    wrapperCol: {offset: 6, span: 18},
}
const mapStateToProps = (state) => {
    return {
        ...state.login_reducer
    }
}

@connect(mapStateToProps, {loginrequest})
class Login extends Component {
    onFinish = values => {
        axios.post("http://localhost:8080/login",values).then(resq => {
            console.log(resq);
        })
        this.props.loginrequest(values);
    }
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    }

    render() {
        return (
            this.props.islogin
                ?
                <Redirect to='/admin'/>
                :
                <div className={css.loginwrap}>
                    <div className={css.loginwrapper}>
                        <Card headStyle={{fontSize: 16, fontWeight: 'bold', textAlign: 'center'}} title="登录">
                            <Spin spinning={this.props.loginloading}>
                                <Form
                                    name="basic"
                                    initialValues={{remember: true}}
                                    onFinish={(values) => this.onFinish(values)}
                                    onFinishFailed={(values) => this.onFinishFailed(values)}
                                    {...layout}
                                >
                                    <Form.Item
                                        label="用户名"
                                        name="username"
                                        rules={[{required: true, message: '请输入用户名!'}]}
                                    >
                                        <Input/>
                                    </Form.Item>

                                    <Form.Item
                                        label="密码"
                                        name="psd"
                                        rules={[{required: true, message: '请输入密码!'}]}
                                    >
                                        <Input.Password/>
                                    </Form.Item>

                                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                        <Checkbox>记住我</Checkbox>
                                    </Form.Item>
                                    <Form.Item {...tailLayout} name="submit">
                                        <Button type="primary" htmlType="submit">
                                            登录
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Spin>
                            <div>
                                <Link to="/register">去注册</Link>
                            </div>
                        </Card>
                    </div>
                </div>
        )
    }
}

export default Login
