import React from 'react';

const EmployeeList = () => {
  return (
    <table className="table table-striped mt-5">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
                
          <tbody>
            <tr>
              <th scope="row">employee1</th>
                <td>employee1</td>
                <td>employee1</td>
                <td>
                  <button type="button" className="btn btn-info" onClick={() => console.log("pressed")}>Info</button>
                  <button type="button" className="btn btn-danger ms-2" onClick={() => console.log("pressed")}>Borrar</button>
                </td>
            </tr>
          </tbody>
    </table>
  );
};

export default EmployeeList;
