import {Link} from "react-router-dom"
import "./OrganizerNavBar.css"
const OrganizerNavBar = () => {
  return (
    <>
      <div className="navbox2">
      <div className='heading'></div>
      <div className="dropdown2">
        <div className="button-container2">
          <div className='dropbtn-image2'></div>
        </div> 
        <div className="dropdown-content2">
        <button className='button3'><Link to='/organizerhome' className='link3'>Home</Link></button>
      <button className='button3'><Link to='/organizerdashboard' className='link3'>DashBoard</Link></button>
      <button className='button3'><Link to='/organizerallevents' className='link3'>All Events</Link></button>
      <button className='button3'><Link to='/mybookings' className='link3'>My Bookings</Link></button>
      {/* <button className='button3'><Link to='/home' className='link3'>My Payments</Link></button> */}
      <button className='logout3'><Link to='/home' className='logout4'>Logout</Link></button>
        </div>
      </div>
      <div className='navbuttons2'>
      <button className='button3'><Link to='/organizerhome' className='link3'>Home</Link></button>
      <button className='button3'><Link to='/organizerdashboard' className='link3'>DashBoard</Link></button>
      <button className='button3'><Link to='/organizerallevents' className='link3'>All Events</Link></button>
      <button className='button3'><Link to='/mybookings' className='link3'>My Bookings</Link></button>
      {/* <button className='button3'><Link to='/home' className='link3'>My Payments</Link></button> */}
      <button className='logout3'><Link to='/home' className='logout4'>Logout</Link></button>
      </div>
    </div>
    </>
  )
}

export default OrganizerNavBar