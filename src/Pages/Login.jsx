import React from 'react'
import {Link} from 'react-router-dom';
import "../Styles/Login.css";
const Login = () => {
  return (
    <div className='login'>

       <div className='welcomePage'>
         <h3>collabspase</h3>
         <p>Good Work, TOGHETHER</p>
         <span>
            Where bright ideas
            meet real-world
            impact.
         </span>
         <p>Bring universities and industry toghether to solve meaningful challenges
            one collaboration at a time.
         </p>
       </div>

       <div className='inputs'>
         <p>WELCOME BACK</p>
         <h2>Sign in to your workSpace</h2>
         <p>Pick a demo role to explore the collaboration platform.</p>

         <div className='link'>
             <Link to="/Student" >Student</Link>
             <Link to="/Professor" >Professor</Link>
             <Link to="/CompanyRepresentative" >Company Representative</Link>
             <Link to="/UniversityRepresentative" >University Representative</Link>
             <Link to="/Admin" >Admin</Link>
         </div>
       </div>


    </div>
  )
}

export default Login;