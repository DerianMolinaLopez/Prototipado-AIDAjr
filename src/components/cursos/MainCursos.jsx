import React from 'react'
import ExploracionCursos from './ExploracionCursos'
const MainCursos = () => {
  return (
    <div className='max-w-7xl mx-auto mt-5'>
      <section className='bg-gray-300 px-40 py-20'>
        <div className='bg-white shadow-lg p-4'>
            <article className='m-5 space-y-2'>
                    <h2 className='text-3xl font-semibold'>Bienvenido ¿Estas listo para aprender?</h2>
                    <p className='text-2xl'>¡Mejora tus habilidades de oficna!</p>
             </article>
        </div>
      </section>
      <ExploracionCursos/>
      
    </div>
  )
}

export default MainCursos
