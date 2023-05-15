import React from 'react';
import {SearchBar,TabBar,Card,CapsuleTabs} from 'antd-mobile'
import MenuBar from "../../components/MenuBar";
import Carousel from '../../utils/Carousel'
import './index.css'
const tabs=[
    {
        key: 'xiaomi',
        title: '小米',
    },{
        key: 'huawei',
        title: '华为',
    },{
        key: 'OPPO',
        title: 'OPPO',
    },{
        key: 'VIVO',
        title: 'VIVO',
    },{
        key: 'more',
        title: '更多',
    },
]
const divs=[
    {
        name: '小米13',
        price: '3999',
        sale: '11w'
    },{
        name: '小米12',
        price: '2999',
        sale: '10w'
    },{
        name: '小米10',
        price: '2599',
        sale: '9w'
    },
]
export default function Home() {
    return (
        <div>
            <SearchBar placeholder='请输入手机名称' style={{margin:'5px auto',width:"90%"}}/>
            <Carousel></Carousel>
            <MenuBar></MenuBar>
            <CapsuleTabs style={{margin:'5px auto',width:'85%'}}>
                {tabs.map(item => (
                    <CapsuleTabs.Tab key={item.key} title={item.title} />
                ))}
            </CapsuleTabs>
            <div className='container'>
                <div className="left" style={{
                    flex:'1',
                }}>
                    <img src={require('../../utils/img/2-2.jpg')} alt="" />
                    <h2 style={{color:"black"}}>小米11</h2>
                    ￥<h3 className='price' style={{display:'inline-block'}}>2999</h3>
                    <h3 style={{display:'inline-block',float:'right'}}>已售10w+件</h3>
                </div>
                <div className="right" style={{flex:'1',display:'flex'}}>
                    {
                        divs.map((good,index)=>{
                            return (
                                <div key={index} className='every'>
                                    <img src={require('../../utils/img/2-2.jpg')} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
}

