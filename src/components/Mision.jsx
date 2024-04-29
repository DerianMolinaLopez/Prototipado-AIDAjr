import React from 'react'
import imagen from '../img/estudioso.jpg'
const Mision = () => {
    return (
        <article className='grid grid-cols-2 pt-10 px-10'>
             <article className=''>
                <p className=' text-center text-white font-bold text-lg'>Con AIDA JR, creemos en el poder de la innovación para transformar la educación. Nos esforzamos por ser pioneros en este campo de aprendizaje, buscando constantemente nuevas formas de mejorar las habilidades y conocimiento de niños y jóvenes. Nuestra visión es crear un futuro más brillante y capaz para todos.</p>
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
