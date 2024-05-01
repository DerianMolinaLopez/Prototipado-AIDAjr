import React from 'react'
const Login = () => {
return(
    <div className='imagen w-screen'>
     <div class="entrada centralizado">
        <link rel="stylesheet" href="/src/login.css" />
        <article class="login">
            <article class="logo">
                <img src="/src/img/logooAIDA.png" alt="" />
            </article>
            <h2>Login</h2>
            <h3>Bienvenido a la experiencia AIDA JR</h3>
            <form class="frmLogin">
                  <article class="textbox">
                        <input type="email" placeholder="Nombre de usuario"/>
                        {/* <span class="material-symbols-outlined">
                            account_circle
                        </span> */}
                  </article>
                  <article class="textbox">
                    <input type="password" placeholder='Contraseña' />   
                       {/* <span class="material-symbols-outlined">
                            lock
                        </span> */}
                  </article>
                  <button type='submit'>Login</button>
                  <a href="htttps://website.com" className='text-white'>
                    ¿Se te ha olvidado tus datos?
                  </a>
            </form>
        </article>
    </div>
    </div>
   
    )
}
export default Login
