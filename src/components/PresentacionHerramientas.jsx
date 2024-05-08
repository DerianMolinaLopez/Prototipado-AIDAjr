import React from 'react'
import robotPresentador from '../img/presentadorVacio.jpeg'
import word from '../img/word.png'
import excel from '../img/excel.png'
import aidajr from '../img/logooAIDA.png'
import { Link } from 'react-router-dom'
import power from '../img/powerPoint.png'
import { useState,useEffect } from 'react'

//aidajr\src\img\presentadorVacio.jpeg
/*
* Presentacion de las herramienats 
* que el suaurio pueda escoger
* para usar AIDAjr
!en cada uno de las a, se cambiara despues a link
*/

const PresentacionHerramientas = () => {
  const [opacity,setOpacity] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setOpacity(!opacity )
    },500)
  
  },[])

  return (
    <>
   <div className='w-screen bg-verde-mongo'>
    <div className='grid grid-cols-2'>
        <div className='p-5 mt-16' >
          <p className='teclas text-4xl ml-72  text-white  font-bold'>AIDAJR</p>
          <div className='flex justify-center'>
            <img className='w-3/4 h-3/4' src={aidajr} alt="imagen-logo" />
          </div>
          
        </div>
        <div className='oval-half-red mt-10'>
          <div className='absolute contenedor-herramienta'>
                          <h1 className='card-herramienta font-bold text-3xl mt-10 ml-5 text-verde-mongo'>
                          ¿Con que vamos a trabajar ahora?
                        </h1>
                      <div className='herramientas anchura flex flex-row justify-around items-center rounded-lg bg-gray-200 h-28'>
                        <a href="">
                          <img className='w-16' src={word} alt="icono-word" />
                        </a>
                        <a href="">
                          <img className='w-16' src={excel} alt="icono-excel" />
                        </a>
                        <a href="">
                          <img className='w-16' src={power} alt="icono-power" />
                        </a>
                      </div>
                      <p className='relative top-56 left-28 text-center text-verde-mongo font-extrabold'>¿Sigues confundido? <br /> intenta con nuestra plataforma de aprendizaje</p>
                      <button className='boton-aprender relative bg-verde-mongo top-60 left-80 rounded-full p-2 text-white font-semibold '>
                        
                        <p>Aprender mas</p>
                      </button>
          </div>
         
        </div>
    </div>
   
   </div>
    
    </>
  )
}

export default PresentacionHerramientas
/*

const PresentacionHerramientas = () => {
  const [opacity,setOpacity] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setOpacity(!opacity )
    },500)
  
  },[])

  return (
    <div className={`relative transition-all duration-500 ${opacity ? 'opacity-100' : 'opacity-0'} `} >
      <h2 className='text-center left-16 top-10 absolute font-bold text-4xl'>¿Con que vamos a trabajar ahora?</h2>
      <div className='posicionamiento absolute flex gap-5 w-56'>
        <Link to="/AIDAjr-modelo/word" className='transition-all duration-200'>
          <img src={word} alt="" />
        </Link>
        <Link to="/AIDAjr-modelo/power" className=' transition-all duration-200'>
          <img src={power} alt="" />
          
        </Link>
        <Link to='/AIDAjr-modelo/excel' className=' transition-all duration-200'>
          <img src={excel} alt="" />
          
        </Link>
      </div>
       
      <img className={`altura-robot `}
           src={robotPresentador} alt="robot con la presnetacion vacia" />
    </div>
  )
}
*/