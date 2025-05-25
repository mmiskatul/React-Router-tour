import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Header from './Components/Header/Header.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Service from './Components/Service/Service.jsx';
import Users from './Components/User/Users.jsx';
import UserDetails from './Components/User/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/Posts/PostDetails.jsx';
import ErrorPage from './Components/Error/ErrorPage.jsx';
const router=createBrowserRouter([
  {
    path: '/',
    element:<Home/>,
    errorElement:<ErrorPage/>,  
    children:[
      {
        path: '/about',
        element : <About/>
      },
      {
        path :'/contact',
        element:<Contact/>
      },
      {
        path: '/service',
        element: <Service/>
      },
      {
        path: '/users',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users/>
      },{
        path: '/users/:userid',
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        element:<UserDetails/>        
      },{
        path:'/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts/>
      },{
        path:'/posts/:postid',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`),
        element:<PostDetails/>
      }
    ]
  },
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
