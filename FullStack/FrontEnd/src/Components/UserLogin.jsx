import NavBar from "./NavBar"
import './Login.css'
import axios from 'axios'
// import { Link } from "react-router-dom"
import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
const Login = () => {
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const history = useHistory();
  const goto = () =>{
    history.push('../adminlogin')
  }
  const handleSubmit = async (event) =>{
    event.preventDefault();
        try {
            const response = await axios.post(
              "http://localhost:8080/api/v1/userLogin",
              {
                email: email,
                password: password,
              }
            );
            console.log("User Token:", response.data.token);
            console.log(response.data);
            localStorage.setItem("uid",response.data.student.id);
            localStorage.setItem("token", response.data.token);
            console.log(localStorage.getItem("token"));
      history.push({
        pathname: "/organizerhome",
        state: { token: response.data.token },
      });
            alert("Login Successful.");
          } catch (error) {
            console.error("Error:", error);
          }
  };
  return (
    <>
      <NavBar/>
      <div className="formcontainer1">
        <form className="loginbox" onSubmit={handleSubmit}>
          <h1 className="h1">User Login</h1>
          <p className='topic'>Email:</p>
          <input required type='email'className="input" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
          <p className='topic'>Password:</p>
          <input required type='password' className="input" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
          <div className="buttons">
          <button className='buttona' onClick={goto}>Login as Admin</button>
          <button className='button' type='submit'>Login</button>
          </div>
          <br></br><br></br>
          <br></br><br></br>
          {/* {error && <p style={{color:'red'}}>{error}</p>} */}
          </form>
      </div>
    </>
  )
}

export default Login