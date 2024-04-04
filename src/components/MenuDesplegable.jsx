import React from 'react'

const MenuDesplegable = () => {
  return (
    <div className='relative'>
      <div className='absolute w-full'>
        <ul className='bg-gray-800 text-white rounded-lg font-bold space-y-5 text-xl mt-5'>
          <li className='p-2'>Inicio</li>
          <li className='p-2'>Nosotros</li>
          <li className='p-2'>Mision</li>
          <li className='p-2'>Vision</li>
          <li className='p-2'>Contacto</li>
        </ul>
      </div>
    </div>
  )
}

export default MenuDesplegable
