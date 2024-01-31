import NavBar from "./NavBar"
import './Login.css'
// import { Link } from "react-router-dom"
import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
const Login = () => {
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[error,setError] = useState('');
  const history = useHistory();
  const handleSubmit = (event) =>{
    event.preventDefault();
    if(email==='tcharukeas2003@gmail.com' && password==='Charu@333'){
      console.log(' Admin Login successful');
      history.push('/adminhome')
    }else if(email==='tmatheas@gmail.com' && password==='Charu@333'){
      console.log('Organizer Login Successful');
      history.push('/organizerhome')
    }else{
      setError('Invalid username or password');
    }
  };
  return (
    <>
      <NavBar/>
      <div className="formcontainer1">
        <form className="loginbox" onSubmit={handleSubmit}>
          <h1 className="h1">Login</h1>
          <p className='topic'>Email:</p>
          <input required type='email'className="input" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
          <p className='topic'>Password:</p>
          <input required type='password' className="input" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
          <button className='button' type='submit'>Login</button>
          <br></br><br></br>
          <br></br><br></br>
          {error && <p style={{color:'red'}}>{error}</p>}
          </form>
      </div>
    </>
  )
}

export default Login