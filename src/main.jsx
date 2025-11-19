import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layouts/Root';
import Home from './layouts/Home';
import Profile from './layouts/Profile';
import Login from './layouts/Login';
import Details from './components/Details';
import Signup from './layouts/Signup';
import Authprovider from './context/Authprovider';
import Privateroute from './Route/Privateroute';
import Update from './layouts/Update';
import Forget from './layouts/Forget';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'profile',
        Component: Profile
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'signup',
        Component: Signup
      },
      {
        path: 'details/:cardid',
        element: <Privateroute>
          <Details></Details>
        </Privateroute>
      },
      {
        path:'profile',
        Component: Profile
      },
      {
        path: 'update',
        Component: Update
      },
      {
        path:'forget',
        Component: Forget
      },
      {
        path: '/*',
        element: <p className='text-9xl font-black text-center my-30'>404 PAGE NOT FOUND</p>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>
)
