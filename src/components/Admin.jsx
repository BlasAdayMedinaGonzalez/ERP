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
  const [timeSalida, setTimeSalida] = useState(employeeData.salida);
  const[escribirComentario, setEscribirComentario] = useState(employeeData.comentario);

// console.log('====================================');
// console.log(timeEntrada);
// console.log('====================================');
//   if (timeEntrada === undefined && timeSalida === undefined) {
//     setTimeEntrada("Sin Fichar")
//     setTimeSalida("Sin Fichar");
//   }

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
      <div className="card col-12 align-items-center bg-info">
          <h1>Datos de la persona:</h1>
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
                value= {escribirNombre}
                placeholder={employeeData.first_name}
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
                placeholder={employeeData.last_name}
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
                placeholder={employeeData.hora_entrada}
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
                placeholder={employeeData.hora_salida}
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
                placeholder={employeeData.departamento}
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
                placeholder={employeeData.formacion}
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
                placeholder={employeeData.contacto}
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
                placeholder={employeeData.salario}
                onChange={handleChange}
              />
            </div>
            <div className="sm-3">
                <label className="form-label">
                Hora Entrada
                </label>
                <input
                  // name="entrada"
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={timeEntrada}
                  placeholder={timeEntrada}
                  onChange={handleChange}
                />
              </div>
              <div className="sm-3">
                <label className="form-label">
                  Hora Salida
                </label>
                <input
                  // name="salida"
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={timeSalida}
                  placeholder={timeSalida}
                  onChange={handleChange}
                />
              </div>
              <div className="sm-3">
                <label className="form-label">
                  Comentario a Empleado
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
            <button type="submit" className="btn btn-primary mt-2 ms-5 ">
              Actualizar
            </button>
          </form>
          <div className="d-grid col-6 mx-auto">
            <button type="submit" className="btn btn-warning  ms-2 mt-2" onClick={() => setEmployeeInfo(true)}>
              Volver
            </button>
          </div>
        </div>
    );
  } else {
    return (
      <div className="container ">
      <div className="card align-items-center bg-info mt-5 ">
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
              <button type="submit" className="btn btn-success mt-2">
                Añadir
              </button>
            </div>
          </form>
          
        </div>
          <div className="d-grid col-6 mx-auto mt-5">
              <button type="submit" className="btn btn-warning  ms-2 mt-2" onClick={() =>(setemployeeAddboolean(false) & setEmployeeInfo(true))}>
                Volver
              </button>
          </div>
        </div>)
  }
  
};

export default EmployeeUser;
