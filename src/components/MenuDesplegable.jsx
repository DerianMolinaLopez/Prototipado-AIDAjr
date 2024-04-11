import React from 'react'

const MenuDesplegable = () => {
  return (
    <div className='relative'>
      <nav className='absolute w-full'>
        <ul className='bg-gray-800 text-white rounded-lg font-bold space-y-5 text-xl'>
          <li className='p-2'>Inicio</li>
          <li className='p-2'>Nosotros</li>
          <li className='p-2'>Mision</li>
          <li className='p-2'>Vision</li>
          <li className='p-2'>Contacto</li>
        </ul>
      </nav>
    </div>
  )
}

export default MenuDesplegable
