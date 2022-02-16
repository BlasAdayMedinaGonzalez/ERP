import React, {useState} from 'react';
import logo from '../assets/user.jpg';
import EmployeePage from './EmployeePage';
import Navbar from './Navbar';

const initUser = {
  user: '',
  password: ''
};

const admin = {
  user: "admin",
  password: "admin"
};

const Login = ({data, onSubmitValues, employees, setEmployeeData, 
  employeeData, setRecargar,setEmployeeInfo,employeeInfo,employeeAddboolean,setemployeeAddboolean,
  employee, setEmployee}) => {

  const [form, setFormState] = useState(initUser);
  const [adminVerification, setuserVerification] = useState(true);
  const [login, setLogin] = useState(true);
  

  const setemployeeInfo = () => {
    const userInfo = employees.data.find(value => value.first_name === data.user)
    setEmployee(userInfo);
  }

  const handleChange = (e) => {
    setFormState({
      ...form,
      [e.target.name] : e.target.value
    });
  }

  const handleSubmit = (e) => {
    if (JSON.stringify(form) !== JSON.stringify(admin)) {
      setuserVerification(false);
    } else {
      setuserVerification(true);
    }
    setLogin(false);
    e.preventDefault();
    onSubmitValues(form);
  }
  if (login) {
    return (
      <div className="container h-100">
        <div className="row align-items-center h-75 ">
            <div className="col-6 mx-auto">
            <div className="card align-items-center border-0" >
              <img className= "mt-2 mb-2" src={logo} alt="logo" width="100" height="100" />
                <form onSubmit={handleSubmit}>
                    <div className="d-flex mb-3">
                        <i className="bi bi-person-fill fs-2 "></i>
                        <input 
                        className="form-control" 
                        name="user" //mismo nombre que initUser
                        id="exampleDropdownFormEmail2" 
                        placeholder="Usuario"
                        value = {form.user}
                        onChange = {handleChange} />
                        </div>
                        <div className="d-flex mb-3">
                        <i className="bi bi-shield-lock-fill fs-2"></i>
                        <input 
                        type="password" 
                        name="password" //mismo nombre que initUser
                        className="form-control" 
                        id="exampleDropdownFormPassword2" 
                        placeholder="Contraseña"
                        value = {form.password}
                        onChange = {handleChange} />
                        </div>
                        <div className="d-grid col-6 mx-auto">
                        <button type="submit" className="btn btn-warning mb-2">Login</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
  } else {
    if (adminVerification) {
      return <Navbar employeeAddboolean={employeeAddboolean} setemployeeAddboolean={setemployeeAddboolean} employeeInfo={employeeInfo} setEmployeeInfo= {setEmployeeInfo} data={data} employeeData={employeeData} setEmployeeData={setEmployeeData} employees={employees} setLogin={setLogin} setRecargar={setRecargar} />
    } else  {
      // setemployeeInfo();
      return ( 
      <EmployeePage data={data} employees={employees} employee={employee} setEmployee={setEmployee} setRecargar={setRecargar} setLogin={setLogin} />
      
      )
      
      
    }
    
  }
};

export default Login;
