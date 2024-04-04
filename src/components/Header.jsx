import React from 'react'

const Header = () => {
  return (
    <header className='bg-azul-medio grid-wra grid grid-cols-6 
                       h-24 rounded-md fixed ancho'>
        <picture className='relative col-start-1'>
                    <img className='w-24 h-24 flex absolute left-20' 
                                src="/src/img/logooAIDA.png" alt="" />
        </picture>
        
            <nav  className='font-bold  text-white flex justify-around
                            col-start-2 col-end-7 items-center'>
                <a href="" className='hover:bg-azul-logo hover:text-amarillo-logo rounded-full
                                        p-3 cursor-pointer transition-color duration-150
                                        scale-110 transform hover:scale-125
                                        '>Nosotros</a>
                <a href="" className='hover:bg-azul-logo hover:text-amarillo-logo rounded-full
                                        p-3 cursor-pointer transition-color duration-150
                                        scale-110 transform hover:scale-125
                                        '>Mision</a>
                <a href="" className='hover:bg-azul-logo hover:text-amarillo-logo rounded-full
                                        p-3 cursor-pointer transition-color duration-150
                                        scale-110 transform hover:scale-125
                                        '>Vision</a>
                  <a href="" className='hover:bg-azul-logo hover:text-amarillo-logo rounded-full
                                        p-3 cursor-pointer transition-color duration-150
                                        scale-110 transform hover:scale-125
                                        '>AIDA para escuelas</a>
                <a href="" className='hover:bg-azul-logo hover:text-amarillo-logo rounded-full
                                        p-3 cursor-pointer transition-color duration-150
                                        scale-110 transform hover:scale-125
                                        '>¿Una pregunta?</a>
            </nav>
    </header>
  )
}
//aidajr\src\img\logooAIDA.png
export default Header
