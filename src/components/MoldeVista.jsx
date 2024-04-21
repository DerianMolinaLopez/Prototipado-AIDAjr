import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import Mensaje from './Mensaje';
const MoldeVista = () => {
  const location = useLocation();
   const [mensaje,setMensaje]= useState('')
   const [mensajes,setMensajes]= useState([])//este es para guardar los mensajes en el mismo chat y qeu se vean todos los componentes
  useEffect(() => { //este efecto verifica los cambios en la variable location que es de react router dom
    //cuando navegas y cambais de pagina, el pathname se ejecuta cambiando una modificacion de propiedaes
    //el effect es en resumen eso, escucha cada cambio que tenga location.pathname
    const body = document.querySelector('body');
    body.classList.add('bg-oscuro');

    return () => {
      body.classList.remove('bg-oscuro');
    };
  }, [location.pathname]); // Hacer que el efecto se ejecute cuando cambie la ruta
  //seleccionamos el color correspondiente para word excel y power point
  const colores =[ 'border-blue-600','border-green-600','border-orange-600']
  //vamos a ahcer todo por medio del path
  const {pathname} =location 

  let colorLocal = ''
  if(pathname === '/AIDAjr-modelo/word'){
    colorLocal = colores[0]
  }
  if(pathname==='/AIDAjr-modelo/excel'){
    colorLocal = colores[1]
  }
  if(pathname==='/AIDAjr-modelo/power'){
    colorLocal = colores[2]
  
  }
  const hansleSubmit = (e)=>{
    e.preventDefault()
    //reinciiamos el contenido del input
    if(mensaje !== ''){
      setMensajes([...mensajes,mensaje])
      console.log(mensajes)
    }
    setMensaje('')
  }

  return (
    <div className='h-screen flex justify-center p-5'>
      <form onSubmit={e => hansleSubmit(e)} className={`w-2/3 border-4 ${colorLocal} bg-green rounded-lg grid grid-rows-12`}>
        <section className=' row-start-1 space-y-5 p-10 row-end-11 bg-oscuro-rebajado rounded-lg'> {/*en esta parte va a estar los mensajes */}
        {
        /*basicamente aqui estoy renderizando un arreglo
          pero en si, es informacion de un arreglo, que pasa por un componente
          el cual al ser retornado, se genera con todo y estilos
        */
        mensajes.length > 0 ? mensajes.map((mensaje,index)=>(<Mensaje key={index} mensaje={mensaje} />)) : <p className='text-white text-3xl font-bold text-center gradiente'>Hola de nuevo, espero poder ayudarte</p>}
        </section>
        <section className='row-start-11 row-end-13 flex justify-center items-center p-5'>  {/*esta es la parte del input */}
        
        <div className='w-full flex'>
          <div className={`border-b-4 w-full ${colorLocal} p-2 flex`}>
       <input onChange={e=> setMensaje(e.target.value)} value={mensaje} type="text" className='focus:border-none focus:outline-none px-5 rounded-lg bg-oscuro text-white text-3xl w-full' placeholder='Escribe alguna idea que tengas' />
          <button type='submit' className='rounded-full bg-oscuro-rebajado h-20 flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-20 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
         
          </div>
        </div>
        
        </section>
      </form>
    </div>
  );
}

export default MoldeVista;

