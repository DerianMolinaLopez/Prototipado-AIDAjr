import React from 'react'
import imagen from '../img/estudioso.jpg'
const Vision = () => {
  return (
    <article className='grid grid-cols-2 pt-10 px-10'>
        <article className='w-full flex justify-center'>
           <picture className=''>
            <img className='rounded-lg shadow-lg mb-7' src={imagen} alt="imagen de niño estudiando" />
           </picture>
        </article>
        <article className='w-1/2'>
            <p className='text-white font-bold text-lg'>Con AIDA JR, no solo estamos trabajando para abordar los desafíos actuales, sino que también tenemos una visión clara del futuro que queremos abordar. Visualizamos un mundo donde nuestra innovación sea una base de estudio y enseñanza, donde esta radique en todas las áreas y niveles educativos.</p>
           </article>
      
    </article>
  )
}
//aidajr\src\img\estudioso.jpg

export default Vision
