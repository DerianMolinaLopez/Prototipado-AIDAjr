import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className='text-center font-bold bg-red-600 p-2 rounded-lg text-white uppercase'>
        {mensaje}
    </div>
  )
}

export default Error
