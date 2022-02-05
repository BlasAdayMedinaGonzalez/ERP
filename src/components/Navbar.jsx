import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container-flex">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="logo" width="30" height="30" className="d-inline-block align-text-top me-2 ms-2" />
                Inicio
            </a>
            <a className= "navbar-brand text-white-50">Acerca de</a>
            <a className= "navbar-brand text-white-50">Contacto</a>
        </div>
        
        {data.user && data.password === password ? <Logout onSubmit={onSubmit} data = {data} /> : <Login onSubmit={onSubmit} />}
      
    </nav>
  )
};

export default Navbar;
