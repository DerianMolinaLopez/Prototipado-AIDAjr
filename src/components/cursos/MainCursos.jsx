import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import ExploracionCursos from './ExploracionCursos'
const MainCursos = () => {
  const [cursos,setCursos] = useState([])
  const [mensaje ,setMensaje] = useState('')
 useEffect(() => {
  const obtenerCursos = async(usuario) => {
    console.log(usuario)
    const response = await axios.get(`http://localhost:3000/user/usuario-curso/${usuario.id}`)
    setCursos(response.data.cursos)
    if(response.data.cursos.length === 0){
      setMensaje('Oh puedo ver que no tienes ningun curso, adelante explora')
    } else {
      setMensaje('Estos son tus cursos')
    }
  }

  //primero obtenemos las credenciales del usuario
  const usuario = JSON.parse(localStorage.getItem('usuario'))

  obtenerCursos(usuario)
}, [])

const agregarCurso = (curso) =>{
  //vamos a recibir un objeot que contiene enombre, el id, nombre, descripcion, para la
  //para la peticion http solo mandaremos el id como parametro en la peticion
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
      <ExploracionCursos mensaje={mensaje}
                         agregarCurso={agregarCurso}/>
      
    </div>
  )
}

export default MainCursos
