import axios from 'axios'
import React, { useState } from 'react' 
import { useHistory } from 'react-router-dom'



const Register = () => {

  const history = useHistory()

  const [ registerData, setRegisterData ] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })
  const changeHandle = (e) =>{
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }
  const submitHandle = async (e) => {
    e.preventDefault()
    try {

      await axios.post('https://ga-cheesebored.herokuapp.com/register', registerData)
      history.push('/login')

    } catch (err) {
      console.log(err)
    }
    
  }
  return (
    
    <form onSubmit={submitHandle}>
      <div className="container mt-4">
        <h2>Hello, <span>🧀 </span> Lover </h2>
        <p>please fill the form below to regiter</p>
        <hr />
        <div className="row mt-4">
          <div className="col-12 col-md-3">
            <label className="form-label" htmlFor="username">User Name</label>
            <input type="text" className="form-control"  placeholder="User Name" name="username" value={registerData.username} onInput={changeHandle}/>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-md-3">
            <label className="form-label" htmlFor="email">Email</label>
            <input type="email" className="form-control"  placeholder="Your Email" name="email" value={registerData.email} onInput={changeHandle}/>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-md-3">
            <label className="form-label" htmlFor="password">password</label>
            <input type="password" className="form-control"  placeholder="Password" name="password" value={registerData.password} onInput={changeHandle}/>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-md-3">
            <label className="form-label" htmlFor="passwordConfirmation">Password</label>
            <input type="password" className="form-control" placeholder="Password Confirmation" name="passwordConfirmation" value={registerData.passwordConfirmation} onInput={changeHandle}/>
          </div>
        </div>
        <button className="btn btn-lg btn-dark mt-4">Register</button>
      </div>
    </form>
    
  )
}
export default Register