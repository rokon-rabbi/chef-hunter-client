import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/Errorpage/Errorpage.jsx';
import Home from './pages/Home/Home.jsx';
import Blog from './pages/blog/Blog.jsx';
import Loginpage from './pages/Loginpage/Loginpage.jsx';
import Registerpage from './pages/Registerpage/Registerpage.jsx';
import About from './pages/about/About.jsx';
const router= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/', element: <Home/>,
     },
      { path: '/blog', element: <Blog/> },
      { path: '/login', element: <Loginpage/> },
      { path: '/register', element: <Registerpage/> },
      { path: '/about', element: <About/> }
    ],
  }
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
