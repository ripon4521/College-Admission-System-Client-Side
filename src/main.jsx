import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
const queryClient = new QueryClient();
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CollegeDetails from './pages/Home/FeaturedCollege/CollegeDetails.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import Register from './pages/Regester/Register.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import Login from './pages/Login/Login.jsx';
import ResetPassword from './pages/Login/ResetPassword.jsx';
import ErrorPage from './pages/Error/ErrorPage.jsx';
import FeaturedCollege from './pages/Home/FeaturedCollege/FeaturedCollege.jsx';
import Admission from './pages/Admission/Admission.jsx';
import MyColllege from './pages/Home/MyCollege/MyColllege.jsx';
import Private from './pages/Private/Private.jsx';
import Profile from './pages/Profile/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: "college-details/:_id",
        element: <Private><CollegeDetails /></Private>,
        loader: ({ params }) => fetch(`http://localhost:5000/allCollegeData/${params._id}`).then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
      },{
        path:'/signUp',
        element:<Register/>
      },{
        path:'/login',
        element:<Login/>
      },{
        path:'/forgetPass',
        element:<ResetPassword/>
      },{
        path:'*',
        element:<ErrorPage/>
      },
      {
        path:'/college',
        element:<FeaturedCollege/>
      },{
        path:'/admission',
        element:<Private><Admission/></Private>
      },{
        path:'/myCollege',
        element:<Private> <MyColllege/></Private>
      },{
        path:'/profile',
        element:<Profile/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>

     <AuthProviders>
     <RouterProvider router={router} />
     </AuthProviders>

    </QueryClientProvider>
 
  
  </React.StrictMode>
);
