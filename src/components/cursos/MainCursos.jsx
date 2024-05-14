import React from 'react'
import { useState,useEffect } from 'react'
import CardCurso from './CardCurso'
import axios from 'axios'
import ExploracionCursos from './ExploracionCursos'
const MainCursos = () => {
  const [cursosUsuario,setCursosUsuario] = useState([{}])
  const [cursos,setCursos] = useState([])
  const [mensaje ,setMensaje] = useState('')
useEffect(() => {
  //dos funciones, unaque trae todos los cursos y otra que trae todods los cursos que el usuario esta inscrito

  const obtenerCursos = async () =>{
    const response = await axios.get('http://localhost:3000/cursos')
    setCursos(response.data)

  }
  const obtenerCursosUsuario = async () =>{
    //todos los cursos a lo que el alumno esta inscrito pero taremos los datos del lcoalStoage
    const usuario = JSON.parse(localStorage.getItem('usuario'))
    console.log(usuario)
    const {_id} = usuario.user
    console.log(_id)
    const cursosUsuario = await axios.get(`http://localhost:3000/user/cursos/${_id}`)
    console.log(cursosUsuario.data.cursos)
    setCursosUsuario(cursosUsuario.data.cursos)
  }
  obtenerCursos()
  obtenerCursosUsuario()
  
}, [])

const agregarCurso = (curso) =>{
  //vamos a recibir un objeot que contiene enombre, el id, nombre, descripcion, para la
  //para la peticion http solo mandaremos el id como parametro en la peticion
  /*
  /*
  key={curso._id}
                      tiutlo={curso.nombre}
                      descripcion={curso.descripcion}
                      imagen={curso.imagen}
                      agregarCurso = {agregarCurso}
*/
  
  console.log('agregando curso')
}
  return (
    <div className='max-w-7xl mx-auto mt-5'>
      <section className='bg-gray-300 px-40 py-20'>
        <div className='bg-white shadow-lg p-4'>
            <article className='m-5 space-y-2'>
                    <h2 className='text-3xl font-semibold'>Bienvenido ¿Estas listo para aprender?</h2>
                    <p className='text-2xl'>¡Mejora tus habilidades de oficna!</p>
             </article>
        </div>
      </section>
      <section >
        {cursosUsuario.length>0? <h2 className='text-3xl text-center mt-10 font-bold'>Cursos en los que estas inscrito</h2>: ''}
   
        <div className={`${cursosUsuario.length>0? "grid place-items-center  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-10":
          ''
        } `}>
            {cursosUsuario.length > 0 ? <>
     
        
            
        {cursosUsuario.map(curso=>{
          return <CardCurso key={curso._id}
                            titulo={curso.nombre}
                            descripcion={curso.descripcion}
                            imagen={curso.imagen}
                            agregarCurso={agregarCurso}
                            instructor={curso.instructor}
                            />
        
        })}
        </>: <h3 className='text-3xl text-center mt-10'>No estas inscrito a ningun curso, explora mas opciones</h3>}
        </div>

      </section>
      <h2 className='text-center text-2xl my-9'>Cursos que te pueden interesar</h2>
      <ExploracionCursos cursos={cursos}
                         mensaje={mensaje}
                         agregarCurso={agregarCurso}/>
      
    </div>
  )
}

export default MainCursos
