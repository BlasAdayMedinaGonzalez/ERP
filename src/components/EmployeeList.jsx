import React from 'react';
import {eliminaremployee} from "../services/services";


const EmployeeList = ({employees, setRecargar}) => {

  const handleDelete = (employeeId) => {
    eliminaremployee(employeeId)
    setRecargar(true)
  }

  return (
    <table className="table table-striped mt-5">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre empleado</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>

          {employees.data.map((employee) => {
            return  ( 
              <tbody>
                <tr>
                  <th scope="row">{employee.employee_id}</th>
                    <td>{employee.first_name}</td>
                    <td>{employee.last_name}</td>
                    <td>
                      <button type="button" className="btn btn-info" onClick={() => console.log("pressed")}>Info</button>
                      <button type="button" className="btn btn-danger ms-2" onClick={() => handleDelete(employee.employee_id)}>Borrar</button>
                    </td>
                </tr>
              </tbody>
            )
          })}
                
          
    </table>
  );
};

export default EmployeeList;
