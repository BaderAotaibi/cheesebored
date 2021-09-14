import React from 'react' 
import { Link, useHistory } from 'react-router-dom'

const Navbar = () => {
  
  const history = useHistory()
  const getTokenFromLocalStorage = () => {
    return window.localStorage.getItem('token')
  }
  const getPayload = () => {
    const token = getTokenFromLocalStorage() 
    if (!token) return

    const splittedToken = token.split('.')
    if (splittedToken < 3) return

    return JSON.parse(splittedToken[1])
  }
  const isUserAuthenticated = () =>{
    const payload = getPayload()
    if(!payload) return
    const currentTime = Math.round(Date.now() / 1000)
    return currentTime < payload.exp
  }
  const logoutHandle = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <header className="bg-dark text-white py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <p className="navbar-brand"><Link  className="text-decoration-none" to="/">🧀</Link></p>
        <ul className="navbar navbar-nav navbar-expand-lg">
          <li className="nav-item"> <Link to="/cheeses">All <span>🧀 </span></Link></li>
          { isUserAuthenticated ? 
            <li  className="nav-item"><span className="logout-btn" onClick={logoutHandle}>Logout</span></li>
            :
            <>
              <li className="nav-item"><Link to="/login">Login</Link></li>
              <li className="nav-item"> <Link to="/register">Register</Link></li>
            </>
          }
        </ul>
      </div>
    </header>
  )
}
export default Navbar