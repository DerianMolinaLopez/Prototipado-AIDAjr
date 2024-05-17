import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import CardCurso from './CardCurso'
const MisCursos = () => {
    const [cursos, setCursos] = useState([{}])

    useEffect(()=>{
        const obtenerCursosAlumno = async () =>{
            //mandamos a traer del lcoalStorage
            const usuario = JSON.parse(localStorage.getItem('usuario'))
            console.log(usuario.user)
            const response=await axios.get(`http://localhost:3000/user/cursos/${usuario.user._id}`)
            console.log(response.data.cursos)
            setCursos(response.data.cursos)
            //vamos a verificar el tipo de usuairo que es
            //si es de instructor, entocnes habilitamos una de las opciones en la barra de navegacion
           
        }
        obtenerCursosAlumno()
    },[])
  return (
    <div >
      {cursos.length===0 ? <h1 className=' text-center mt-10 text-indigo-700 font-bold text-3xl'>No tienes cursos, agrega unos cuantos y regresa</h1>: 
      <h1 className='text-3xl font-bold text-center mt-10'>Tus cursos</h1>
      }
      <section className='grid grid-cols-4 text-black place-items-center p-10'>

        {cursos.map(curso=> <CardCurso key={curso._id} tiutlo={curso.nombre} descripcion={curso.descripcion} imagen={curso.imagen} id={curso._id}/>)}
      

      </section>
    </div>
  )
}

export default MisCursos
