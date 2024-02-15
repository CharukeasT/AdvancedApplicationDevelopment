import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from "./Components/Home"
import UserLogin from "./Components/UserLogin"
import AdminLogin from "./Components/AdminLogin"
import Register from "./Components/Register"
import AdminHome from './Components/AdminHome'
import OrganizerHome from './Components/OrganizerHome'
import AddEvent from './Components/AddEvent'
import AdminAllEvents from './Components/AdminAllEvents'
import OrganizerAllEvents from './Components/OrganizerAllEvents'
import AllBookings from './Components/AllBookings'
import AdminDashboard from './Components/AdminDashboard'
import AddBooking from './Components/AddBooking'
import MyBookings from './Components/MyBookings'
import OrganizerDashboard from './Components/OrganizerDashboard'
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/userlogin" component={UserLogin}></Route>
          <Route path="/adminlogin" component={AdminLogin}></Route>
          <Route path="/adminhome" component={AdminHome}></Route>
          <Route path="/organizerhome" component={OrganizerHome}></Route>
          <Route path="/addevent" component={AddEvent}></Route>
          <Route path="/adminallevents" component={AdminAllEvents}></Route>
          <Route path="/organizerallevents" component={OrganizerAllEvents}></Route>
          <Route path="/allbookings" component={AllBookings}></Route>
          <Route path="/mybookings" component={MyBookings}></Route>
          <Route path="/admindashboard" component={AdminDashboard}></Route>
          <Route path="/organizerdashboard" component={OrganizerDashboard}></Route>
          <Route path="/addbooking" component={AddBooking}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App