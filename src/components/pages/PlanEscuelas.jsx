import React from 'react'

const PlanEscuelas=()=>{
    return(
        <div className="PlanInicio">
                <section className='section01'>
                    <article className='cartaPago'>
                        <p className='letraPrincipal nito'>Plan para escuelas</p>
                        <span className='descripcion'>El aprendizaje de herramientas de ofimatica a la palma de tu mano</span>
                        <hr />
                        <p className='letraPrincipal nito'>$Oferta educativa/6mo</p>
                        <span className='descripcion'>Por convenios. contactos en cualquier momento</span>
                        <ul className='elementosDesc'>
                            <li className='puntosDesc'>Acceso a todas las herramientas</li>
                            <li className='puntosDesc'>Cursos disponibles de mayor aprendizaje</li>
                            <li className='puntosDesc'>Certificados de aprendizaje</li>
                            <li className='puntosDesc'>Aprendizaje actualizado</li>
                        </ul>
                        <button className='boton nito'>INICIA AHORA</button>
                    </article>
                </section>
                <section className='section02'>
                    <article className="cartaDescriptiva">
                        <p className='letraPrincipal nito'>Plan de acceso escolar</p>
                        <hr />
                        <span className='descCompra'>
                        ¡Transforma la Educación con AIDA JR para Escuelas!
                        ¿Estás buscando una solución integral que impulse el aprendizaje y la productividad en tu escuela? ¡AIDA JR para 
                        Escuelas es la respuesta! Nuestro programa ofrece acceso completo a la versión de pago de AIDA JR, proporcionando
                        a estudiantes y profesores una suite de herramientas poderosas para mejorar el rendimiento académico y simplificar 
                        las tareas administrativas.
                        </span>
                        <img className='imgRobots' src="src/img/robots.png" alt="" />
                        <p></p>
                        <span className='descProductos'>
                        ¡Únete a la revolución educativa con AIDA JR para Escuelas y lleva el aprendizaje y la productividad al siguiente
                        nivel!
                        </span>
                    </article>
                </section>
            </div>
    )
}

export default PlanEscuelas