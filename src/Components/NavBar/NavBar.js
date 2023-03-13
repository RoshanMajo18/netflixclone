import React from 'react'
import "./NavBar.css"
import SignIn from '../SignIn/SignUp';

import { Route,Routes,useNavigate,Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
function NavBar() {
  
  const navigate = useNavigate()
  const routeChange=()=>{
    
    navigate('/netflixclone')
  }
  return (
    <div className='navbar'>
    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
        
        <Button onClick={routeChange} className='button1' as="a" variant="danger">
          Sign In
        </Button>
        
        
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
    </div>
  )
}

export default NavBar