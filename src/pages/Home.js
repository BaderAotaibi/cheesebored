import React from 'react' 
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center vh-100">
      <h1>CheesesBored 🧀</h1>
      <Link to="/cheeses" className="btn btn-lg btn-dark">Explore All Cheeses</Link>
    </div>
  )
}
export default Home