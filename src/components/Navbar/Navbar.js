import React from 'react' 
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="bg-dark text-white py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <p className="navbar-brand"><Link  className="text-decoration-none" to="/">🧀</Link></p>
        <ul className="navbar navbar-nav navbar-expand-lg">
          <li className="nav-item"> <Link to="/cheeses">All <span>🧀 </span></Link></li>
          <li className="nav-item"><Link to="/login">Login</Link></li>
          <li className="nav-item"> <Link to="/register">Register</Link></li>
        </ul>
      </div>
    </header>
  )
}
export default Navbar