import React from 'react'
import Nosotros from './Nosotros'
import Mision from './Mision'
import Planes from './Planes'
import Vision from './Vision'
const Main = () => {

  return (
    <main className='mt-10'>
      <section className='redondeo-imagen mb-3'>
         <article className='oscurecer text-white flex justify-around pt-20 '>
          <p className='text-yellow-400 font-extrabold text-2xl'>NOMBRE</p>
          <p className='text-green-600 font-extrabold text-2xl'>NOMBRE</p>
          <p className='text-red-700 font-extrabold text-2xl'>NOMBRE</p>
          <p className='text-blue-700 font-extrabold text-2xl'>NOMBRE</p>
         </article>
        </section>
        <div className='flex justify-around mb-20'>
          <div className=' bg-yellow-400 w-32 h-8 rounded-full'></div>
          <div className=' bg-green-600 w-32 h-8 rounded-full'></div>
          <div className=' bg-red-600 w-32 h-8 rounded-full'></div>
          <div className=' bg-blue-700 w-32 h-8 rounded-full'></div>
        </div>
        
      <h2 className='text-center text-5xl font-black '>Planes de uso y licencias a la palma de tu mano</h2>
      <br />
      <br />
      <section className='lg:grid lg:grid-cols-3 md:flex  md:flex-col mt-10 gap-5 '>
        <Planes/>
      </section>
      <section className='space-y-10 my-10' >{/*nosotros */}
      <h2 className='text-center text-5xl font-black    '>¿Quienes somos?</h2>
      <div className='bg-azul-word'>
            <Nosotros/>
      </div>
      <h2 className='text-center text-5xl font-black    '>¿Que es lo que pretendemos?</h2>{/*mision*/}
      <div className='bg-verde-excel'>
        <Mision/>
      </div>
      <h2 className='text-center text-5xl font-black    '>Nuestra vision para el futuro</h2>
      <div className='bg-power-point'>{/*visison */}
            <Vision/>
      </div>
      
      </section>
     
      <footer className='flex justify-between border-t-4 border-gray-300 text-gray-500 py-10'>
        <p>Kenyi cervantes</p>
        <p>Derian Molina Lopez</p>
        <p>Ramses</p>
        
        
      </footer>
    </main>
  )
}

export default Main
