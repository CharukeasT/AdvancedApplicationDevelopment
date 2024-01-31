import { useState } from "react"
import NavBar from "./NavBar"
import './Register.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
// import {Link} from "react-router-dom"
const Register = () => {
  const[username,setUsername] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[confirmPassword,setConfirmPasswoed] = useState('');
  const[mobileNumber,setMobileNumber] = useState('');
  const[role,setRole] = useState('0');
  const[usernameError,setUsernameError] = useState('');
  const[emailError,setEmailError] = useState('');
  const[passwordError,setPasswordError] = useState('');
  const[confirmPasswordError,setConfirmPasswordError] = useState('');
  const[mobileNumberError,setMobileNumberError] = useState('');
  const[roleError,setRoleError] = useState('');
  const history = useHistory();
  const handleSubmit = (event) =>{
    event.preventDefault();
    if(usernameError==='' && emailError==='' && passwordError==='' && confirmPasswordError==='' &&
     mobileNumberError==='' && roleError==='' && username!=='' && email!=='' && password!=='' &&
     confirmPassword!=='' && mobileNumber!=='' && role!=='0'){
      history.push('/organizerhome')
    }else{

      const passwordRegex = 
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if(username===''){
        setUsernameError("Username is required")
      }
      if(username!==''){
        setUsernameError("")
      }
      if(email===''){
        setEmailError("Email is required")
      }
      if(email!==''){
        setEmailError("")
      }
      if(password===''){
        setPasswordError("Password is required")
      }else{
        if(!passwordRegex.test(password)){
        setPasswordError("Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character")
      }else{
        setPasswordError("")
      }}
      if(password!==''){
        setPasswordError("")
      }
      if(confirmPassword===''){
        setConfirmPasswordError("Confirm password is required")
      }
      if(confirmPassword!==''){
        setConfirmPasswordError("")
      }
      if(mobileNumber===''){
        setMobileNumberError("Mobile Number is required")
      }
      if(mobileNumber!==''){
        setMobileNumberError("")
      }
       if(role==='0'){
        setRoleError("Role is required")
      }
      if(role!=='0'){
        setRoleError("")
      }
      if(password!==confirmPassword){
        setConfirmPasswordError("Passwords do not match")
      }
    }
  }
  return (
    <>
      <NavBar/>
      <div className='formcontainer'>
        <form className='formbox' onSubmit={handleSubmit}>
        <h1 className="h1">Registration</h1>
        <p className='topic'>Username:</p>
        <input type='text' className="input" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
        {usernameError && <p className="error">{usernameError}</p>}
        <p className='topic'>Email:</p>
        <input type='email'className="input" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        {emailError && <p className="error">{emailError}</p>}
        <p className='topic'>Password:</p>
        <input type='password' className="input" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        {passwordError && <p className="error">{passwordError}</p>}
        <p className='topic'>Confirm Password:</p>
        <input type='password' className="input" placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPasswoed(e.target.value)}></input>
        {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
        <p className='topic'>Mobile Number:</p>
        <input type='number' className="input" placeholder='Mobile Number' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}></input>
        {mobileNumberError && <p className="error">{mobileNumberError}</p>}
        <p className='topic'>Role:</p>
        <select className="select" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="0">Select Role</option>
          <option value="1">Admin</option>
          <option value="2">Organizer</option>
        </select>
        {roleError && <p className="error">{roleError}</p>}
        <button className='button' type='submit'>Register</button>
        <br></br><br></br>
        <br></br><br></br>
        </form>
      </div>
    </>
  )
}

export default Register