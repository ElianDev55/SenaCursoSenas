import '../Styles/App.css'
import  {useRoutes, BrowserRouter}  from "react-router-dom";
import Home from '../Pages/Home';
import Colaboracion from '../Pages/Colaboracion';
import Foro from '../Pages/Foro';
import Default from '../Pages/Default';
import NavB from '../Components/NavB'
import { Perfil } from './Perfil';





const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/foro', element: <Foro /> },
    { path: '/colaboracion', element: <Colaboracion /> },
    { path: '/', element: <Home /> },
    { path: '/*', element: <Default/> },
    { path: '/perfil', element: <Perfil />},
  ])

  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <NavB />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
