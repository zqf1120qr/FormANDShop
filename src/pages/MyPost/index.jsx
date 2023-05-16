import React from 'react';
import {NavBar} from "antd-mobile";
import './index.css'
const items=[
    {
        date: '2023/5/17',
        img:'https://img2.woyaogexing.com/2022/02/20/11eae452105c44b68e62450f3c8ab725!400x400.jpeg'
    },{
        date: '2023/5/14',
        img: 'https://img2.woyaogexing.com/2022/02/20/f069c49c1ec44fd0922d3d18b0ac155d!400x400.png'
    },{
        date: '2023/5/10',
        img:'https://img2.woyaogexing.com/2022/02/20/c0574d1b1f744fb297244a6c5a5e8fcc!400x400.jpeg'
    },{
        date: '2023/5/9',
        img: 'https://img2.woyaogexing.com/2022/02/20/b9830037098940219c73271ae14870a6!400x400.jpeg'
    },{
        date: '2023/4/17',
        img:'https://img2.woyaogexing.com/2022/02/20/e82d31ea80284811bac77db3c2f0006b!400x400.jpeg'
    },{
        date: '2023/4/16',
        img:'https://img2.woyaogexing.com/2022/02/19/7c664f9e52814e079a332061d52b3fbf!400x400.jpeg'
    },
]
export default function MyPost() {
    const back=()=>{
        window.history.go(-1)
        window.scrollTo(0,0)
    }
    return (
        <div>
            <NavBar onBack={back}>我的帖子</NavBar>
            <header className='my-header'>
                <img src="https://img1.baidu.com/it/u=2231549623,3237765525&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=500" alt=""/>
                <h2>昵称：xxx</h2>
            </header>
            <footer className='my-footer'>
                {
                    items.map((item,index)=>{
                        return (
                            <div key={index} className='date'>
                                <h2>{item.date}</h2>
                                <div className='img'>
                                    <img src={item.img} alt=""/>
                                </div>
                            </div>
                        )
                    })
                }

            </footer>
        </div>
    );
}

