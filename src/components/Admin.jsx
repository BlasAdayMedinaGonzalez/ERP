import React, {useState} from 'react';
import {editaremployee, agregaremployee} from '../services/services'

const employeeNewEmployee = {
  first_name: '',
  last_name:'',
  hora_entrada:'',
  hora_salida:'',
  departamento:'',
  formacion:'',
  contacto:'',
  salario:''
}
const employeeEdit = {
  first_name: '',
  last_name:'',
  hora_entrada:'',
  hora_salida:'',
  departamento:'',
  formacion:'',
  contacto:'',
  salario:''
}

const EmployeeUser = ({employeeData, setRecargar, setEmployeeInfo, employeeInfo, employeeAddboolean, setemployeeAddboolean}) => {
  const [employeeInputForm, setemployeeInputForm] = useState(employeeNewEmployee);

  const [employeeInputFormEdit, setemployeeInputFormEdit] = useState(employeeEdit);

  const[escribirNombre, setEscribirNombre] = useState(employeeData.first_name);
  const[escribirApellidos, setEscribirApellidos] = useState(employeeData.last_name);
  const[escribirHoraEntrada, setEscribirHoraEntrada] = useState(employeeData.hora_entrada);
  const[escribirSalida, setescribirSalida] = useState(employeeData.hora_salida);
  const[escribirDepartamento, setEscribirDepartamento] = useState(employeeData.departamento);
  const[escribirFormacion, setEscribirFormacion] = useState(employeeData.formacion);
  const[escribirContacto, setEscribirContacto] = useState(employeeData.contacto);
  const[escribirSalario, setEscribirSalario] = useState(employeeData.salario);
  const [timeEntrada, setTimeEntrada] = useState(employeeData.entrada);
  const [escribirTarea, setEscribirTarea] = useState(employeeData.tarea);
  const [timeSalida, setTimeSalida] = useState(employeeData.salida);
  const[escribirComentario, setEscribirComentario] = useState(employeeData.comentario);



  const handleChange = (e) => {
    if (employeeAddboolean) {
      setemployeeInputForm({
        ...employeeInputForm,
        [e.target.name] : e.target.value
      });
    } else {
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
      }
      
    }
    
    console.log(e.target.value);
  }
  

  const handleSubmitAdd = (e) => {
    if (employeeAddboolean) {
      e.preventDefault();
      agregaremployee(employeeInputForm)
      alert("Se ha agregado los datos correctamente")
    } else {
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
        comentario: escribirComentario
      };
      editaremployee(employeeEdit, employeeData.employee_id);
      alert("Se ha actualizado los datos correctamente")
    }
    
    setRecargar(true);
  };
  
  if (!employeeAddboolean) {
    return (
      <div className="row">
      <div className="card col-6 align-items-center bg-info">
          <h1>Datos de la persona:</h1>
          <form className="ms-2" onSubmit={handleSubmitAdd} >
            <div className="sm-3">
              <label className="form-label fw-bold">
                Nombre
              </label>
              <input
                name="first_name"
                type="text"
                className="form-control"
                id="first_name"
                value= {escribirNombre}
                placeholder={employeeData.first_name}
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
                placeholder={employeeData.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="sm-3">
              <label className="form-label fw-bold">
                Horario de entrada
              </label>
              <input
                name="hora_entrada"
                type="text"
                className="form-control"
                id="last_name"
                value={escribirHoraEntrada}
                placeholder={employeeData.hora_entrada}
                onChange={handleChange}
              />
            </div>
            <div className="sm-3">
              <label className="form-label fw-bold">
                Horario de salida
              </label>
              <input
                name="hora_salida"
                type="text"
                className="form-control"
                id="last_name"
                value={escribirSalida}
                placeholder={employeeData.hora_salida}
                onChange={handleChange}
              />
            </div>
            <div className="sm-3">
              <label className="form-label fw-bold">
                Departamento
              </label>
              <input
                name="departamento"
                type="text"
                className="form-control"
                id="last_name"
                value={escribirDepartamento}
                placeholder={employeeData.departamento}
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
                placeholder={employeeData.formacion}
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
                placeholder={employeeData.contacto}
                onChange={handleChange}
              />
            </div>
            <div className="sm-3">
              <label className="form-label fw-bold">
                Salario
              </label>
              <input
                name="salario"
                type="text"
                className="form-control"
                id="last_name"
                value={escribirSalario}
                placeholder={employeeData.salario}
                onChange={handleChange}
              />
            </div>
            
            <button type="submit" className="btn btn-primary mt-2 ms-5 mb-2 bi bi-arrow-clockwise fw-bold">
              Actualizar
            </button>
          </form>
          
        </div>
        <div className= "card bg-warning col-6 ">
                <form className="ms-2 mt-5" onSubmit={handleSubmitAdd}>
                  <h1 className= "text-center">Control del día:</h1>
              <div className="sm-3 mt-2">
                <label className="form-label fw-bold">
                Hora Entrada del empleado
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
                Tareas realizadas del empleado
                </label>
                <input
                
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
                  Hora salida del empleado
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
                  Comentario a empleado
                </label>
                <input
                  name="comentario"
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={escribirComentario}
                  placeholder={employeeData.comentario}
                  onChange={handleChange}
                />
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary mt-2 mb-2 bi bi-send-fill fw-bold">
                  Enviar a comentario a empleado
                </button>
              </div>
              </form>
              </div>
              <div className="d-grid col-6 mx-auto">
            <button type="submit" className="btn btn-success ms-2 mt-2 bi bi-arrow-left fw-bold" onClick={() => setEmployeeInfo(true)}>
              Volver
            </button>
          </div>
      </div>
        
    );
  } else {
    return (
      <div className="">
      <div className="card align-items-center bg-info  ">
          <h1>Datos del nuevo empleado:</h1>
          <form className="ms-2" onSubmit={handleSubmitAdd} >
            <div className="sm-3">
              <label className="form-label">
                Nombre
              </label>
              <input
                name="first_name"
                type="text"
                className="form-control"
                id="first_name"
                value= {employeeInputForm.first_name}
                placeholder=""
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
                value={employeeInputForm.last_name}
                placeholder=""
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
                value={employeeInputForm.hora_entrada}
                placeholder=""
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
                value={employeeInputForm.hora_salida}
                placeholder=""
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
                value={employeeInputForm.departamento}
                placeholder=""
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
                value={employeeInputForm.formacion}
                placeholder=""
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
                value={employeeInputForm.contacto}
                placeholder=""
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
                value={employeeInputForm.salario}
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <div className="d-grid col-6 mx-auto mb-2" >
              <button type="submit" className="btn btn-success mt-2 fw-bold">
                Añadir
              </button>
            </div>
          </form>
          <div className="d-grid col-6 mx-auto mt-5">
              <button type="submit" className="btn btn-warning ms-2 mt-2 mb-2 bi bi-arrow-left fw-bold" onClick={() =>(setemployeeAddboolean(false) & setEmployeeInfo(true))}>
                Volver
              </button>
          </div>
          
        </div>
          
        </div>)
  }
  
};

export default EmployeeUser;
