import React from 'react'
import imagen from '../img/estudioso.jpg'
import estadisticas from '../img/estadisticas.webp'
const Mision = () => {
    return (
        <article className='grid grid-cols-2 pt-10 px-10 place-items-center'>
             <article className=' w-1/2'>
                <p className=' text-center text-white font-bold letra'>Con AIDA JR, creemos en el poder de la innovación para transformar la educación. Nos esforzamos por ser pioneros en este campo de aprendizaje, buscando constantemente nuevas formas de mejorar las habilidades y conocimiento de niños y jóvenes. Nuestra visión es crear un futuro más brillante y capaz para todos.</p>
               </article>
            <article className='w-full flex justify-center'>
               <picture className=''>
                <img className='rounded-lg shadow-lg mb-7 anchura' src={estadisticas} alt="imagen de niño estudiando" />
               </picture>
            </article>
           
          
        </article>
      )
}

export default Mision
