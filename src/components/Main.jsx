import React from 'react'
import Nosotros from './Nosotros'
import Mision from './Mision'
import Planes from './Planes'
import Vision from './Vision'
const Main = () => {

  return (
    <main className='mt-32'>
      <h2 className='text-center text-5xl font-black '>Planes de uso y licencias a la palma de tu mano</h2>
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
