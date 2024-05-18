import React from 'react'

const PlanGenerales = () => {
    return (
            <div className="PlanInicio">
                <section className='section01'>
                    <article className='cartaPago'>
                        <p className='letraPrincipal nito'>Plan general</p>
                        <span className='descripcion'>El aprendizaje de herramientas de ofimatica a la palma de tu mano</span>
                        <hr />
                        <p className='letraPrincipal nito'>$149/mo</p>
                        <span className='descripcion'>Sin contratos. Puede cancelar en cualquier momento</span>
                        <ul className='elementosDesc'>
                            <li className='puntosDesc'>Acceso a todas las herramientas</li>
                            <li className='puntosDesc'>Cursos disponibles</li>
                            <li className='puntosDesc'>Certificados de aprendizaje</li>
                            <li className='puntosDesc'>Aprendizaje actualizado</li>
                        </ul>
                        <button className='boton nito'>INICIA AHORA</button>
                    </article>
                </section>
                <section className='section02'>
                    <article className="cartaDescriptiva">
                        <p className='letraPrincipal nito'>Plan de acceso mensual</p>
                        <hr />
                        <span className='descCompra'>
                            Bienvenido al Curso Mensual de AIDA JR!
                            ¿Estás listo para embarcarte en un viaje de aprendizaje transformador durante el próximo mes? Nuestro curso mensual
                            está diseñado para brindarte una inmersión profunda en herramientas de ofimatica como lo son Word, Powerpoint y Excel,
                            con un enfoque meticuloso en cada aspecto crucial para tu desarrollo.
                        </span>
                        <img className='imgRobots' src="src/img/robots.png" alt="" />
                        <p></p>
                        <span className='descProducto'>
                            No pierdas la oportunidad de aprovechar al máximo tus herramientas de Microsoft Office con la ayuda de AIDA JR.
                            ¡Inscríbete ahora y comienza tu viaje hacia la maestría en productividad hoy mismo!
                        </span>
                    </article>
                </section>
            </div>

    )
}

export default PlanGenerales