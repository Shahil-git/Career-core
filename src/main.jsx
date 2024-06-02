import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Statics from './Components/Statics/Statics.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import Blogs from './Components/Navber/Blogs/Blogs.jsx';
import JobDetails from './Components/JobsDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
     path:"/Statistics",
     element:<Statics></Statics>

      },
      {
     path:"/Applied Jobs",
     element:<AppliedJobs></AppliedJobs>
      },
      {
        path:"/Blogs",
        element:<Blogs></Blogs>
      },
      {
        path:"/job/:id",
        loader:() => fetch('../jobs.json'),
        element:<JobDetails></JobDetails>
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
