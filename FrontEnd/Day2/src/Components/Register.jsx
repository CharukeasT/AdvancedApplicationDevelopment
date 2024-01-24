import NavBar from "./NavBar"
import './Register.css'
const Register = () => {
  return (
    <>
        <NavBar/>
        <div className='formcontainer'>
        <form className='formbox'>
        <h1 className="h1">Registration</h1>
        <p className='topic'>Username:</p>
        <input required type='text' className="input" placeholder='Username'></input>
        <p className='topic'>Email:</p>
        <input required type='email'className="input" placeholder='Email'></input>
        <p className='topic'>Password:</p>
        <input required type='password' className="input" placeholder='Password'></input>
        <p className='topic'>Confirm Password:</p>
        <input required type='text' className="input" placeholder='Confirm password'></input>
        <p className='topic'>Mobile Number:</p>
        <input required type='number' className="input" placeholder='Mobile Number'></input>
        <p className='topic'>Role:</p>
        <select className="select">
          <option value="0">Select Role</option>
          <option value="1">Admin</option>
          <option value="2">Organizer</option>
        </select>
        <button className='button' type='submit'>Register</button>
        <br></br><br></br>
      </form>
        </div>
    </>
  )
}

export default Register