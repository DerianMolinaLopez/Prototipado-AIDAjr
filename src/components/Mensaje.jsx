import robot from '../img/robot.jpg'
/*
cuando el mensaje es del usuario este se acomoda del lado de la derecha

*/
const Mensaje = ({mensaje}) => {
  return (
    <div className='bg-gray-700 rounded-lg p-4'>
        <div className='flex justify-end'>
            <picture>
                <img className='rounded-full w-20' src={robot} alt="" />
            </picture>
        </div>
        <div className='flex justify-start w-max'>
            <div className='bg-oscuro-rebajado p-3 rounded-lg m-2 overflow-auto'>
  <p className='text-white break-words'>{mensaje}</p>
</div>
        </div>
    </div>
  )
}

export default Mensaje
