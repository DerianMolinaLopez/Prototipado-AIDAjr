import React from 'react'
import imagen from '../img/estudioso.jpg'
import estadisticas from '../img/estadisticas.webp'
const Nosotros = () => {
  return (
    <article className='grid sm:grid-cols-1 lg:grid-cols-2 py-10 px-10 lg:place-items-start sm:place-items-center'>
        <article className='w-full flex justify-center'>
           <picture className=''>
            <img className='rounded-lg shadow-lg anchura mb-7' src={imagen} alt="imagen de niño estudiando" />
           </picture>
        </article>
        <article className='w-1/2 flex justify-center'>
            <p className='text-white text-lg font-bold sm:text-2xl'>Somos un equipo multidisciplinario compuesto por 4 individuos con habilidades y experiencias diversas. En el campo de la ingeniería en sistemas, pasando por expertos en negocios y especialistas en comunicación, cada miembro de nuestro equipo aporta una perspectiva única y valiosa a nuestro proyecto.</p>
           </article>
      
    </article>
  )
}
//aidajr\src\img\estudioso.jpg

export default Nosotros
