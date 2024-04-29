import React from 'react'

const Planes = () => {
  return (
    <>
      <article className='bg-verde-bajo md:flex md:flex-col space-y-5 rounded-lg p-5 mb-5 '>
        <picture className='flex justify-center'> {/*por alguna razon entraba en conflicto el mx-auto en esta parte, colocaba la imagen como un flex-start */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-30 h-20">
             <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>
        </picture>
        <h4 className='text-center text-white font-bold text-2xl'>
            ¿Aprender herramientas de oficina?
        </h4>
        <p className='text-white'>
        Descubre con AIDA JR el Aprendizaje de Office puede transformar tu experiencia con Word, PowerPoint y Excel. Desde la creación de documentos profesionales y presentaciones impactantes hasta el manejo eficiente de datos y análisis en Excel, nuestra plataforma te proporciona las herramientas y conocimientos necesarios para tener éxito en el mundo digital de hoy.
        </p>
            <a href="" className='w-full font-black text-white flex justify-center'>Ver planes de pago {'    '}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </a>
      </article>
      <article className='bg-naranja flex flex-col rounded-lg p-5 space-y-5 mb-5'>
        <picture className='mx-auto'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-30 h-20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
        </picture>
        <h4 className='text-center text-white font-bold text-2xl'   >Planes Educativos para escuelas o tutores</h4>
        <p className='text-white'>
        Ofrecemos una variedad de planes educativos para satisfacer tus necesidades de aprendizaje. Desde estudiantes hasta profesionales, nuestros planes están diseñados para adaptarse a diferentes niveles de habilidad y objetivos. Para el desarrollo de manera temprana a este ámbito de herramientas y asi expandir tu conjunto de habilidades, tenemos un plan educativo para ti.
        </p>
        <a href="" className='w-full font-black text-white flex justify-center'>Ver planes de pago {'    '}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </a>
      </article>
      <article className='bg-azul-word flex flex-col rounded-lg p-5 space-y-5 mb-5'>
        <picture className='mx-auto'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-30 h-20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>

        </picture>
        <h4 className='text-center text-white font-bold text-2xl'   >Pruebas gratuitas </h4>
        <p className='text-white'>
        ¿Listo para mejorar tus habilidades en Office? ¡Únete a nuestra comunidad hoy mismo y obtén acceso a una prueba gratuita de AIDA JR Experimenta la potencia de la inteligencia artificial mientras exploras las numerosas funciones y lecciones diseñadas para hacerte un experto en Word, PowerPoint y Excel.
        </p>
        <a href="" className='w-full font-black text-white flex justify-center'>Ver planes de pago {'    '}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </a>
      </article>
    </>
  )
}

export default Planes
