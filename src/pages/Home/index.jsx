import React from 'react';
import {SearchBar,CapsuleTabs,PullToRefresh} from 'antd-mobile'
import MenuBar from "../../components/MenuBar";
import Carousel from '../../components/Carousel'
import './index.css'
import {useNavigate} from "react-router-dom";

const tabs = [
    {
        key: 'xiaomi',
        title: '小米',
    }, {
        key: 'huawei',
        title: '华为',
    }, {
        key: 'OPPO',
        title: 'OPPO',
    }, {
        key: 'VIVO',
        title: 'VIVO',
    }, {
        key: 'more',
        title: '更多',
    },
]
const divs = [
    {
        name: '小米13',
        price: '3999',
        sale: '11w'
    }, {
        name: '小米12',
        price: '2999',
        sale: '10w'
    }, {
        name: '小米10',
        price: '2599',
        sale: '9w'
    },
]
const test=[0,0,0,0,0,0,0,0,0,0]

export default function Home() {
    const navigate=useNavigate()
    const  goDetail = () => {
        navigate('/detail')
        window.scrollTo(0,0)
    }
    return (
        <PullToRefresh>
            <SearchBar placeholder='请输入手机名称' style={{margin: '5px auto', width: "90%"}}/>
            <Carousel></Carousel>
            <CapsuleTabs style={{margin: '5px auto', width: '90%'}}>
                {tabs.map(item => (
                    <CapsuleTabs.Tab key={item.key} title={item.title}/>
                ))}
            </CapsuleTabs>
            <div className='container'>
                <div className="left" style={{
                    flex: '1',
                }}
                     onClick={goDetail}
                >
                    <img src={require('../../assets/img/2-2.jpg')} alt=""/>
                    <div className="bottom">
                        <h2>小米11</h2>
                        <div className='price'>
                            ￥
                            <h2 style={{display: 'inline-block'}}>
                                2999
                            </h2>
                        </div>
                        <p style={{
                            display: 'inline-block',
                            float: 'right',
                            color:'#666',
                            margin:'5px 0'
                        }}>已售10w+件</p>
                    </div>
                </div>
                <div className="right" style={{flex: '1', display: 'flex'}}>
                    {
                        divs.map((good, index) => {
                            return (
                                <div key={index} className='every' onClick={goDetail}>
                                    <img src={require(`../../assets/img/2-${index % 5 + 1}.jpg`)} alt=""/>
                                    <div className="words">
                                        <h2>{good.name}</h2>
                                        <p className='price'>
                                            ￥
                                            <h2 style={{display:'inline-block'}}>
                                                {good.price}
                                            </h2>
                                        </p>
                                        <p style={{color:'#666'}}>已售{good.sale}+件</p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='moreGoods'>
                {
                    test.map((good,index)=>{
                        return (
                            <div className="left"
                                 key={index}
                                 style={{
                                width:'45%',
                                minHeight: '300px',
                                margin:'5px auto',
                            }}
                                 onClick={goDetail}
                            >
                                <img src={require(`../../assets/img/2-${index % 5 + 1}.jpg`)} alt=""/>
                                <div className="bottom">
                                    <h2>小米11</h2>
                                    <div className='price'>
                                        ￥
                                        <h2 style={{display: 'inline-block'}}>
                                            2999
                                        </h2>
                                    </div>
                                    <p style={{
                                        display: 'inline-block',
                                        float: 'right',
                                        color:'#666',
                                        margin:'5px 0'
                                    }}>已售10w+件</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div style={{color:'#666',textAlign:'center',marginTop:'10px'}}>~~~我到底了哦~~~</div>
            <MenuBar></MenuBar>
        </PullToRefresh>
    );
}

