//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
/*
import {
  BrowserRouter as Router,
  Routes,
  Route,                                      ********This if to understand routing and not used to deploy **********
  
} from "react-router-dom";

*/
function App() {
  const[mode, setMode]= useState('light');
  const[alert, setAlert]= useState(null);

  const showAlert = (message,type) => {
     setAlert({
      msg: message,
      type: type
     })
     
     setTimeout(()=>(
      setAlert(null)
     ),2000);
  }



  const toggleMode = () =>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor = '#042743'
    showAlert("Dark mode has been activated", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been activated", "success")

    }
  }
  return (
   <> 
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <TextForm heading="Enter text" ShowAlert={showAlert} mode={mode}/>
  </div>

  {/*<Navbar title="TextUtils" aboutText="About textUtils" /> */}
{/*
  <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">

  <Routes>
  <Route path="/about" element={<About />} />
  <Route path="/" element={<TextForm heading="Enter text" ShowAlert={showAlert}/>} />
  </Routes>   
          

  </div>
  </Router>
  */}
   </>
  );
}

export default App;
