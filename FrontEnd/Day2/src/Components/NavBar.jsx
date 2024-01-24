import { Link } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
  <>
    <div className="navbox">
      <div className='heading'></div>
      <div className='navbuttons'>
      <button className='button1'><Link to='/home' className='link1'>Home</Link></button>
      <button className='button1'><Link to='/register' className='link1'>Register</Link></button>
      <button className='button1'><Link to='/login' className='link1'>Login</Link></button>
      </div>
    </div>
    
  </>
  )
}

export default NavBar