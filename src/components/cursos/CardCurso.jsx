import React from 'react'

const CardCurso = ({tiutlo,descripcion,imagen,id}) => {
  /* para agregar un curso, pasaremos un objeto que tenga el titulo, descripcion */
  const handleVerMas = ()=>{
    console.log('Ver mas',id)
  } 
  return (
    <div className='rounded-md shadow-lg p-5 border-2 '>
        <picture> {/*Imagen demostrativa o de concepto */}
         <img src={imagen} alt="Imagen del curso" />
        </picture>
      
        <h3>{tiutlo}</h3>
        <p>{descripcion}</p>
      
        <button  
                onClick={handleVerMas}
                className='bg-green-700 w-full text-white rounded-md mt-5 p-1'>Ver mas</button>
    </div>
  )
}

export default CardCurso
