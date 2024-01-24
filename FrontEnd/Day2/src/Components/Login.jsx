import NavBar from "./NavBar"
import './Login.css'
const Login = () => {
  return (
    <>
        <NavBar/>
        <div className="formcontainer1">
            <form className="loginbox">
                <h1 className="h1">Login</h1>
                <p className='topic'>Email:</p>
                <input required type='email'className="input" placeholder='Email'></input>
                <p className='topic'>Password:</p>
                <input required type='password' className="input" placeholder='Password'></input>
                <button className='button' type='submit'>Login</button>
                <br></br><br></br>
                <br></br><br></br>
            </form>
        </div>
    </>
  )
}

export default Login