import React, {useState} from 'react';
import {eliminaremployee} from "../services/services";
import EmployeeUser from './Admin';


const EmployeeList = ({employees, setRecargar, setEmployeeData, employeeData, setEmployeeInfo, employeeInfo, employeeAddboolean, setemployeeAddboolean}) => {
  

  const handleDelete = (employeeId) => {
    eliminaremployee(employeeId)
    setRecargar(true)
  }

  const sendata =(employee) => {
    setEmployeeData(employee);
    console.log(employeeInfo);
  }

  const employeebooleanInfo = () => {
    setEmployeeInfo(false);
    console.log("boton info");
  }
  const employeebooleanAdd = () => {
    setEmployeeInfo(false);
    setemployeeAddboolean(true);
    console.log("botón add");
  }

  if (employeeInfo) {
    return (
      <div>
        <div className="row align-items-center">
          <button type="button "className= "col btn-lg bi-person-plus-fill btn-success" onClick={() => employeebooleanAdd()}> Añadir nuevo empleado</button>
        </div>
          <table className="table bg-info">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Id empleado</th>
                    <th scope="col">Nombre empleado</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Acciones</th>
                  </tr>
                  
                </thead>
                
                
                {employees.data.map((employee) => {
                  return  ( 
                    <tbody key={employee.employee_id}>
                      <tr>
                        <th scope="row">{employee.employee_id}</th>
                          <td className="fw-bold">{employee.first_name}</td>
                          <td className="fw-bold">{employee.last_name}</td>
                          <td>
                            <button type="button" className="btn btn-warning" onClick={() => (employeebooleanInfo() & sendata(employee))}>Datos</button>
                            <button type="button" className="btn btn-danger ms-2" onClick={() => handleDelete(employee.employee_id)}>Borrar</button>
                          </td>
                      </tr>
                    </tbody>
                  )
                })}
          </table>
      </div>
    );
  } else {
    return <EmployeeUser employeeAddboolean={employeeAddboolean} setemployeeAddboolean={setemployeeAddboolean} employeeInfo= {employeeInfo} setEmployeeInfo= {setEmployeeInfo} setRecargar={setRecargar} employeeData = {employeeData} />
   
  }

  
};

export default EmployeeList;
