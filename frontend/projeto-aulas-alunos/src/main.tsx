import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './routes/Home';
import Usuarios from './routes/Usuarios';
// const router  = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>

//   },
//   {
//     path: '/usuarios',
//     element: <Usuarios/>
//   }
// ]);

const router  = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'usuarios',
        element: <Usuarios/>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
