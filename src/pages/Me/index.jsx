import React from 'react';
import { Avatar} from 'antd-mobile'
import MenuBar from "../../components/MenuBar";
import {PlayOutline} from 'antd-mobile-icons'
import './index.css'
import {useNavigate} from "react-router-dom";
const items=[
    {
        value: 'mypost',
        title: '帖子',

    },{
        value: 'wallet',
        title: '钱包',

    },{
        value: 'profile',
        title: '资料',

    },{
        value: 'setting',
        title: '设置',

    },
]
export default function Me() {
    const navigate=useNavigate()

    return (
        <div>
            <div style={{width:'90%',margin:'20px auto',display:'flex'}}>
                <img style={{ flex:'1','width': '150px',display:'inline-block',borderRadius:'8%' }} src='https://img1.baidu.com/it/u=2231549623,3237765525&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=500' alt=''/>
                <div style={{flex:'2',marginLeft:'20px',fontSize:'20px',display:'flex',flexDirection:'column',justifyContent: 'space-around'}}>
                    <p><strong>昵称</strong>：xxx</p>
                    <p><strong>账号</strong>：123456xxx</p>
                    <p><strong>个性签名</strong>：请输入内容...</p>
                </div>
            </div>
            <div style={{width:'90%' ,margin:'20px auto'}}>
                {
                    items.map((item)=>{
                        return (
                            <div className="item" key={item.value}
                                 onClick={()=>{
                                    navigate(`/${item.value}`)
                                    window.scrollTo(0,0)
                                }}
                            >
                                <h2>{item.title}</h2>
                                <PlayOutline style={{position:'absolute',right:'40px',fontSize: '36'}}/>
                            </div>
                        )
                    })
                }

            </div>
            <MenuBar></MenuBar>
        </div>
    );
}

