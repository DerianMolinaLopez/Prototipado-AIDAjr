import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Inicio from './components/pages/InicioCursos/Inicio.jsx'
import PaginaExcel from './components/pages/PaginaExcel.jsx'
import PaginaPower from './components/pages/PaginaPower.jsx'
import PaginaWord from './components/pages/PaginaWord.jsx'
import Login from './components/pages/Login.jsx'
import PresentacionHerramientas from './components/PresentacionHerramientas.jsx'
import {createBrowserRouter,RouterProvider}  from 'react-router-dom'
//el router para mandar todas las rutas
const router  = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/AIDAjr-modelo',
    element:<PresentacionHerramientas/>
  },
  {
    path: '/AIDAjr-modelo/word',
    element:<PaginaWord/>
  },
  ,
  {
    path: '/AIDAjr-modelo/excel',
    element:<PaginaExcel/>
  },
  ,
  {
    path: '/AIDAjr-modelo/power',
    element:<PaginaPower/>
  },
  {

    path: '/AIDA-CURSOS',
    element:<Inicio/>
  },

{
    path: '/Login',
    element:<Login/>
  },

])
//? en este proyecto habra rutas y otras que si o si seran anidadas

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
