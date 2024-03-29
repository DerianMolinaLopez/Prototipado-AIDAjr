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
            <p className='text-white font-bold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat reprehenderit similique quisquam ipsum, perspiciatis, vitae culpa consectetur voluptas ipsam necessitatibus at quis repellendus voluptatum, consequatur nam labore explicabo ducimus.</p>
           </article>
      
    </article>
  )
}
//aidajr\src\img\estudioso.jpg

export default Nosotros
