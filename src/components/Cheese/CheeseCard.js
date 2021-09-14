import React from 'react' 
import { Link } from 'react-router-dom'



const CheeseCard = ({ _id, name, image, origin }) => {
  return (
    <div className="mt-4 col-12 col-md-6 col-lg-4 text-center">
      <Link className="text-decoration-none" to={`/cheeses/${_id}`}>
        <div className="card h-100">
          <div className="card-header bg-dark text-white">
            {name}
          </div>
          <div className="card-image">
            <img src={image} alt={name}/>
          </div>
          <div className="card-text text-dark">
            {origin}
          </div>
        </div>
      </Link>
    </div>
  
  )
}
export default CheeseCard