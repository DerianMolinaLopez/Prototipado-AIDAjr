import React from 'react'

const PlanPrueba=()=>{
    return(
        <div className="PlanInicio">
        <section className='section01'>
            <article className='cartaPago'>
                <p className='letraPrincipal nito'>Plan basico prueba</p>
                <span className='descripcion'>El aprendizaje de herramientas de ofimatica a la palma de tu mano</span>
                <hr />
                <p className='letraPrincipal nito'>$Gratis/mo</p>
                <span className='descripcion'>Sin contratos. Puede cancelar en cualquier momento</span>
                <ul className='elementosDesc'>
                    <li className='puntosDesc'>Acceso limitado herramientas (Word) </li>
                    <li className='puntosDesc'>Un cursos disponible</li>
                    <li className='puntosDesc'>Periodo corto de tiempo</li>
                    <li className='puntosDesc'>Aprendizaje actualizado</li>
                </ul>
                <button className='boton nito'>INICIA AHORA</button>
            </article>
        </section>
        <section className='section02'>
            <article className="cartaDescriptiva">
                <p className='letraPrincipal nito'>Plan de acceso mensual basico</p>
                <hr />
                <span className='descCompra'>
                    ¡Mejora tus Habilidades en Word con AIDA JR!
                    ¿Quieres dominar Microsoft Word y aumentar tu productividad sin costo alguno? ¡Este es el curso perfecto para ti! Únete a nuestro 
                    programa gratuito de capacitación en Word con AIDA JR y descubre cómo sacarle el máximo provecho a esta poderosa herramienta de 
                    procesamiento de textos.
                </span>
                <img className='imgRobotPrueba' src="src/img/Robot-word-presentacion.png" alt="" />
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

export default PlanPrueba