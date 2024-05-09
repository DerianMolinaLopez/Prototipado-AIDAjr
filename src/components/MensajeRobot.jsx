import React from 'react'
import { useState,useEffect } from 'react'
import cabezaPower from '../img/cabeza-power.jpg'
import cabezaWord from '../img/CabezaWord.jpg'
import cabezaExcel from '../img/cabeza-excel.jpg'
const MensajeRobot = ({tipo}) => {
    const [tipoEx,setTipoEx]=useState('')
    const mensaje = 'Hola, me has escogido, ¿que necesitas?'
    let [cabeza,setCabeza]=useState('')
    const tipoColorBorde = {
        excel:'border-green-500',
        word:'border-blue-700',
        power:'border-orange-500'
    }
    const tipoCabeza = {
        excel:cabezaExcel,
        word:cabezaWord,
        power:cabezaPower
    }
    //mandamos un efecto para que cuando cargue, asifne el tipo
    useEffect(()=>{
        if(tipo){
            console.log(tipo)
            setCabeza(tipoCabeza[tipo])
            setTipoEx(tipo)
        }
    },[])
    /*
    los tipos son
    excel
    word
    power
    vamos a complicar bastante ese detalles
    */


    /*
    simulamos de que es el chatbot
    quien es el que inicia el chat primero
    con un mensaje de bienvenida
    */
  return (
    <div className={` p-5 h-44 rounded-lg`}>
        <img className='rounded-full w-20' src={cabeza} alt="" />
        <p className='text-white font-bold text-2xl mensaje-robot mt-3 max-w-screen-sm'>
            {mensaje}
        </p>
    </div>
  )
}

export default MensajeRobot
