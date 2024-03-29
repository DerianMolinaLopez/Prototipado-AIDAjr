import React from 'react'

const Header = () => {
  return (
    <header className='bg-azul-medio grid grid-cols-2 h-32 rounded-md'>
        <picture className='relative'>
                    <img className='w-32 h-32 flex absolute left-20' 
                                src="/src/img/logooAIDA.png" alt="" />
        </picture>
        
            <nav  className='font-bold text-4xl text-white flex justify-around items-center'>
                <a href="" className='hover:bg-azul-fuerte-medio rounded-full
                                        p-5 cursor-pointer transition-color duration-150
                                        scale-110 transform hover:scale-125
                                        '>Nosotros</a>
                <a href="" className='hover:bg-azul-fuerte-medio rounded-full
                                        p-5 cursor-pointer transition-color duration-150
                                        scale-110 transform hover:scale-125
                                        '>Mision</a>
                <a href="" className='hover:bg-azul-fuerte-medio rounded-full
                                        p-5 cursor-pointer transition-color duration-150
                                        scale-110 transform hover:scale-125
                                        '>Vision</a>
            </nav>
    </header>
  )
}
//aidajr\src\img\logooAIDA.png
export default Header
