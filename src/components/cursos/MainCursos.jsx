import React from 'react'
import { useState, useEffect } from 'react'
import CardCurso from './CardCurso'
import axios from 'axios'
import ExploracionCursos from './ExploracionCursos'
const MainCursos = () => {
  const [cursosUsuario, setCursosUsuario] = useState([{}])
  const [cursos, setCursos] = useState([])
  const [power,setPower] = useState([{}]) 
  const [excel,setExcel] = useState([{}])
  const [mensaje, setMensaje] = useState('')
  useEffect(() => {
    const obtenerCursos = async () => {
      const response = await axios.get('http://localhost:3000/cursos')
      setCursos(response.data)
    }

    const obtenerCursosUsuario = async () => {
      const usuario = JSON.parse(localStorage.getItem('usuario'))
      const { _id } = usuario.user
      const cursosUsuario = await axios.get(`http://localhost:3000/user/cursos/${_id}`)
      setCursosUsuario(cursosUsuario.data.cursos)
    }
    const obtenerExcel = async () => {
      const response = await axios.get('http://localhost:3000/cursos/tipos/excel')
      
      setExcel(response.data)
    }
    const obtenerPower = async()=>{
      const response = await axios.get('http://localhost:3000/cursos/tipos/power')
      setPower(response.data)
    }
    obtenerCursosUsuario()
    obtenerCursos()
    obtenerExcel()
    obtenerPower()
  }, [])

  useEffect(() => {
    if (cursosUsuario.length > 0 && cursos.length > 0) {
      // Filtrar los cursos que el usuario ya está inscrito
      const cursosDisponibles = cursos.filter(curso => !cursosUsuario.some(cursoUsuario => curso._id === cursoUsuario._id))
      setCursos(cursosDisponibles)
    }
  }, [cursosUsuario])


  const agregarCurso = (curso) => {
    //vamos a recibir un objeot que contiene enombre, el id, nombre, descripcion, para la
    //para la peticion http solo mandaremos el id como parametro en la peticion
    /*
    /*
    key={curso._id}
                        tiutlo={curso.nombre}
                        descripcion={curso.descripcion}
                        imagen={curso.imagen}
                        agregarCurso = {agregarCurso}
  */


  }
  return (
    <>
      <section className='fondo-cursos h-4/5 relative flex justify-center'>
        <div className='absoulute'>
          <section className=' bg-verde-medio px-10 py-5 mt-10  max-h-24 rounded-lg header-banner-cruso'>
            <div className='bg-white shadow-lg p-4 rounded-lg'>
              <article className='m-5 space-y-2'>
                <h2 className='text-3xl font-semibold'>Bienvenido ¿Estas listo para aprender?</h2>
                <p className='text-2xl'>¡Mejora tus habilidades de oficna!</p>
              </article>
            </div>
          </section>
        </div>
       
      </section>
      
      <div className='absolute seccion-excel h-auto '>
        
        {cursosUsuario.length>0? <h2 className='text-white text-4xl text-start mt-10 font-bold ml-56 mb-10'>Ultimos cursos que has visto</h2>: ''}
   
       <div className='flex justify-center'>
        <section  className='fondo-azul-seccion seccion-cursos-vistos rounded-lg fondo-cursos'>
                
                <section className={`${cursosUsuario.length>0? "grid place-items-center  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 p-10 rounded-lg mt-2":
                  ''
                } `}>
                    {cursosUsuario.length > 0 ? <>
            
                
              
                    {cursosUsuario.map(curso=>{
                    
                  return <CardCurso 
                                  tipo={'misCursos'}  
                                   key={curso._id}
                                    titulo={curso.nombre}
                                    descripcion={curso.descripcion}
                                    imagen={curso.imagen}
                                    agregarCurso={agregarCurso}
                                    instructor={curso.instructor}
                                    />
                
                })}
                
              
                </>: 
                <div className='flex justify-center flex-col    p-10'>
                <h3 className='text-3xl text-start  mt-10 font-bold text-white'>No estas inscrito a ningun curso, explora mas opciones</h3>
                <h3 className='text-3xl  mt-10 font-bold text-white'>Escoge algunos y regresa mas tarde</h3>
                </div>
                  
                  }
                </section>

            
        
                </section>
       </div>
        
      </div>
      {/*seccion para el apartado de excel */}
      <div className=''>
        <h3 className='auxiliar text-3xl font-bold text-center bg-verde-fuerte text-white p-10'>Automatiza tus tareas y registros con lo mejor en hojas de calculo</h3>
      
          <div className='absolute'>
 <section className='grid grid-cols-4 py-10 px-5 gap-5  relative bg-verde-excel place-items-center mx-20  top-10 rounded-lg'>
      
        {excel.map(curso=>
        {
          
          return <CardCurso 
                              tipo={'exploracion'} 
                              id={curso._id}
                              key={curso._id}
                              titulo={curso.nombre}
                              descripcion={curso.descripcion}
                              imagen={curso.imagen}
                              agregarCurso={agregarCurso}
                              instructor={curso.instructor}
                              />
        }
        )}
          </section>
          </div>
           
          <div className='bg-verde-mongo contenedor-excel mt-48'>

          </div>
     
        
      
     
      </div>
      <div className=''>
  <h3 className='auxiliar text-3xl font-bold text-center bg-naranja  text-white p-10'>Agrega aspecto visual a tus presentaciones</h3>
   
  <div className='absolute'>
    <section className='grid grid-cols-4 py-10 px-5 gap-5  relative bg-naranja-amarillado place-items-center mx-20  top-10 rounded-lg'>
      {power.map(curso=><CardCurso 
                          tipo={'exploracion'} 
                          id={curso._id}
                          key={curso._id}
                          titulo={curso.nombre}
                          descripcion={curso.descripcion}
                          imagen={curso.imagen}
                          agregarCurso={agregarCurso}
                          instructor={curso.instructor}
                          />)}
    </section>
  </div>
       
  <div className='bg-naranja h-96 mt-48'>
  </div>
</div>
      
     

    </>
  )
}

