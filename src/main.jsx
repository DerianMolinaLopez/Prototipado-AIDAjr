import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../src/login.css'

import Inicio from './components/pages/InicioCursos/Inicio.jsx'
import PaginaExcel from './components/pages/PaginaExcel.jsx'
import PaginaPower from './components/pages/PaginaPower.jsx'
import PaginaWord from './components/pages/PaginaWord.jsx'
import Login from './components/pages/Login.jsx'
import CursoSeleccionadoInstructor from './components/CursoSeleccionadoInstructor.jsx'
import MisAlumnos from './components/pages/MisAlumnos.jsx'
import MisCursos from './components/cursos/MisCursos.jsx'
import PresentacionHerramientas from './components/PresentacionHerramientas.jsx'
import {createBrowserRouter,RouterProvider}  from 'react-router-dom'
import Layout from './layout/Layout.jsx'
//el router para mandar todas las rutas
import DetalleCursos from './components/cursos/DetalleCursos.jsx'
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
    path: '/cursos',
    element:<Layout/>,
    children:[
      {

        path: '/cursos/AIDA-CURSOS',
        element:<Inicio/>
      },
      {
        path: '/cursos/AIDA-MIS-CURSOS',
        element:<MisCursos/>
      },
      {
        path: '/cursos/AIDA-CURSOS/detalle',
        element:<DetalleCursos/>
      },
      {
        path: '/cursos/AIDA-MIS-CURSOS/mis-alumnos',
        element:<MisAlumnos/>
      }
      ,
      {
        path: '/cursos/AIDA-MIS-CURSOS/mis-alumnos/curso-detalle',
        element:<CursoSeleccionadoInstructor/>
      }
    ]
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
