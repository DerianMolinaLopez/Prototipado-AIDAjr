import React from 'react'
import perfil from '../img/perfil.jpg'
import aidajr from '../img/logooAIDA.png'
import {Link, useLocation} from 'react-router-dom'
const HeaderCurso = () => {
    const location = useLocation()
    console.log(location.pathname)
  return (
    <header className='bg-blue-900 w-screen flex flex-row justify-around gap-52'>
      <div className='flex items-center gap-10'>
        <picture className=''>{/*imagen de logo*/}
            <img className='h-16' src={aidajr} alt="Aidajr" />
        </picture>
        <section> {/*barra de navegacion */}
        <nav className='space-x-5 text-white text-semibold text-lg'>
            <Link to='/AIDA-CURSOS' className={`
                 ${location.pathname === '/AIDA-CURSOS' ? 'border-b-4 border-white' : ''}
            `}>Inicio</Link>
            <Link to='/AIDA-CURSOS/mis-cursos' className={`
                 ${location.pathname === '/AIDA-CURSOS/mis-cursos' ? 'border-b-4 border-white' : ''}
            `}>Mis cursos</Link>
        </nav>
        </section>
      </div>
      <div className='flex items-center gap-8'>
         <div>
            <a href="">
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                 </svg>
            </a>
           
         </div>
         <a href="">
             <img className='h-12 rounded-full' src={perfil} alt="" />
         </a>
        
      </div>
    </header>
  )
}

export default HeaderCurso
