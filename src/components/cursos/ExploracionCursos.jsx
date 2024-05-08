import React, { useState } from 'react'
import { generarClaves } from '../../helpers/generarClaves'
import CardCurso from './CardCurso'
import axios from 'axios'
import { useEffect } from 'react'
import fondo1 from '../../img/fondo1.jpg'
import fondo2 from '../../img/fondo2.jpg'
import fondo3 from '../../img/fondo3.jpg'





const informacionCard=[
    {
        titulo:'Curso de Excel',
        descripcion:'Aprende a usar Excel de manera profesional',
        imagen:fondo1
    },
    {
        titulo:'Curso de Excel',
        descripcion:'Aprende a usar Excel de manera profesional',
        imagen:fondo2
    },
    {
        titulo:'Curso de Excel',
        descripcion:'Aprende a usar Excel de manera profesional',
        imagen:fondo3
    },
    {
        titulo:'Curso de Excel',
        descripcion:'Aprende a usar Excel de manera profesional',
        imagen:fondo1
    },
    {
        titulo:'Curso de Excel',
        descripcion:'Aprende a usar Excel de manera profesional',
        imagen:fondo2
    },
    {
        titulo:'Curso de Excel',
        descripcion:'Aprende a usar Excel de manera profesional',
        imagen:fondo3
    },
    {
        titulo:'Curso de Excel',
        descripcion:'Aprende a usar Excel de manera profesional',
        imagen:fondo1
    },
    {
        titulo:'Curso de Excel',
        descripcion:'Aprende a usar Excel de manera profesional',
        imagen:fondo2
    },
    {
        titulo:'Curso de Excel',
        descripcion:'Aprende a usar Excel de manera profesional',
        imagen:fondo3
    }
]

const ExploracionCursos = ({mensaje,agregarCurso}) => {
    const [cursosCarga, setCursosCarga ] = useState([])
    //efecto para cargar ls datos de los cursos
    useEffect(()=>{
        const obtenerCursos = async() => {
            const response = await axios.get('http://localhost:3000/cursos/cursos')
            console.log(response.data)
            setCursosCarga(response.data)
        }
        obtenerCursos()
    },[])
  return (
    <section>
        <h3 className='text-3xl text-center mt-10'>
            {mensaje}
        </h3>
        <div className='grid place-items-center  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-10'>
           {cursosCarga.map((curso,index) =>(
           <CardCurso 
                      key={curso.id}
                      tiutlo={curso.name}
                      descripcion={curso.description}
                      imagen={informacionCard[index].imagen}
                      agregarCurso = {agregarCurso}
             />))}
            </div>
        
    </section>
  )
}

export default ExploracionCursos
