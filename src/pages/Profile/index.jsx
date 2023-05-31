import React from 'react';
import {List, NavBar,Avatar} from 'antd-mobile'
import {UnorderedListOutline} from "antd-mobile-icons";
export default function Index() {
    const back = () => {
        window.history.go(-1)
    }
    return (
        <div>
            <NavBar back='返回' onBack={back} >
                个人资料
            </NavBar>
            <div style={{width:'100%',height:'150px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <img width='100px' style={{borderRadius:'50%'}} src='https://img1.baidu.com/it/u=2231549623,3237765525&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=500' alt=''></img>
            </div>
            <List>
                <List.Item extra='李先生' onClick={() => {}}>
                    姓名
                </List.Item>
                <List.Item extra='xxx' onClick={() => {}}>
                    昵称
                </List.Item>
                <List.Item extra='123456xxx' onClick={() => {}}>
                    账号
                </List.Item>
                <List.Item extra='男' onClick={() => {}}>
                    性别
                </List.Item>
                <List.Item extra='2000-01-01' onClick={() => {}}>
                    生日
                </List.Item>
                <List.Item extra='请输入内容...' onClick={() => {}}>
                    简介
                </List.Item>

            </List>
        </div>

    );
}

