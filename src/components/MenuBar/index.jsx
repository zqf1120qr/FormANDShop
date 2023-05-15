import React from "react";
import {
    MessageOutline,
    UserOutline,
    UnorderedListOutline,
    HeartOutline,
    AddOutline
} from "antd-mobile-icons";
import { TabBar } from "antd-mobile";
import { useNavigate, useLocation } from "react-router-dom";
import './index.css'
function getItem(title, key, icon) {
    return {
        key,
        title,
        icon,
    };
}
const items = [
    getItem("首页", "/home", <UnorderedListOutline />),
    getItem("论坛", "/forum", <MessageOutline />),
    getItem("发帖", "/post", <AddOutline />),
    getItem("心愿单", "/like", <HeartOutline />),
    getItem("我的", "/me", <UserOutline />),
];

export default function MenuBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const setRouteActive = e => {
        navigate(e);
        window.scrollTo(0,0);
    };
    return (
        <TabBar
            className='tabBar'
            activeKey={location.pathname}
            onChange={value => setRouteActive(value)}>
            {items.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
        </TabBar>
    );
}


