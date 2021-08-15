
import './App.css';
import Home from './components/Home'
import Welcom from './components/Welcom'

import Login from './components/Authentication/Login'
import Register from './components/Authentication/Register'
import NavbarComponent from './components/Navbar'
import { Route, BrowserRouter as Router } from "react-router-dom";

import Create from './components/Certificates/Create'
import Index from './components/Certificates/Index'
import Edit from './components/Certificates/Edit'

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Router>
            <Route exact path="/" component={Welcom} /> 
            <Route exact path="/home" component={Home} /> 
            <Route exact path="/login" component={Login} />
            <Route exact path="/Register" component={Register} />
        <Route exact path="/certificates/create" component={Create} />
            <Route exact path="/certificates/edit/id=:id" component={Edit} />
            <Route exact path="/certificates" component={Index} />
      </Router>

    </div>
  );
}

export default App;
