import React from 'react';
import {Form, NavBar, Button, Input, Toast} from 'antd-mobile'
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Index() {
    const navigate = useNavigate()

    const back = () => {
        window.history.go(-1)
    }
    const onFinish = (values) => {
        if (values.confirmPassword === values.password) {
            axios.post('http://localhost:8080/register', values)
                .then((res) => {
                    // console.log(res)
                    if (res.data.code === 200) {
                        Toast.show({
                            icon: 'success',
                            content: res.data.msg,
                        })
                        navigate('/login')
                    } else {
                        Toast.show({
                            icon: 'fail',
                            content: res.data.msg,
                        })
                    }
                })
        }

    }
    return (
        <div>
            <NavBar back='返回' onBack={back}>
                注册
            </NavBar>
            <Form
                name='form'
                onFinish={onFinish}
                footer={
                    <Button block type='submit' color='primary' size='large'>
                        注册
                    </Button>
                }
            >
                <Form.Item name='name' label='账号' rules={[{required: true}]}>
                    <Input placeholder='请输入账号'/>
                </Form.Item>
                <Form.Item name='password' label='密码' rules={[{required: true}]}>
                    <Input placeholder='请输入密码' type='password'/>
                </Form.Item>
                <Form.Item name='confirmPassword' label='确认密码' rules={[{required: true}]}>
                    <Input placeholder='请输入密码' type='password'/>
                </Form.Item>
            </Form>
        </div>

    );
}

