import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Orders from './components/Orders';
import Register from './components/Register';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Main from './layout/Main';
import PrivateRoute from "./routes/PrivateRoute";

const router =createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      // // {
      // //   path:'/register',
      // //   element:<RegisterReactBootstrap></RegisterReactBootstrap>
      // // },
      {
        path:'/signin',
        element:<Signin></Signin>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },

    ]
  }
])

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;