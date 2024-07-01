import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Errorpage from './page/Errorpage';
import Home from './page/Home';
import Signin from './page/signin';
import Signup from './page/signup';
import Upload from './page/Upload';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Errorpage/>,
    children:[
      {
      path: "/",
      element: <Home/>,
    },
      {
      path: "login",
      element: <Signin/>,
    },
      {
      path: "signup",
      element: <Signup/>,
    },
    {
      path: "upload",
      element: <Upload/>,
    },
]
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
