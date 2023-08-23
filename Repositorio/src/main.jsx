import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
// import App from './App.jsx'
import Home from './routes/Home.jsx'
import Categories from './routes/Categories.jsx'
import Contact from './routes/Contact.jsx'
import Error from './routes/Error.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: '/categories',
    element: <Categories/>,
  },
  {
    path: '/contact',
    element: <Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
