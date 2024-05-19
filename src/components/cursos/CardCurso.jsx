import React from 'react'
import { useNavigate } from 'react-router-dom'
import imag from '../../img/fondo2.jpg'
const CardCurso = ({titulo,descripcion,imagen,id,tipo,tipoVista}) => {
  const navigate = useNavigate()
  /* para agregar un curso, pasaremos un objeto que tenga el titulo, descripcion */
  const handleVerMas = ()=>{
    console.log('Ver mas',id)
  } 

  const handleChangePage = e =>{
    e.preventDefault()
    //vamos a mandar solo el id del curso al localStorage para hacer la peticion y renderizacion
    //de la informacion
    if(tipo==='exploracion'){
      localStorage.setItem('curso',JSON.stringify({id}))
      navigate(`/cursos/AIDA-CURSOS/detalle`)
    
    }
  }
   console.log(tipoVista)
  return (
    <div className={`${tipoVista=='detalle'?'rounded-md bg-blue-900 p-2 ':'rounded-md shadow-lg p-5 border-2 space-y-5'} bg-white ` }>
        <picture> {/*Imagen demostrativa o de concepto */}
         <img src={imag} alt="Imagen del curso" />
        </picture>
      
        <h3 className='font-bold text-lg'>{titulo}</h3>
        <p>{descripcion}</p>
      
        <button  
                onClick={e=>handleChangePage(e)}
                className={`bg-green-700 w-full
                           ${tipo==='misCursos' ? 'bg-indigo-600': ''}
                           text-white rounded-md mt-5 p-1
                           ${tipoVista==='detalle' ? 'bg-blue-900': 'bg-green-700'}`
                           
                           }>
                           {tipo==='misCursos' ? 'Seguir': 'Ver mas'}
                </button>
    </div>
  )
}

export default CardCurso
