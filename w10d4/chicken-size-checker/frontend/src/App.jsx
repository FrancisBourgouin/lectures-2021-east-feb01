import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'

import Chickens from './components/Chickens';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

import './App.css';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    axios
      .post("/api/users/authenticate")
      .then(res => setUser(res.data))
  }, [])
  const handleLogin = () => {
    axios
      .post("/api/users/login")
      .then(res => setUser(res.data))
  }
  return (
    <Router>
      <div className="App">
        <h1>I AM THE TITLE </h1>
        <h2>{user ? "I am logged in" : "I am not logged in"}</h2>
        <section>
          <button onClick={handleLogin}>Login</button>
        </section>
        <nav>
          {/* <a href="/chickens">Chickens!</a> */}
          <Link to="/chickens">Chickens!</Link>
          <Link to="/">Home!</Link>
          <Link to="/login">Login!</Link>
          <Link to="/register">Register!</Link>
          <Link to="/profile">Profile!</Link>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/chickens">
            <Chickens />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
