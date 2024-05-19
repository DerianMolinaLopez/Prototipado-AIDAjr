
import { generarClaves } from '../../helpers/generarClaves'
import CardCurso from './CardCurso'
import axios from 'axios'
import { useEffect, useState } from 'react'
import fondo1 from '../../img/fondo1.jpg'
import fondo2 from '../../img/fondo2.jpg'
import fondo3 from '../../img/fondo3.jpg'


const ExploracionCursos = ({mensaje,agregarCurso,cursos, titulo}) => {

    //efecto para cargar ls datos de los cursos
  
  return (
    <section className='px-10'>
       <div className=' rounded-lg'>
         <h3 className='text-3xl text-center mt-10'>
            {mensaje}
        </h3>
        <div className='grid place-items-center px-5 py-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-10'>
           {cursos.map((curso) =>(
           <CardCurso 
                      tipo={'exploracion'}
                      key={curso._id}
                      id={curso._id}
                      titulo={curso.nombre}
                      descripcion={curso.descripcion}
                      imagen={curso.imagen}
                      agregarCurso = {agregarCurso}
             />))}
            </div>
        
       </div>
       
    </section>
  )
}

export default ExploracionCursos
