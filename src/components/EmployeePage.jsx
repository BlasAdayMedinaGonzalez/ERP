import React, {useState} from 'react'
import {editaremployee} from '../services/services'


const EmployeePage = ({employees, setRecargar, setLogin, data}) => {
  
  const employee = employees.data.find(value => value.first_name === data.user);

  const [timeEntrada, setTimeEntrada] = useState("Sin fichar");
  const [timeSalida, setTimeSalida] = useState("Sin fichar");

  const[escribirNombre, setEscribirNombre] = useState(employee.first_name);
  const[escribirApellidos, setEscribirApellidos] = useState(employee.last_name);
  const[escribirHoraEntrada, setEscribirHoraEntrada] = useState(employee.hora_entrada);
  const[escribirSalida, setescribirSalida] = useState(employee.hora_salida);
  const[escribirDepartamento, setEscribirDepartamento] = useState(employee.departamento);
  const[escribirFormacion, setEscribirFormacion] = useState(employee.formacion);
  const[escribirContacto, setEscribirContacto] = useState(employee.contacto);
  const[escribirSalario, setEscribirSalario] = useState(employee.salario);

  console.log(employee);
  const padTo2Digits = (num) => {
    return String(num).padStart(2, '0');
  }

  const settimeEntrada = () => {
    let date = new Date();
    setTimeEntrada(date.getHours() + ":" + padTo2Digits(date.getMinutes()));
  }
  const settimeSalida = () => {
    let date = new Date();
    setTimeSalida(date.getHours() + ":" + padTo2Digits(date.getMinutes()));
  }

  const handleChange = (e) => {
    if (e.target.name === "first_name") {
      setEscribirNombre(e.target.value);
    } else  if (e.target.name === "last_name") {
      setEscribirApellidos(e.target.value);
    } else if (e.target.name === "hora_entrada") {
      setEscribirHoraEntrada(e.target.value);
    } else if (e.target.name === "hora_salida") {
      setescribirSalida(e.target.value);
    } else if (e.target.name === "departamento") {
      setEscribirDepartamento(e.target.value);
    } else if (e.target.name === "formacion") {
      setEscribirFormacion(e.target.value);
    } else if (e.target.name === "contacto") {
      setEscribirContacto(e.target.value);
    } else if (e.target.name === "salario") {
      setEscribirSalario(e.target.value);
    }
  }
  const handleSubmitAdd = (e) => {
    e.preventDefault();
      
    const employeeEdit = {
      first_name: escribirNombre,
      last_name: escribirApellidos,
      hora_entrada: escribirHoraEntrada,
      hora_salida: escribirSalida,
      departamento: escribirDepartamento,
      formacion: escribirFormacion,
      contacto: escribirContacto,
      salario: escribirSalario
    };
    
    editaremployee(employeeEdit, employee.employee_id);

    alert("Se ha actualizado los datos correctamente")
    
    setRecargar(true);
  };

  
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
          <div className="d-flex">
              <a className= "navbar-brand text-white-50 ms-2">Usuario : </a>
              <a className= "navbar-brand">{employee.first_name}</a>
          </div>
        <button className="btn btn-danger me-4" onClick={() =>  setLogin(true)}>Logout</button>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
           <div className= "card">
            <div className="card-title fs-1 ms-2">Fichar:</div>
              <div className="fs-2 text-center">
                Hora Entrada: 
              </div>
              <div className="fs-3 text-center">
                {timeEntrada}
              </div>
              <button className="btn btn-info mb-2" onClick={() => settimeEntrada()}>
                Fichar Entrada
              </button>
              <div className="fs-2 text-center">
                Hora Salida:
              </div>
              <div className="fs-3 text-center">
                {timeSalida}
              </div>
              <button className="btn btn-info mb-2" onClick={() => settimeSalida()}>
                Fichar Salida
              </button>
           </div>
          </div>
          <div className="col-6">
            <h1>Ficha del empleado: {employee.first_name}</h1>
            <form className="ms-2" onSubmit={handleSubmitAdd} >
              <div className="sm-3">
                <label className="form-label">
                  Nombre
                </label>
                <input
                  // name="first_name"
                  type="text"
                  className="form-control"
                  id="first_name"
                  value= {escribirNombre}
                  placeholder={employee.first_name}
                  onChange={handleChange}
                />
              </div>
              <div className="sm-3">
                <label className="form-label">
                  Apellidos
                </label>
                <input
                  name="last_name"
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={escribirApellidos}
                  placeholder={employee.last_name}
                  onChange={handleChange}
                />
              </div>
              <div className="sm-3">
                <label className="form-label">
                  Horario de entrada
                </label>
                <input
                  name="hora_entrada"
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={escribirHoraEntrada}
                  placeholder={employee.hora_entrada}
                  onChange={handleChange}
                />
              </div>
              <div className="sm-3">
                <label className="form-label">
                  Horario de salida
                </label>
                <input
                  name="hora_salida"
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={escribirSalida}
                  placeholder={employee.hora_salida}
                  onChange={handleChange}
                />
              </div>
              <div className="sm-3">
                <label className="form-label">
                  Departamento
                </label>
                <input
                  name="departamento"
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={escribirDepartamento}
                  placeholder={employee.departamento}
                  onChange={handleChange}
                />
              </div>
              <div className="sm-3">
                <label className="form-label">
                  Formación
                </label>
                <input
                  name="formacion"
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={escribirFormacion}
                  placeholder={employee.formacion}
                  onChange={handleChange}
                />
              </div>
              <div className="sm-3">
                <label className="form-label">
                  Contacto
                </label>
                <input
                  name="contacto"
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={escribirContacto}
                  placeholder={employee.contacto}
                  onChange={handleChange}
                />
              </div>
              <div className="sm-3">
                <label className="form-label">
                  Salario
                </label>
                <input
                  name="salario"
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={escribirSalario}
                  placeholder={employee.salario}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Actualizar
              </button>
            </form>
            
          </div>
        </div>
      </div>
      
    </>
  )
}

export default EmployeePage