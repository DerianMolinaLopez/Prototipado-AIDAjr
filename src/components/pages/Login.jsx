import React from 'react'
import { useState,useEffect } from 'react'
import Error from '../Error';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'
async function loginUser(usuario, password) {
    try {
    
        const response = await axios.get(`http://localhost:3000/user/login/${usuario}/${password}`)

        return response.data
    } catch (error) {
        console.error("Error al intentar iniciar sesión:", error.message);
    }
}


const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');   
    const [error, setError] = useState(false); // Cambiar useEffect a useState
   // const router = useRouter()
   const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault();
        if([usuario,password].includes('')){    
            setMensaje('Todos los campos son obligatorios');
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return 
        }





       const usuariojson= await loginUser(usuario, password);
       const {status} = usuariojson

        if (status==='error') {
           
            setMensaje('Usuario no encontrado');
            setError(true);

            setTimeout(() => {
                setError(false);
            }, 3000);
        }else{
          //router.push('/AIDA-CURSOS')
    
            localStorage.setItem('usuario',JSON.stringify(usuariojson))
          navigate('/cursos/AIDA-CURSOS')
          
          
        }
      
    };

    return (
        <div className='imagen w-screen'>
            <div className="entrada centralizado">
                <link rel="stylesheet" href="/src/login.css" />
                <article className="login">
                    <article className="logo">
                        <img src="/src/img/logooAIDA.png" alt="" />
                    </article>
                    <h2>Login</h2>
                    <h3>Bienvenido a la experiencia AIDA JR</h3>
                    <form onSubmit={handleSubmit} className="frmLogin">
                        <article className="textbox">
                            <input type="text" placeholder="Nombre de usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />
                        </article>
                        <article className="textbox">
                            <input type="password" placeholder='Contraseña' value={password} onChange={e => setPassword(e.target.value)} />   
                        </article>
                        <button type='submit'>Login</button>
                        <a href="htttps://website.com" className='text-white'>
                            ¿Se te ha olvidado tus datos?
                        </a>
                    </form>
                    {error && <Error mensaje={mensaje}></Error>}
                </article>
            </div>
        </div>
    );
};

export default Login;
