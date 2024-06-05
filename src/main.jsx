import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CollegeDetails from './pages/Home/FeaturedCollege/CollegeDetails.jsx';
import MainLayout from './Layout/MainLayout.jsx';

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
        element: <CollegeDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/allCollegeData/${params._id}`).then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
