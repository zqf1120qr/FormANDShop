import Post from '../pages/Post'
import Forum from '../pages/Forum'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import Like from '../pages/Like'
import Me from '../pages/Me'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Wallet from '../pages/Wallet'
import Setting from '../pages/Setting'
import Profile from '../pages/Profile'
import PostDetail from '../pages/PostDetail'
import {Navigate} from 'react-router-dom'
import MyPost from "../pages/MyPost";
export const routes=[
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/forum',
        element:<Forum/>
    },
    {
        path:'/like',
        element:<Like/>
    },
    {
        path:'/me',
        element:<Me/>
    },
    {
        path:'/post',
        element:<Post/>
    },
    {
        path:'/detail',
        element:<Detail/>
    },{
        path:'/mypost',
        element:<MyPost/>
    },{
        path:'/login',
        element:<Login/>
    },{
        path:'/register',
        element:<Register/>
    },{
        path:'/wallet',
        element:<Wallet/>
    },{
        path:'/setting',
        element:<Setting/>
    },{
        path:'/profile',
        element:<Profile/>
    },{
        path:'/postDetail',
        element:<PostDetail/>
    },
    {
        path:'/',
        element: <Navigate to='/login'/>
    }
]