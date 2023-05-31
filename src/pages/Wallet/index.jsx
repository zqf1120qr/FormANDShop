import React from 'react';
import {Card, List, NavBar} from 'antd-mobile'
import {
    CouponOutline,
    MailOpenOutline,
    PayCircleOutline,
    RightOutline,
    SetOutline,
    UnorderedListOutline
} from "antd-mobile-icons";
export default function Index() {
    const back = () => {
        window.history.go(-1)
    }
    return (
        <div style={{minHeight:'100vh', minWidth:'100vw',float: 'left'}} >

            <NavBar back='返回' onBack={back} style={{backgroundColor:'white'}}>
                钱包
            </NavBar>
            <List style={{textAlign:'center'}}>
                <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
                    账单
                </List.Item>
                <List.Item prefix={<PayCircleOutline />} onClick={() => {}}>
                    总资产
                </List.Item>
                <List.Item prefix={<MailOpenOutline />} onClick={() => {}}>
                    红包
                </List.Item>
                <List.Item prefix={<CouponOutline />} onClick={() => {}}>
                    银行卡
                </List.Item>
            </List>
            <Card title='余额' extra={<RightOutline />} style={{backgroundColor:'#ccc',margin: '20px 40px',width:'70%',height:'100px',textAlign:'center'}}>
                <h1>100</h1>
            </Card>
            <Card title='积分' extra={<RightOutline />} style={{backgroundColor:'#ccc',margin: '20px 40px',width:'70%',height:'100px',textAlign:'center'}}>
                <h1>100</h1>
            </Card>
            <Card title='优惠券' extra={<RightOutline /> } style={{backgroundColor:'#ccc',margin: '20px 40px',width:'70%',height:'100px',textAlign:'center'}}>
                <h1>10张</h1>
            </Card>

        </div>

    );
}

