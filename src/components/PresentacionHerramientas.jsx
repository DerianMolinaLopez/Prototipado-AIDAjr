import React from 'react'
import robotPresentador from '../img/presentadorVacio.jpeg'
import word from '../img/word.png'
import excel from '../img/excel.png'
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
    <div className='flex flex-row'>
      <div className='bg-indigo-700 w-5/12'>a</div>
      <div className=' w-7/12' >
          <div className='bg-green-800  verde absolute'>
            <h2 className='text-center left-40 text-white font-semibold top-60 absolute text-4xl'>¿Con que vamos a trabajar ahora?</h2>
            <div className='posicionamiento absolute flex gap-5 w-56 bg-white h-20 p-3 rounded-lg'>
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
            <h2 className='text-center left-40 text-white font-semibold top-96 mt-40 absolute text-4xl'>Apoya tu conocimiento con los cursos que tenemos</h2>

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