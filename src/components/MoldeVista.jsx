/*
*este archivo es para una vista condicional 
* a la hora de escoger la herramienta,
* la interface seria modificada segun el color y ademas
* de qeu se va a cambiar algunas imagenes
*/
import React from 'react'
/*
Esta vista para manejar colores condicionales
va a recibir un Type, que seria el tipo de herramienta
y con eso puedo identificar con que color cambair
*/
const MoldeVista = () => {
  return (
    <div className='grid grid-cols-7 h-screen p-10 '>
      <section className='col-span-2 rounded-lg border-indigo-500 border-4'>aa</section>
      <section className='col-span-3 rounded-lg border-indigo-500 border-t-4 border-b-4'>aa</section>
      <section className='col-span-2 rounded-lg border-indigo-500 border-4'>aa</section>
    </div>
  )
}

export default MoldeVista
