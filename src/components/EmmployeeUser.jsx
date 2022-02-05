import React from 'react';

const EmmployeeUser = ({data, setLogin}) => {
  return <nav className="navbar navbar-dark bg-dark">
  <div className="d-flex">
      <a className= "navbar-brand text-white-50 ms-2">Usuario : </a>
      <a className= "navbar-brand">{data.user}</a>
  </div>
  <div className="d-flex">
    <button type="button" onClick={() => setLogin(true)} className="btn btn-warning me-4">Logout</button>
  </div>
</nav>;
};

export default EmmployeeUser;
