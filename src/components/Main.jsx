import React from 'react'
import Nosotros from './Nosotros'
import Mision from './Mision'
const Main = () => {

  return (
    <main>
      <section className='space-y-10 my-10' >{/*nosotros */}
      <h2 className='text-center text-5xl font-black    '>¿Quienes somos?</h2>
      <div className='bg-azul-fuerte-medio'>
            <Nosotros/>
      </div>
      <h2 className='text-center text-5xl font-black    '>¿Que es lo que pretendemos?</h2>{/*mision*/}
      <div className='bg-verde-fuerte-reducido'>
        <Mision/>
      </div>
      <h2 className='text-center text-5xl font-black    '>Nuestra vision para el futuro</h2>
      <div className='bg-naranja'>{/*visison */}
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
