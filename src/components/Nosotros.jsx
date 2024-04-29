import React from 'react'
import imagen from '../img/estudioso.jpg'
const Nosotros = () => {
  return (
    <article className='grid grid-cols-2 pt-10 px-10'>
        <article className='w-full flex justify-center'>
           <picture className=''>
            <img className='rounded-lg shadow-lg mb-7' src={imagen} alt="imagen de niño estudiando" />
           </picture>
        </article>
        <article className='w-1/2'>
            <p className='text-white font-bold text-lg'>Somos un equipo multidisciplinario compuesto por 4 individuos con habilidades y experiencias diversas. En el campo de la ingeniería en sistemas, pasando por expertos en negocios y especialistas en comunicación, cada miembro de nuestro equipo aporta una perspectiva única y valiosa a nuestro proyecto.</p>
           </article>
      
    </article>
  )
}
//aidajr\src\img\estudioso.jpg

export default Nosotros
