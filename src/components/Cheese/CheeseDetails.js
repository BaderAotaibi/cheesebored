import axios from 'axios'
import React, { useState, useEffect } from 'react' 
import { Link, useParams } from 'react-router-dom'



const CheeseDetails = () => {

  const [cheese, setCheese] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getCheese = async () =>{
      const { data } = await axios(`https://ga-cheesebored.herokuapp.com/cheeses/${id}`)
      setCheese(data)
    }
    getCheese()
  },[id])

  return (
    <>

      {cheese ?
        <div key={cheese.name}className="container mt-4">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>{cheese.name}</h2>
              <hr />
              <img src={cheese.image} alt={cheese.name} />
            </div>
            <div className="col-12 col-md-6">
              <h2>Tasting Notes</h2>
              <p>{cheese.tastingNotes}</p>
              <hr />
              <h2>Origin</h2>
              <p>{cheese.origin}</p>
              <hr />
              <h2>Tag: </h2>
              <p>{cheese.name}</p>
              <hr />
              <Link to="/cheeses" className="btn btn-lg btn-dark">More Cheese</Link>
            </div>

          </div>
        </div>
        :
        'OOPS'
      }
    </>
    
  
  )
}
export default CheeseDetails