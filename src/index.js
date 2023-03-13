import React from 'react';
import ReactDOM from 'react-dom/client';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignIn/SignUp';
import App from './App';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  <Router>
    <Routes>
        
        
          <Route exact path='/netflixclone' element={<SignIn />} />
          <Route exact path='/netflixclone/signup' element={<SignUp />} />
          <Route exact path='/netflixclone/watch' element={<App />} />
    </Routes>
  
  </Router>
    
  </React.StrictMode>
);



