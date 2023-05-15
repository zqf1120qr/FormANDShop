import React from 'react';
import MenuBar from "../../components/MenuBar";
import {NavBar,Stepper} from "antd-mobile";
import {useNavigate} from "react-router-dom";
const divs=[
    {
        name: '小米13',
        price: '3999',
        parameter:'12+256'
    }, {
        name: '小米12',
        price: '2999',
        parameter: '8+256'
    }, {
        name: '小米10',
        price: '2599',
        parameter: '12+256'
    },{
        name: '小米13',
        price: '3999',
        parameter:'12+256'
    }, {
        name: '小米12',
        price: '2999',
        parameter: '8+256'
    }, {
        name: '小米10',
        price: '2599',
        parameter: '12+256'
    },{
        name: '小米13',
        price: '3999',
        parameter:'12+256'
    }, {
        name: '小米12',
        price: '2999',
        parameter: '8+256'
    }, {
        name: '小米10',
        price: '2599',
        parameter: '12+256'
    },
]
export default function Like() {
    const navigate=useNavigate()
    const  goDetail = () => {
        navigate('/detail')
        window.scrollTo(0,0)
    }
    return (
        <div>
            <div style={{width:'90%',margin:'10px auto'}}>
                <h2 style={{display:'inline-block',float:"left"}}>心愿单</h2>
                <h2 style={{display:'inline-block',float:"right"}}>编辑</h2>
            </div>
            <br/>
            <br/>
            <br/>
            <div>
                {
                    divs.map((good, index) => {
                        return (
                            <div key={index} className='every' style={{height:'130px'}} onClick={goDetail}>
                                <img src='http://t13.baidu.com/it/u=3030051112,1950393014&fm=224&app=112&f=JPEG?w=500&h=500' alt=""/>
                                <div className="words">
                                    <h2>{good.name}</h2>
                                    <br/>
                                    <h3 style={{marginLeft:'5px'}}>{good.parameter}</h3>
                                    <br/>
                                    <p style={{color:'#d11a2d'}}>
                                        ￥
                                        <h2 style={{display:'inline-block'}}>
                                            {good.price}
                                        </h2>
                                    </p>
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

