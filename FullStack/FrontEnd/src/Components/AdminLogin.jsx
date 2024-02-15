import NavBar from "./NavBar"
import './Login.css'
import axios from 'axios'
// import { Link } from "react-router-dom"
import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
function AdminLogin(){
  const[username,setUsername] = useState('');
  const[password,setPassword] = useState('');
  const history = useHistory();
  const goto = () =>{
    history.push('../userlogin')
  }
  const handleSubmit = async (event) =>{
    event.preventDefault();
        try {
            const response = await axios.post(
              "http://localhost:8080/api/v1/adminLogin",
              {
                username: username,
                password: password,
              }
            );
            console.log("Admin Token:", response.data.token);
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            console.log(localStorage.getItem("token"));
      history.push({
        pathname: "/adminhome",
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
          <h1 className="h1">Admin Login</h1>
          <p className='topic'>Username:</p>
          <input required type='text'className="input" value={username} placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
          <p className='topic'>Password:</p>
          <input required type='password' className="input" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
          <div className="buttons">
          <button className='buttona' onClick={goto}>Login as User</button>
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
export default AdminLogin;