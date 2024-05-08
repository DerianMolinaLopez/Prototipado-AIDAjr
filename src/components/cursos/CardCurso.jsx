import React from 'react'

const CardCurso = ({tiutlo,descripcion,imagen,agregarCurso}) => {
  /* para agregar un curso, pasaremos un objeto que tenga el titulo, descripcion */
  return (
    <div className='rounded-md shadow-lg p-5 border-2 '>
        <picture> {/*Imagen demostrativa o de concepto */}
         <img src={imagen} alt="Imagen del curso" />
        </picture>
        <h3>{tiutlo}</h3>
        <p>{descripcion}</p>
        <button  
                onClick={agregarCurso}
                className='bg-green-700 w-full text-white rounded-md mt-5 p-1'> Agregar Curso</button>
    </div>
  )
}

export default CardCurso
