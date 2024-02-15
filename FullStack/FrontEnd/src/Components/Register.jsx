import { useState } from "react"
import NavBar from "./NavBar"
import './Register.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import axios from 'axios'
// import {Link} from "react-router-dom"
const Register = () => {
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[confirmPassword,setConfirmPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      if(password===confirmPassword){
        const response = await axios.post(
            "http://localhost:8080/api/v1/userRegister",
            {
              name,
              email,
            password,
            },
        );
        alert("User registered successfully");
        console.log("Sign Up successful");
        console.log(response.data);
        history.push("/userlogin");
        setName("");
        setEmail("");
        setPassword("");
      }else{
        alert("Passwords do not match.");
        setPassword("");
        setConfirmPassword("");
      }
        } catch (error) {
        console.error("Registration failed");
        console.error(error); 

    }
}
  // const handleSubmit = (event) =>{
  //   event.preventDefault();
  //   if(usernameError==='' && emailError==='' && passwordError==='' && confirmPasswordError==='' && username!=='' && email!=='' && password!=='' &&
  //    confirmPassword!==''){
  //     history.push('/organizerhome')
  //   }else{

  //     const passwordRegex = 
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //     if(username===''){
  //       setUsernameError("Username is required")
  //     }
  //     if(username!==''){
  //       setUsernameError("")
  //     }
  //     if(email===''){
  //       setEmailError("Email is required")
  //     }
  //     if(email!==''){
  //       setEmailError("")
  //     }
  //     if(password===''){
  //       setPasswordError("Password is required")
  //     }else{
  //       if(!passwordRegex.test(password)){
  //       setPasswordError("Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character")
  //     }else{
  //       setPasswordError("")
  //     }}
  //     if(password!==''){
  //       setPasswordError("")
  //     }
  //     if(confirmPassword===''){
  //       setConfirmPasswordError("Confirm password is required")
  //     }
  //     if(confirmPassword!==''){
  //       setConfirmPasswordError("")
  //     }
  //     if(password!==confirmPassword){
  //       setConfirmPasswordError("Passwords do not match")
  //     }
  //   }
  // }
  return (
    <>
      <NavBar/>
      <div className='formcontainer'>
        <form className='formbox' onSubmit={handleSubmit}>
        <h1 className="h1">Registration</h1>
        <p className='topic'>Username:</p>
        <input type='text' className="input" placeholder='Username' value={name} onChange={(e) => setName(e.target.value)}></input>
        <p className='topic'>Email:</p>
        <input type='email'className="input" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <p className='topic'>Password:</p>
        <input type='password' className="input" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <p className='topic'>Confirm Password:</p>
        <input type='password' className="input" placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
        <button className='button' type='submit'>Register</button>
        <br></br><br></br>
        <br></br><br></br>
        </form>
      </div>
    </>
  )
}

export default Register