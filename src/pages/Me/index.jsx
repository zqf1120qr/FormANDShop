import React from 'react';
import { Avatar} from 'antd-mobile'
import MenuBar from "../../components/MenuBar";
import {PlayOutline} from 'antd-mobile-icons'
import './index.css'
import {useNavigate} from "react-router-dom";
const items=[
    {
        value: 'post',
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
                <img style={{ flex:'1','width': '150px',display:'inline-block' }} src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202008%2F12%2F20200812105950_4WFTF.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686754915&t=37f92d12f25547c9ce318ca05b3719a3' alt=''/>
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

