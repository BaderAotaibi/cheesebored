import React from 'react' 


const Register = () => {
  return (
    
    <form>
      <div className="container mt-4">
        <h2>Hello, <span>🧀 </span> Lover </h2>
        <p>please fill the form below to regiter</p>
        <hr />
        <div className="row mt-4">
          <div className="col-12 col-md-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Your Email"/>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-md-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Your password"/>
          </div>
        </div>
        <button className="btn btn-lg btn-dark mt-4">Register</button>
      </div>
    </form>
    
  )
}
export default Register