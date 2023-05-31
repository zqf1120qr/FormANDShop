import React from 'react';
import {Form, NavBar,Button,Input, Toast} from 'antd-mobile'
import axios from "axios";
import {useNavigate} from "react-router-dom";
export default function Index() {
    const navigate=useNavigate()
    const goRegister=()=>{
        navigate('/register')
    }
    const right=(
        <a onClick={goRegister}>
            注册
        </a>
    )
    const onFinish=(values)=>{
        axios.post('http://localhost:8080/login',values)
            .then((res)=>{
                // console.log(res)
                if(res.data.code===200){
                    Toast.show({
                        icon: 'success',
                        content: res.data.msg,
                    })
                    navigate('/home')
                }else{
                    Toast.show({
                        icon: 'fail',
                        content: res.data.msg,
                    })
                }
            })
    }
    return (
        <div>
            <NavBar right={right} backArrow={false}>
                登录
            </NavBar>
            <Form
                name='form'
                onFinish={onFinish}
                footer={
                    <Button block type='submit' color='primary' size='large'>
                        登录
                    </Button>
                }
            >
                <Form.Item name='name' label='账号' rules={[{ required: true }]}>
                    <Input placeholder='请输入账号' />
                </Form.Item>
                <Form.Item name='password' label='密码' rules={[{ required: true }]}>
                    <Input placeholder='请输入密码' type='password'/>
                </Form.Item>
            </Form>
        </div>
        
    );
}

