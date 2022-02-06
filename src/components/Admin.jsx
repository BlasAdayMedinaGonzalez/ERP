import React, {useState} from 'react';
import {editaremployee, agregaremployee} from '../services/services'

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
  const [employeeInputForm, setemployeeInputForm] = useState(employeeEdit);

  // const[escribirNombre, setEscribirNombre] = useState();
  // const[escribirApellidos, setEscribirApellidos] = useState();
  // const[escribirHoraEntrada, setEscribirHoraEntrada] = useState();
  // const[escribirSalida, setescribirSalida] = useState();
  // const[escribirDepartamento, setEscribirDepartamento] = useState();
  // const[escribirFormacion, setEscribirFormacion] = useState();
  // const[escribirContacto, setEscribirContacto] = useState();
  // const[escribirSalario, setEscribirSalario] = useState();

  const handleChange = (e) => {
    setemployeeInputForm({
      ...employeeInputForm,
      [e.target.name] : e.target.value
    });

  }

  const handleSubmitAdd = (e) => {
    
    if (employeeAddboolean) {
      e.preventDefault();
      agregaremployee(employeeInputForm)
      alert("Se ha agregado los datos correctamente")
    } else {
      e.preventDefault();
      if (employeeInputForm.first_name === "") {
        setemployeeInputForm({ 
         
          first_name: employeeData.first_name});
      }
      if (employeeInputForm.last_name === "") {
        setemployeeInputForm({ 
         
          last_name: employeeData.last_name});
      }
      if (employeeInputForm.hora_entrada === "") {
        setemployeeInputForm({ 
          
          hora_entrada: employeeData.hora_entrada});
      }
      if (employeeInputForm.hora_salida === "") {
        setemployeeInputForm({ 
         
          hora_salida: employeeData.hora_salida});
      }
      if (employeeInputForm.departamento === "") {
        setemployeeInputForm({ 
         
          departamento: employeeData.departamento});
      }
      if (employeeInputForm.formacion === "") {
        setemployeeInputForm({ 
          
          formacion: employeeData.formacion});
      }
      if (employeeInputForm.contacto === "") {
        setemployeeInputForm({ 
        
          contacto: employeeData.contacto});
      }
      if (employeeInputForm.salario === "") {
        setemployeeInputForm({ 
          ...employeeInputForm,
          salario: employeeData.salario});
      }
      
      editaremployee(employeeInputForm, employeeData.employee_id);
      alert("Se ha actualizado los datos correctamente")
    }
    setRecargar(true);
  };
  if (!employeeAddboolean) {
    return (
      <div>
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
                value= {employeeInputForm.first_name}
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
                value={employeeInputForm.last_name}
                placeholder={employeeData.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="sm-3">
              <label className="form-label">
                Hora de entrada
              </label>
              <input
                name="hora_entrada"
                type="text"
                className="form-control"
                id="last_name"
                value={employeeInputForm.hora_entrada}
                placeholder={employeeData.hora_entrada}
                onChange={handleChange}
              />
            </div>
            <div className="sm-3">
              <label className="form-label">
                Hora de salida
              </label>
              <input
                name="hora_salida"
                type="text"
                className="form-control"
                id="last_name"
                value={employeeInputForm.hora_salida}
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
                value={employeeInputForm.departamento}
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
                value={employeeInputForm.formacion}
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
                value={employeeInputForm.contacto}
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
                value={employeeInputForm.salario}
                placeholder={employeeData.salario}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Actualizar
            </button>
          </form>
          <div className="d-grid col-6 mx-auto">
            <button type="submit" className="btn btn-info  ms-2 mt-2" onClick={() => setEmployeeInfo(true)}>
              Volver
            </button>
          </div>
        </div>
    );
  } else {
    return (
      <div>
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
                Hora de entrada
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
                Hora de salida
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
            <button type="submit" className="btn btn-primary mt-2">
              Actualizar
            </button>
          </form>
          <div className="d-grid col-6 mx-auto">
            <button type="submit" className="btn btn-info  ms-2 mt-2" onClick={() =>(setemployeeAddboolean(false) & setEmployeeInfo(true))}>
              Volver
            </button>
          </div>
        </div>)
  }
  
};

export default EmployeeUser;
