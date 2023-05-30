import React, {useEffect, useState} from 'react';
import {SearchBar,CapsuleTabs,PullToRefresh,DotLoading} from 'antd-mobile'
import MenuBar from "../../components/MenuBar";
import Carousel from '../../components/Carousel'
import './index.css'
import {useNavigate} from "react-router-dom";
import axios from 'axios'

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

const test=[0,1,2,3,0,1,2,3,0,1]

export default function Home() {
    const [isLoading,setIsLoading]=useState(true)
    const [goodsInfo,setGoodsInfo]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/getGoodsInfo')
            .then((res)=>{
                setGoodsInfo(res.data.goods_info)})
    },[])
    useEffect(()=>{
        if(goodsInfo.length!==0){
            console.log(goodsInfo)
            setIsLoading(false)
        }
    },[goodsInfo])
    const navigate=useNavigate()
    const  goDetail = (e) => {
        const index = e.currentTarget.getAttribute('data-index');
        navigate('/detail',{state: {'id':parseInt(index)+1}})
        window.scrollTo(0,0)
    }
    return isLoading?(<DotLoading />):(
        <PullToRefresh>
            <SearchBar placeholder='请输入手机名称' style={{margin: '5px auto', width: "90%"}}/>
            <Carousel props={goodsInfo}></Carousel>
            <CapsuleTabs style={{margin: '5px auto', width: '90%'}}>
                {tabs.map(item => (
                    <CapsuleTabs.Tab key={item.key} title={item.title}/>
                ))}
            </CapsuleTabs>
            <div className='container'>
                <div className="left" data-index='0' style={{flex:'7'}}
                     onClick={goDetail}
                >
                    <img src={goodsInfo[0].url} alt=""/>
                    <div className="bottom">
                        <h2>{goodsInfo[0].name}</h2>
                        <div className='price'>
                            ￥
                            <h2 style={{display: 'inline-block',color: '#d11a2d'}}>
                                {goodsInfo[0].price}
                            </h2>
                        </div>
                        <p style={{
                            color:'#666',
                            margin:'5px 0'
                        }}>已售{goodsInfo[0].sale}+件</p>
                    </div>
                </div>
                <div className="right" style={{flex: '8', display: 'flex'}}>
                    {
                        goodsInfo.map((good, index) => {
                            return index===0?(
                                <div key={index}></div>
                            ):(
                                <div key={index} className='every' data-index={index} onClick={goDetail}>
                                    <img src={good.url} alt=""/>
                                    <div className="words">
                                        <h5>{good.name}</h5>
                                        <div className='price'>
                                            ￥
                                            <h3 style={{display:'inline-block'}}>
                                                {good.price}
                                            </h3>
                                        </div>
                                        <p style={{color:'#666',fontSize:'10px'}}>已售{good.sale}+件</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='moreGoods'>
                {
                    test.map((temp,index)=>{
                        let good=goodsInfo[index%4]
                        return (
                            <div className="left"
                                 key={index}
                                 style={{
                                width:'45%',
                                minHeight: '250px',
                                margin:'5px auto',
                            }}
                                 data-index={temp}
                                 onClick={goDetail}
                            >
                                <img src={good.url} alt=""/>
                                <div className="bottom">
                                    <h2>{good.name}</h2>
                                    <div className='price'>
                                        ￥
                                        <h2 style={{display: 'inline-block',color:'#d11a2d'}}>
                                            {good.price}
                                        </h2>
                                    </div>
                                    <div style={{
                                        color:'#666',
                                        margin:'5px 0',
                                        fontSize:'15px'
                                    }}>已售{good.sale}+件</div>
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

