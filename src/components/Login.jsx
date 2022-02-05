import React from 'react';
import logo from '../assets/user.jpg';

const Login = () => {
  return (
     <div className="container h-100">
       <div className="row align-items-center h-75 ">
          <div class="col-6 mx-auto">
           <div className="card align-items-center border-0 bg-info" >
             <img className= "mt-2 mb-2" src={logo} alt="logo" width="100" height="100" />
              <form>
                  <div className="d-flex mb-3">
                      <i className="bi bi-person-fill fs-2 "></i>
                      <input 
                      className="form-control" 
                      id="exampleDropdownFormEmail2" 
                      placeholder="Usuario" />
                      </div>
                      <div className="d-flex mb-3">
                      <i class="bi bi-shield-lock-fill fs-2"></i>
                      <input 
                      type="password" 
                      className="form-control" 
                      id="exampleDropdownFormPassword2" 
                      placeholder="Contraseña" />
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
};

export default Login;
