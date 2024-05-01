import robot from '../img/robot.jpg'
/*
cuando el mensaje es del usuario este se acomoda del lado de la derecha

*/
const Mensaje = ({mensaje}) => {
  return (
    <section className='bg-gray-700 rounded-lg p-4 ancho-maximo space-y-3'>
        <div className='flex justify-end'>
            <picture>
                <img className='rounded-full w-20' src={robot} alt="" />
            </picture>
        </div>
        <div className='flex justify-start w-'>
            <article className='bg-oscuro-rebajado p-3 rounded-lg m-2 overflow-auto'>
              <p className='text-white break-words text-lg'>{mensaje}</p>
            </article>
        </div>
    </section>
  )
}

export default Mensaje
