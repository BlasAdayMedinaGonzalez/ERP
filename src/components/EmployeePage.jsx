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
  const[escribirComentario, setEscribirComentario] = useState(employee.comentario);
  const[escribirTarea, setEscribirTarea] = useState(employee.tarea);
  const[escribirRendimiento, setEscribirRendimiento] = useState(employee.rendimiento);
  const[escribirComentarioEmployee, setEscribirComentarioEmployee] = useState(employee.comentarioEmployee);

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
    } else if (e.target.name === "comentario") {
      setEscribirComentario(e.target.value); 
    } else if (e.target.name === "tarea") {
      setEscribirTarea(e.target.value);
    } else if (e.target.name === "rendimiento") {
      setEscribirRendimiento(e.target.value);
    } else if (e.target.name === "comentarioEmployee") {
      setEscribirComentarioEmployee(e.target.value);
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
      salario: escribirSalario,
      entrada: timeEntrada,
      tarea: escribirTarea,
      salida: timeSalida,
      comentarioEmployee: escribirComentarioEmployee,
      comentario: escribirComentario,
      rendimiento: escribirRendimiento
    };
    console.log("*******************");
    console.log(employeeEdit);
    
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
        <button className="btn btn-danger me-4 bi bi-box-arrow-left fw-bold" onClick={() =>  setLogin(true)}> Logout</button>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 mt-2">
           <div className= "card bg-info">
            <div className="card-title fs-1 ms-2"><h1>Fichar:</h1></div>
            
              <div className="fs-2 text-center">
                Hora Entrada: 
              </div>
              <div className="fs-3 text-center">
                {timeEntrada}
              </div>
              <button className="btn btn-success mb-2 fw-bold" onClick={() => settimeEntrada()}>
                Fichar Entrada
              </button>
              <div className="fs-2 text-center">
                Hora Salida:
              </div>
              <div className="fs-3 text-center">
                {timeSalida}
              </div>
              <button className="btn btn-success mb-2 fw-bold" onClick={() => settimeSalida()}>
                Fichar Salida
              </button>
           </div>
          
           <div className= "card bg-info mt-4">
                <form className="ms-2" onSubmit={handleSubmitAdd}>
                <h1 className= "text-center">Seguimiento del día:</h1>
              <div className="sm-3 mt-2">
                <label className="form-label fw-bold">
                Hora Entrada
                </label>
                <input
                  name="entrada"
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={timeEntrada}
                  placeholder={timeEntrada}
                  onChange={handleChange}
                />
              </div>
              <div className="sm-3 mt-2">
                <label className="form-label fw-bold">
                Tareas Realizadas
                </label>
                <input
                  name="tarea"
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={escribirTarea}
                  placeholder={escribirTarea}
                  onChange={handleChange}
                />
              </div>
              <div className="sm-3">
                <label className="form-label fw-bold">
                  Hora Salida
                </label>
                <input
                  name="salida"
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={timeSalida}
                  placeholder={timeSalida}
                  onChange={handleChange}
                />
              </div>
              <div className="sm-3">
                <label className="form-label fw-bold">
                  Comentario recibido del admin
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={escribirComentarioEmployee}
                  placeholder={employee.comentarioEmployee}
                  onChange={handleChange}
                />
              </div>
              <div className="sm-3">
                <label className="form-label fw-bold">
                  Comentario a Admin
                </label>
                <input
                  name="comentario"
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={escribirComentario}
                  placeholder={employee.comentario}
                  onChange={handleChange}
                />
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary mt-2 mb-2 bi bi-send-fill fw-bold">
                  Enviar a Admin
                </button>
              </div>
              <div className="sm-3 mb-2 text-center">
                <label className="form-label fw-bold">
                   <h1>Tu Rendimiento:</h1>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={escribirRendimiento}
                  placeholder={employee.rendimiento}
                  onChange={handleChange}
                />
              </div>
              </form>
              </div>
          </div>
          
          <div className="col-6 mt-2 bg-warning">
            <h1>Ficha del empleado: {employee.first_name}</h1>
            <form className="ms-2" onSubmit={handleSubmitAdd} >
              <div className="sm-3">
                <label className="form-label fw-bold">
                  Nombre
                </label>
                <input
                  // name="first_name"
                  type="text"
                  className="form-control "
                  id="first_name"
                  value= {escribirNombre}
                  placeholder={employee.first_name}
                  onChange={handleChange}
                />
              </div>
              <div className="sm-3">
                <label className="form-label fw-bold">
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
                <label className="form-label fw-bold">
                  Horario de entrada
                </label>
                <input
                  
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={escribirHoraEntrada}
                  placeholder={employee.hora_entrada}
                  onChange={handleChange}
                />
              </div>
              <div className="sm-3">
                <label className="form-label fw-bold">
                  Horario de salida
                </label>
                <input
                  
                  type="text"
                  className="form-control "
                  id="last_name"
                  value={escribirSalida}
                  placeholder={employee.hora_salida}
                  onChange={handleChange}
                />
              </div>
              <div className="sm-3">
                <label className="form-label fw-bold">
                  Departamento
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={escribirDepartamento}
                  placeholder={employee.departamento}
                  onChange={handleChange}
                />
              </div>
              <div className="sm-3">
                <label className="form-label fw-bold">
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
                <label className="form-label fw-bold">
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
                <label className="form-label fw-bold">
                  Salario
                </label>
                <input
                  // name="salario"
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={escribirSalario}
                  placeholder={employee.salario}
                  onChange={handleChange}
                />
              </div>   
              <div class="d-flex justify-content-center mt-4">
                <button type="submit" className="btn btn-primary mt-3 mb-2 bi bi-arrow-clockwise fw-bold">
                  Actualizar
                </button>
              </div>
            </form>
            
          </div>
          
        </div>
      </div>
      
    </>
  )
}

export default EmployeePage