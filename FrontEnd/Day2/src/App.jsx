import Home from "./Components/Home"
import './App.css'
import Login from "./Components/Login"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Register from "./Components/Register"
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App