import NavBar from "./NavBar"
import './Home.css'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <>
      <NavBar/>
      <center>
        <div className="logo"></div>
      </center>
      <div className='foot'>
      <div className='copy1'>
      <h1 className='copyh'>Aadhi Event Managements © Copyrights Reserved - 2024 </h1></div>
      <div className='foots'>
      <h1 className='copyh'>Follow us on : </h1>
      <button className="facebook"><Link to="https://www.facebook.com/charu.keas/"></Link></button>
      <div className="linkedin"><Link to="https://www.linkedin.com/in/charukeas-t-708b55242/"></Link></div>
      <div className="instagram"><Link to="https://www.instagram.com/_charu_keas_/"></Link></div>
      <div className="twitter"><Link to="https://twitter.com/_charu_keas_"></Link></div>
          {/* <a><div><Link to="https://www.facebook.com/charu.keas/"><Button className='button311b1'><img src={"../assets/Facebook.png"} alt="my" width={"60px"} /></Button></Link></div></a>
          <a><div><Link to="https://www.instagram.com/_charu_keas_/"><Button className='button311b1'><img src={instagram} alt="my" width={"60px"} /></Button></Link></div></a>
          <a><div><Link to="https://twitter.com/_charu_keas_"><Button className='button311b1'><img src={twitter} alt="my" width={"60px"} /></Button></Link></div></a>
          <a><div><Link to="https://www.linkedin.com/in/charukeas-t-708b55242/"><Button className='button311b1'><img src={linkedin} alt="my" width={"60px"} /></Button></Link></div></a>
          <a><div><Link to="/Feedback"><Button className='button311b1'><img src={feedback} alt="my" width={"60px"} /></Button></Link></div></a> */}
          </div>
    </div>
    </>
  )
}

export default Home