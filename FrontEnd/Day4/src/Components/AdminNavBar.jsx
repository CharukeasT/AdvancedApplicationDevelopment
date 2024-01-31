import './AdminNavBar.css'
import {Link} from "react-router-dom"
const AdminNavBar = () => {
  return (
    <>
      <div className="navbox1">
      <div className='heading'></div>
      <div className="dropdown1">
        <div className="button-container1">
          <div className='dropbtn-image1'></div>
        </div> 
        <div className="dropdown-content1">
        <button className='button2'><Link to='/home' className='link2'>Home</Link></button>
      <button className='button2'><Link to='/home' className='link2'>DashBoard</Link></button>
      <button className='button2'><Link to='/adminallevents' className='link2'>All Events</Link></button>
      <button className='button2'><Link to='/addevent' className='link2'>Add Event</Link></button>
      <button className='button2'><Link to='/allbookings' className='link2'>All Bookings</Link></button>
      <button className='logout1'><Link to='/home' className='logout2'>Logout</Link></button>
        </div>
      </div>
      <div className='navbuttons1'>
      <button className='button2'><Link to='/home' className='link2'>Home</Link></button>
      <button className='button2'><Link to='/home' className='link2'>DashBoard</Link></button>
      <button className='button2'><Link to='/adminallevents' className='link2'>All Events</Link></button>
      <button className='button2'><Link to='/addevent' className='link2'>Add Event</Link></button>
      <button className='button2'><Link to='/allbookings' className='link2'>All Bookings</Link></button>
      <button className='logout1'><Link to='/home' className='logout2'>Logout</Link></button>
      </div>
    </div>
    </>
  )
}

export default AdminNavBar