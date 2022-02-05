import React, {useState, useEffect} from 'react';
import EmmployeeUser from './components/EmmployeeUser';
import Login from './components/Login';
import Navbar from './components/Navbar';

const initialUser =  {
  user: '',
  password: ''
}


function App() {
  const [user, setUser] = useState({initialUser});
  const handleSubmitUser = (data) => {
    setUser(data);
  };
  console.log(user);
  return (
    <Login data = {user} onSubmitValues={handleSubmitUser} />
  );
}

export default App;
