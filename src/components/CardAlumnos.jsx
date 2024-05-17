import React from 'react'
function generarGrupo(){
    return Date.now().toString(36)
}
const CardAlumnos = ({curso,handleDireccionar,setCursoSeleccionado,cursoSeleccionado}) => {

 
  return (
    <section 
             onClick={(e)=>
                {
                  setCursoSeleccionado(curso._id)
                   handleDireccionar(e)      
                }}
              className='flex justify-center mt-5'>
        <article className='bg-white h-auto w-1/2 rounded-lg shadow-lg py-10  hover:scale-125 transition-all cursor-pointer'>
            <h3 className='text-center mb-3 bg-indigo-700 text-white rounded shadow-lg-lg'>{curso.descripcion}</h3>
            <div className='flex gap-10'>
                <h4 className='font-semibold'>Grupo: <span className='font-bold text-indigo-700'>{generarGrupo()}</span></h4>
                <p>Numero de Alumnos: 20</p>
                <p>Tema del curos:<span className='font-bold text-indigo-700'>word</span></p>
               
            </div>
        </article>
    </section>
  )
}

export default CardAlumnos