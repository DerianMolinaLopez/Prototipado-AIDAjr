import React from 'react'
import imagen from '../img/estudioso.jpg'
const Mision = () => {
    return (
        <article className='grid grid-cols-2 pt-10 px-10'>
             <article className=''>
                <p className=' text-center text-white font-bold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat reprehenderit similique quisquam ipsum, perspiciatis, vitae culpa consectetur voluptas ipsam necessitatibus at quis repellendus voluptatum, consequatur nam labore explicabo ducimus.</p>
               </article>
            <article className='w-full flex justify-center'>
               <picture className=''>
                <img className='rounded-lg shadow-lg mb-7' src={imagen} alt="imagen de niño estudiando" />
               </picture>
            </article>
           
          
        </article>
      )
}

export default Mision
