import './NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
  <>
    <div className="navbox">
      <div className='heading'></div>
      <div className="dropdown">
        <div className="button-container">
          <div className='dropbtn-image'></div>
        </div> 
        <div className="dropdown-content">
          <button className='button1'><Link to='/home' className='link1'>Home</Link></button>
          <button className='button1'><Link to='/register' className='link1'>Register</Link></button>
          <button className='button1'><Link to='/adminlogin' className='link1'>Login</Link></button>
        </div>
      </div>
      <div className='navbuttons'>
          <button className='button1'><Link to='/home' className='link1'>Home</Link></button>
          <button className='button1'><Link to='/register' className='link1'>Register</Link></button>
          <button className='button1'><Link to='/adminlogin' className='link1'>Login</Link></button>
      </div>
    </div>
    
  </>
  )
}

export default NavBar