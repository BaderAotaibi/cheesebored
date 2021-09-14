import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import CheeseDetails from './components/Cheese/CheeseDetails'
import Home from './pages/Home'
import Cheeses from './pages/Cheeses'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cheeses">
          <Cheeses />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/cheeses/:id">
          <CheeseDetails />
        </Route>
      </Switch>
    </BrowserRouter>
    
  )

}

export default App
