import React from 'react';

const AlumnosData = [
    {
        nombre: 'Juan',
        apellido: 'Perez Medina',
        correo: 'Juan@gmail.com',
        porcentaje: 85
    },
    {
        nombre: 'Ana',
        apellido: 'Gomez Sanchez',
        correo: 'Ana@gmail.com',
        porcentaje: 92
    },
    {
        nombre: 'Luis',
        apellido: 'Lopez Ramirez',
        correo: 'Luis@gmail.com',
        porcentaje: 78
    },
    {
        nombre: 'María',
        apellido: 'Fernandez Torres',
        correo: 'Maria@gmail.com',
        porcentaje: 88
    },
    {
        nombre: 'Carlos',
        apellido: 'Hernandez Diaz',
        correo: 'Carlos@gmail.com',
        porcentaje: 81
    },
    {
        nombre: 'Sofia',
        apellido: 'Martinez Gomez',
        correo: 'Sofia@gmail.com',
        porcentaje: 95
    },
    {
        nombre: 'Miguel',
        apellido: 'Garcia Rodriguez',
        correo: 'Miguel@gmail.com',
        porcentaje: 74
    },
    {
        nombre: 'Lucia',
        apellido: 'Sanchez Morales',
        correo: 'Lucia@gmail.com',
        porcentaje: 89
    },
    {
        nombre: 'Jose',
        apellido: 'Diaz Martinez',
        correo: 'Jose@gmail.com',
        porcentaje: 82
    },
    {
        nombre: 'Elena',
        apellido: 'Ruiz Alvarez',
        correo: 'Elena@gmail.com',
        porcentaje: 91
    }
];

const CursoSeleccionadoInstructor = () => {
    return (
        <div className='bg-gray-200 py-2'>
            <h1 className='text-indigo-700 text-3xl font-semibold  text-center'>Lista de Alumnos</h1>
            <div className='p-10'>
                <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead className='bg-gray-700 text-white'>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Porcentaje</th>
                    </tr>
                </thead>
                <tbody>
                    {AlumnosData.map((alumno, index) => (
                        <tr
                            key={index}
                            className={`text-center ${index % 2 === 0 ? 'bg-gray-400' : ''}`}
                        >
                            <td>{alumno.nombre}</td>
                            <td>{alumno.apellido}</td>
                            <td>{alumno.correo}</td>
                            <td>{alumno.porcentaje}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            
        </div>
    );
}

export default CursoSeleccionadoInstructor;
