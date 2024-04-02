import React from 'react'
import Nosotros from './Nosotros'
import Mision from './Mision'
import Planes from './Planes'
const Main = () => {

  return (
    <main className='mt-28'>
      <h2 className='text-center text-5xl font-black    '>Planes de pago accesibles a la palma de tu mano para tus necesiades</h2>
      <section className='grid grid-cols-3 mt-10 gap-5'>
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
            <Nosotros/>
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
