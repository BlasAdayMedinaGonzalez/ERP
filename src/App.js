import React, {useState, useEffect} from 'react';
import {fgetAllemployees} from "./services/services"
import Login from './components/Login';

const initialUser =  {
  user: '',
  password: ''
}


function App() {
  const [user, setUser] = useState({initialUser});
  const [employees, setEmployees] = useState([]);
  const [recargar, setRecargar] = useState(true);

  useEffect(() =>{
    fgetAllemployees().then((res) => {
      console.log(res.data);
      setEmployees(res.data)
      setRecargar(false)
    })
  },[recargar]);
  
  const handleSubmitUser = (data) => {
    setUser(data);
  };

  return (
    <Login data = {user} employees={employees} onSubmitValues={handleSubmitUser} setRecargar={setRecargar} />
  );
}

export default App;
