import React from 'react'
import CardAlumnos from '../CardAlumnos'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const MisAlumnos = () => {
    const navigate = useNavigate()
    const [cursosInstructor, setCursosInstructor] = useState([])
    const [cursoSeleccionado,setCursoSeleccionado] = useState()
useEffect(() => {
    const cursosInstructor = async () => {
        //antes de la peticion madnamos a traer el instructor del localStorage
        const instructor = JSON.parse(localStorage.getItem('usuario'))
        const response = await axios.get(`http://localhost:3000/cursos/cursos/${instructor.user.email}`)
        setCursosInstructor(response.data.cursos)
    }
    cursosInstructor()
}, [])
const handleDireccionar = (e)=>{
    e.preventDefault()
    console.log(cursoSeleccionado)
    console.log('hola')
    //antes de redireccionar guardamos en lcoalStorage el curso seleccionado
    localStorage.setItem('cursoSeleccionado',cursoSeleccionado)
    navigate('/cursos/AIDA-MIS-CURSOS/mis-alumnos/curso-detalle')
}
  return (
    <div className='bg-gray-300'>
     <h1 className='text-center text-2xl font-semibold pt-10'>Gestona el avance de tus alumnos</h1>

     {cursosInstructor.map((curso) => {
        return <CardAlumnos 
                            key={curso._id}
                            curso={curso}
                            handleDireccionar={handleDireccionar}
                            cursoSeleccionado={cursoSeleccionado}
                            setCursoSeleccionado={setCursoSeleccionado}
                            />
     })}
  
    </div>
  )
}

export default MisAlumnos