export default MainCursos
/*

return (
    <div className='max-w-7xl mx-auto pt-10  '>
      <section className='bg-gray-300 px-40 py-20'>
        <div className='bg-white shadow-lg p-4'>
            <article className='m-5 space-y-2'>
                    <h2 className='text-3xl font-semibold'>Bienvenido ¿Estas listo para aprender?</h2>
                    <p className='text-2xl'>¡Mejora tus habilidades de oficna!</p>
             </article>
        </div>
      </section>
      <section  className='fondo-azul-seccion rounded-lg fondo-cursos'>
        {cursosUsuario.length>0? <h2 className='text-white text-4xl text-center mt-10 font-bold'>Ultimos cursos que has visto</h2>: ''}
   
        <section className={`${cursosUsuario.length>0? "grid place-items-center  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 p-10 rounded-lg mt-10":
          ''
        } `}>
            {cursosUsuario.length > 0 ? <>
     
        
       
             {cursosUsuario.map(curso=>{
          return <CardCurso 
                           tipo={'misCursos'}  
                           key={curso._id}
                            titulo={curso.nombre}
                            descripcion={curso.descripcion}
                            imagen={curso.imagen}
                            agregarCurso={agregarCurso}
                            instructor={curso.instructor}
                            />
        
        })}
         
       
        </>: <h3 className='text-3xl text-center mt-10'>No estas inscrito a ningun curso, explora mas opciones</h3>}
        </section>

      </section>
      <div className='relative bg-verde-mongo w-screen '>
        <div className='relative'>
          
        </div>

      </div>
      <section className='text-black mt-20 rounded-lg '>
              <h2 className='ml-10 pt-5 font-bold text-4xl text-center '>Cursos que te pueden interesar</h2>
    
            <ExploracionCursos 
                         cursos={cursos}
                         mensaje={mensaje}
                         agregarCurso={agregarCurso}/>
     
  
      
      </section>

    </div>
  )
*/