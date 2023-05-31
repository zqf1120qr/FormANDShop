import React from 'react';
import {List, NavBar, Switch} from 'antd-mobile'
export default function Index() {
    const back = () => {
        window.history.go(-1)
    }
    return (
        <div>
            <NavBar back='返回' onBack={back} >
                设置
            </NavBar>
            <List style={{marginTop:'10px'}}>
                <List.Item extra={<Switch defaultChecked />}>新消息通知</List.Item>
                <List.Item extra='未开启' clickable>
                    大字号模式
                </List.Item>
                <List.Item description='管理已授权的产品和设备' clickable>
                    授权管理
                </List.Item>
                <List.Item extra='清楚本地缓存等' clickable>
                    通用
                </List.Item>
                <List.Item extra='管理账户' clickable>
                    账户与安全
                </List.Item>
                <List.Item extra='按照支付设置的顺序扣款' clickable>
                    扣款方式
                </List.Item>
                <List.Item extra='200元' clickable>
                    月限额
                </List.Item>
                <List.Item >帮助中心</List.Item>
                <List.Item>关于</List.Item>
            </List>
        </div>
    );
}

