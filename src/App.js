import React, {useState, useEffect} from 'react';
import Login from './components/Login';

const initialUser =  {
  user: '',
  password: ''
}

function App() {
  const [user, setUser] = useState({initialUser});
  const handleSubmitUser = (data) => {
    setUser(data);
    console.log(data);
  };
  return (
    <Login />
  );
}

export default App;
