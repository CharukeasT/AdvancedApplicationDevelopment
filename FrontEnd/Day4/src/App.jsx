import './App.css'
import './App.css'
import Home from "./Components/Home"
import Login from "./Components/Login"
import Register from "./Components/Register"
import AdminHome from './Components/AdminHome'
import OrganizerHome from './Components/OrganizerHome'
import AddEvent from './Components/AddEvent'
import AdminAllEvents from './Components/AdminAllEvents'
import OrganizerAllEvents from './Components/OrganizerAllEvents'
import AllBookings from './Components/AllBookings'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/adminhome" component={AdminHome}></Route>
          <Route path="/organizerhome" component={OrganizerHome}></Route>
          <Route path="/addevent" component={AddEvent}></Route>
          <Route path="/adminallevents" component={AdminAllEvents}></Route>
          <Route path="/organizerallevents" component={OrganizerAllEvents}></Route>
          <Route path="/allbookings" component={AllBookings}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App