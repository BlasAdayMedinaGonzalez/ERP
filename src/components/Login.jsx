import React, {useState} from 'react';
import logo from '../assets/user.jpg';
import EmmployeeUser from './EmmployeeUser';
import Navbar from './Navbar';

const initUser = {
  user: '',
  password: ''
};

const admin = {
  user: "admin",
  password: "admin"
};

const Login = ({data, onSubmitValues}) => {

  const [form, setFormState] = useState(initUser);
  const [adminVerification, setuserVerification] = useState(true);
  const [login, setLogin] = useState(true);

  const handleChange = (e) => {
    setFormState({
      ...form,
      [e.target.name] : e.target.value
    });
  }

  const handleSubmit = (e) => {
    if (JSON.stringify(form) !== JSON.stringify(admin)) {
      console.log("No son iguales");
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
            <div className="card align-items-center border-0 bg-info" >
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
    console.log(adminVerification);
    if (adminVerification) {
      console.log("Debería pasar por aquí" + adminVerification);
      return <Navbar data={data} setLogin={setLogin} />
    } else  {
      return <EmmployeeUser data={data} setLogin={setLogin} />
    }
    
  }
};

export default Login;
