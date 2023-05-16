import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import {NavBar, Form, Input,TextArea,ImageUploader,Cascader,Button} from 'antd-mobile'

const options=[
    {
        label: '小米',
        value: '小米',
        children: [
            {
                label: '小米13',
                value: '小米13',
            },
            {
                label: '小米12',
                value: '小米12',
            },
            {
                label: '小米11',
                value: '小米11',
            }
        ]
    },{
        label: '华为',
        value: '华为',
        children: [
        {
            label: '华为P60',
            value: '华为P60',
        },
        {
            label: '华为P50',
            value: '华为P50',
        },
        {
            label: '华为P40',
            value: '华为P40',
        }
    ]
}
]
export default function Post() {
    const [visible, setVisible] = useState(false)
    const navigate=useNavigate()
    const back = () => {
        window.history.go(-1)
        window.scrollTo(0,0)
    }
    return (
        <div>
            <NavBar back='返回' onBack={back}>
                发帖
            </NavBar>
            <Form layout='horizontal' mode='card'>
                <Form.Item >
                    <Input placeholder='请输入标题' />
                </Form.Item>
                <Form.Item >
                    <TextArea placeholder='请输入内容' rows={10} />
                    <ImageUploader />
                </Form.Item>
                <Form.Item >
                    <Button
                        onClick={() => {
                            setVisible(true)
                        }}
                        color='primary' fill='outline'
                    >
                        #添加话题
                    </Button>
                    <Cascader
                        options={options}
                        visible={visible}
                        onClose={() => {
                            setVisible(false)
                        }}
                    />
                </Form.Item>
            </Form>
            <div style={{margin:'0 auto'}}>
                <Button
                    color='primary'
                    fill='outline'
                    style={{width:'25%',margin: '5% 5%'}}
                >存草稿</Button>
                <Button
                    color='primary'
                    fill='solid'
                    style={{width:'50%',margin: '5% 5%'}}
                >发布</Button>
            </div>

        </div>
    );
}

