import React from 'react';
import EmployeeList from './EmployeeList';

const Navbar = ({setLogin, data, employees, setEmployeeData, employeeData, setRecargar, employeeInfo, setEmployeeInfo, employeeAddboolean, setemployeeAddboolean}) => {
  return( 
    <>
      <nav className="navbar navbar-dark bg-dark">
          <div className="d-flex">
              <a className= "navbar-brand text-white-50 ms-2">Usuario : </a>
              <a className= "navbar-brand">{data.user}</a>
          </div>
          <div className="d-flex">
            <button type="button" onClick={() => setLogin(true)} className="btn btn-warning me-4">Logout</button>
          </div>
      </nav>
      <EmployeeList employeeAddboolean={employeeAddboolean} setemployeeAddboolean={setemployeeAddboolean} employeeInfo={employeeInfo} setEmployeeInfo={setEmployeeInfo}  employees={employees} employeeData={employeeData} setEmployeeData={setEmployeeData} setRecargar={setRecargar} />
    </>
  )
};

export default Navbar;
