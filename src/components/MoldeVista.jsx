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
      <section className='col-span-2 rounded-lg border-indigo-500 border-2'>aa</section>
      <section className='col-span-3 rounded-lg h-full border-indigo-500 border-t-2 border-b-2'>
     
          <div className='h-5/6 bg-red-500 p-5'>
            aaa
          </div>
          <div className='h-1/6 flex items-center bg-gray-600 flex-row px-5'>
          <input type="text" className='w-full rounded-md p-2 border-b-4 border-indigo-700 text-white font-semibold bg-gray-600' placeholder='aaa'  />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-10 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>

          </div>
        
        
       
        
      </section>
      <section className='col-span-2 rounded-lg border-indigo-500 border-2'>aa</section>
    </div>
  )
}

export default MoldeVista
