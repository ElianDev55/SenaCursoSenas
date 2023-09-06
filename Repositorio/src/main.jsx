import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
// import App from './App.jsx'
import Home from './routes/Home.jsx'
import Categories from './routes/Categories.jsx'
import Form from './routes/Form.jsx'
import Categorie from './routes/Categorie';
import Forum from './routes/Forum.jsx'
import Watchvideo from './routes/Watchvideo';
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
    path: '/forum',
    element: <Forum/>,
  },
  {
    path: '/form',
    element: <Form/>,
  },
  {
    path: '/categorie',
    element: <Categorie/>,
  },
  {
    path: '/watch',
    element: <Watchvideo/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
