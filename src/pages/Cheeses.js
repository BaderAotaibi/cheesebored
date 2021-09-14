import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CheeseCard from '../components/Cheese/CheeseCard'


const Cheeses = () => {
  const [cheeses, setCheeses] = useState([])
  useEffect(() => {
    const getCheeses = async () => {
      const { data } = await axios('https://ga-cheesebored.herokuapp.com/cheeses')
      setCheeses(data)
    }
    getCheeses()
  },[])

  return (
    <div className="container">
      <div className="row">
        {
          cheeses.map(cheese => {
            return (
              
              <CheeseCard  key={cheese.key}  {...cheese}/>
        
            )
          })
        }
      </div>
    </div>
  )
}
export default Cheeses