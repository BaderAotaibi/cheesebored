import axios from 'axios'
import React, { useState } from 'react' 
import { useHistory } from 'react-router-dom'


const Login = () => {

  const history = useHistory()

  

  const [ registerData, setRegisterData ] = useState({
    email: '',
    password: '',
  })
  const saveTokenToLocalStorage = (token) =>{
    window.localStorage.setItem('token' ,token)
  }
  const changeHandle = (e) =>{
    setRegisterData({...registerData, [e.target.name]: e.target.value })
  }
  const submitHandle = async (e) => {
    e.preventDefault()
    try {

      const { data } = await axios.post('https://ga-cheesebored.herokuapp.com/login', registerData)
      saveTokenToLocalStorage(data.token)
      history.push('/cheeses')

    } catch (err) {
      console.log(err)
    }
  }
  return (
    
    <form onSubmit={submitHandle}>
      <div className="container mt-4">
        <h2>Wlecome Back, <span>🧀 </span> Lover </h2>
        <hr />
        <div className="row mt-4">
          <div className="col-12 col-md-3">
            <label className="form-label" htmlFor="email">Email</label>
            <input type="email" className="form-control" placeholder="Your Email" name="email" onInput={changeHandle}/>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-md-3">
            <label className="form-label" htmlFor="password">Password</label>
            <input type="password" className="form-control" placeholder="Your password" name="password" onInput={changeHandle}/>
          </div>
        </div>
        <button className="btn btn-lg btn-dark mt-4">Login</button>
      </div>
    </form>
    
  )
}
export default Login