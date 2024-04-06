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
    console.log(opacity)
  },[])

  return (
    <div className={`relative transition-all duration-500 ${opacity ? 'opacity-100' : 'opacity-0'} `} >
      <h2 className='text-center left-16 top-10 absolute font-bold text-4xl'>¿Con que vamos a trabajar ahora?</h2>
      <div className='posicionamiento absolute flex gap-5 w-56'>
        <Link to="/AIDAjr-modelo/word" className='hover:scale-150 transition-all duration-200'>
          <img src={word} alt="" />
        </Link>
        <Link to="/AIDAjr-modelo/power" className='hover:scale-150 transition-all duration-200'>
          <img src={power} alt="" />
          
        </Link>
        <Link to='/AIDAjr-modelo/excel' className='hover:scale-150  transition-all duration-200'>
          <img src={excel} alt="" />
          
        </Link>
      </div>
       
      <img className={`altura-robot `}
           src={robotPresentador} alt="robot con la presnetacion vacia" />
    </div>
  )
}

export default PresentacionHerramientas
