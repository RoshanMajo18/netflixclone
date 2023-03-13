import './SignIn.scss'
import { Route,Routes,useNavigate,Link } from 'react-router-dom';

import {app} from './firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
// import { login } from '../../constants/constants'
function SignIn(){
    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    let auth=getAuth(app)
    // const [data,setData]=useState({})
    // const handleEvent=(event)=>{
    //     let newInput={[event.target.name]:event.target.value}
    //     setData({...data,...newInput})
    // }
    const navigate = useNavigate()
  
    
    
  
    const handleSubmit=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then((response)=>{
            
            console.log(response);
           navigate('/netflixclone/watch')
        }
            
        )
        .catch((err)=>{console.log(err.message)})
    }

    return(
        
        
        <div className='login'>
            <div className='top'>
                <div className='wrapper'>
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
                
                </div>
            </div>
            <div className='container'>
            <form>
            <h1>Sign In</h1>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Email or phone number' />
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Password' />
            <button onClick={handleSubmit} className='loginButton'>Sign In</button>
            <span>
                {/* New to Netflix?<b onClick={()=>navigate('/netflixclone/signup')}>Sign up now</b> */}
                New to Netflix?<Link to='/netflixclone/signup'>Sign up now</Link>
            </span>
            <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.<b>Learn more</b>

            </small>
        </form>
        </div>
        </div>
        
        
        
    
    )
}
export default SignIn