import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect,useState } from 'react'
import axios from 'axios'
import imagen from '../../img/fondo1.jpg'
import CardCurso from './CardCurso'
const DetalleCursos = () => {
    const [detalleCurso, setDetalleCurso] = useState({})    
    const [instructor, setInstructor] = useState({})
    const [Cursoid, setCursoid] = useState('')
    const [idUsuario,setIdUsuario] = useState('')
    const [cursos,setCursos] = useState([])

    useEffect(()=>{
        const obtenerInformacionCurso = async () =>{  
            const curso = JSON.parse(localStorage.getItem('curso'))
            const response = await axios.get(`http://localhost:3000/cursos/curso/${curso.id}`)
            console.log('datos de la peticion')
            console.log(response.data)
            setCursoid(curso.id)
            setDetalleCurso(response.data)

            const obtenerInstructor = async () =>{
            
                const respon = await axios.get(`http://localhost:3000/instructor/detalle/${response.data.instructor}`)
                setInstructor(respon.data)    
            }
            setIdUsuario(JSON.parse(localStorage.getItem('usuario')).user._id)
            //console.log(idUsuario)
            obtenerInstructor()
        }
        const obtenerTodosCursos = async () =>{
            const response = await axios.get('http://localhost:3000/cursos')
            
            setCursos(response.data)
        
        }

        obtenerTodosCursos()
        obtenerInformacionCurso()
    },[])
    const handleAgregarCurso = async e=>{
        e.preventDefault()
        const response =await axios.post('http://localhost:3000/cursos/curso/usuario',{
            usuarioID:idUsuario,
            CursoId:Cursoid
        })
        console.log(response.data)
        if(response.data==='OK'){
            toast.success('Curso agregado correctamente')
        }

    }

    return (
        <>
        <div className='flex px-56 bg-gray-300 p-4 gap-4 h-auto'>
            <section className='w-3/4'>
                <div className='bg-green-900 shadow-lg anchura-banner-curso p-4 mt-10 text-white rounded-lg'>
                    <article className='m-5 space-y-5 '>
                        <h2 className='text-4xl font-semibold'>{detalleCurso.nombre}</h2>
                        <h3 className='uppercase text-2xl'>
                            Instructor: {' '}
                            <span className='font-lg'>
                                {instructor.nombre}
                            </span>
                        </h3>
                        <p className='text-2xl'>{detalleCurso.descripcion}</p>
                    </article>
                    
                </div>
                <article className='mt-10  rounded-lg  text-black'>
                        <h3 className='text-center font-semibold text-3xl text-black '>
                            Estos cursos se complementan bastante bien con este
                        </h3>
                        <article className='grid grid-cols-3 gap-5 mt-10'>
    {cursos.slice(0, 3).map(curso => (
        <CardCurso   
        tipoVista={'detalle'}
            key={curso._id} 
            titulo={curso.nombre} 
            descripcion={curso.descripcion} 
            imagen={curso.imagen} 
            id={curso._id}
        />
    ))}
</article>
                            </article>
            </section>
            <section className='w-1/4 flex flex-col items-center  bg-white border-2 border-gray-400 rounded-lg'>
                <img src={imagen} alt="imagen-prueba" />
                <article className='px-2'>
                    <p>
                    Hola soy {instructor.nombre} y soy el instructor de este acompañame a
                    aprender y a afinar tus habilidades y mejorar tu perfil profesional
                </p>
                <button 
                    onClick={e=>handleAgregarCurso(e)}
                     className='bg-blue-900 w-full text-center text-white p-2 mt-5 rounded-md'>
                    Agregar Curso
                </button>
                </article>
                
                
            </section>
            <ToastContainer autoClose={2000}
            toastClassName={"custom-toast "}/>
           
        </div>
           
        </>
        
    )
}

export default DetalleCursos