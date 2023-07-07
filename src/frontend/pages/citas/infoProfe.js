import React from 'react';

const Table = () => {
  return (
    <table className='inforProfe_Tabla'>
      <thead>
      </thead>
      <tbody >
        <tr >
          <td className='contenedorCuenta' rowSpan="2">
            <div className='cuentaProfe'>JL</div>
          </td>
          <td className='infoProfe'>Juan Lopez</td>
        </tr>
        <tr>
          <td className='carreraProfe'>Mg. Ingenieria de software</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
