import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
          
   const {signInUser,setLoading} = useContext(AuthContext)

   const  navigate = useNavigate()

    const handleLogin = (e)=>{
        e.preventDefault()

        const name = e.target.name.value 

        const email = e.target.email.value 

        const password = e.target.password.value 

          // sign in user


          signInUser(email,password)
          .then(result=>{
           
            console.log('succesfully login',result.user)

            e.target.reset()
            navigate('/home')
              
          })
          .catch(error=>{
            console.log(error)
          })
      
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>If new register ? <Link to="/register">Register</Link></p>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;