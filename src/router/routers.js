import Post from '../pages/Post'
import Forum from '../pages/Forum'
import GoodDetail from '../pages/GoodDetail'
import Home from '../pages/Home'
import Like from '../pages/Like'
import Me from '../pages/Me'
import {Navigate} from 'react-router-dom'
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
    },{
        path:'/',
        element: <Navigate to='/home'/>
    }
]