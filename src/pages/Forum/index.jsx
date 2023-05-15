import React from 'react';
import MenuBar from "../../components/MenuBar";
import './index.css'
import {CapsuleTabs, SearchBar} from "antd-mobile";
const tabs=[
    {
        title: '发现'
    },{
        title: '关注'
    },{
        title: '热点'
    },
]
const posts=[
    {
        img:'https://img2.baidu.com/it/u=962114689,713916443&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
        description: '请输入内容请输入内容...',
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202008%2F12%2F20200812105950_4WFTF.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686754915&t=37f92d12f25547c9ce318ca05b3719a3',
        name: '小明',
    },{
        img:'https://img2.baidu.com/it/u=962114689,713916443&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
        description:'请输入内容请输入内容...',
        avatar: 'https://img0.baidu.com/it/u=1521446316,2242882092&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        name: '小华',
    },{
        img:'https://img2.baidu.com/it/u=962114689,713916443&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
        description:'请输入内容请输入内容...',
        avatar: 'https://img0.baidu.com/it/u=1521446316,2242882092&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        name: '小李',
    },{
        img:'https://img2.baidu.com/it/u=962114689,713916443&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
        description:'请输入内容请输入内容...',
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202103%2F04%2F20210304203213_9fb21.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686755070&t=8456233ca365d598fb697985edd5b992',
        name: '小红',
    },{
        img:'https://img2.baidu.com/it/u=962114689,713916443&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
        description:'请输入内容请输入内容...',
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202103%2F04%2F20210304203213_9fb21.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686755070&t=8456233ca365d598fb697985edd5b992',
        name: '小红',
    },{
        img:'https://img2.baidu.com/it/u=962114689,713916443&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
        description:'请输入内容请输入内容...',
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202103%2F04%2F20210304203213_9fb21.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686755070&t=8456233ca365d598fb697985edd5b992',
        name: '小红',
    },{
        img:'https://img2.baidu.com/it/u=962114689,713916443&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
        description:'请输入内容请输入内容...',
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202103%2F04%2F20210304203213_9fb21.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686755070&t=8456233ca365d598fb697985edd5b992',
        name: '小红',
    },{
        img:'https://img2.baidu.com/it/u=962114689,713916443&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
        description:'请输入内容请输入内容...',
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202103%2F04%2F20210304203213_9fb21.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686755070&t=8456233ca365d598fb697985edd5b992',
        name: '小红',
    }
]
export default function Forum() {
    return (
        <div>
            <SearchBar placeholder='请输入搜索内容' style={{margin: '5px auto', width: "90%"}}/>
            <CapsuleTabs style={{margin: '5px auto', width: '90%'}}>
                {tabs.map((item,index) => (
                    <CapsuleTabs.Tab key={index} title={item.title}/>
                ))}
            </CapsuleTabs>
            <div className='posts'>
                {
                    posts.map((post,index)=>{
                        return (
                            <div key={index} className='post'>
                                <img src={post.img} width='100%' alt=""/>
                                <p style={{fontSize:'15px',display:'block',margin:'3px 0'}}>{post.description}</p>
                                <div className='post-footer'>
                                    <img src={post.avatar} alt="未加载"/>
                                    <h4>{post.name}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <MenuBar></MenuBar>
        </div>
    );
}

