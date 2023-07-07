import React from 'react';

const Table = () => {
  return (
    <table className='inforAlumno_Tabla'>
      <thead>
      </thead>
      <tbody >
        <tr >
          <td className='contenedorCuenta' rowSpan="2">
            <div className='cuentaAlumno'>JL</div>
          </td>
          <td className='infoAlumno'>Juan Lopez</td>
        </tr>
        <tr>
          <td className='carreraAlumno'>Estudiante de Ingenieria de Sistemas</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;