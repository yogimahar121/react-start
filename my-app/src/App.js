// import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// let god = "the feeling of god"
function App() {
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)
  const showAlert =(msg,type)=>{
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  // const toggleMode =()=>{
  //   if(mode === 'light'){
  //     setMode('dark')
  //     document.body.style.background = '#112b65'
  //     showAlert('dark mode is enabled','success')
  //   }
  //   else {
  //     setMode('light')
  //     document.body.style.background = 'white'
  //     showAlert('light mode is enabled','success')
  //   }
  // }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background = '#112b65'
      showAlert('dark mode is enabled','success')
    }
    else {
      setMode('light')
      document.body.style.background = 'white'
      showAlert('light mode is enabled','success')
    }
  }
  
  return (
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode} home="About"/>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
          <Route exact path="/About" element={  <About />}></Route>
          <Route exact path="/" element={<Textform showAlert={showAlert} mode={mode} heading="This is a heading"/>}></Route>
        
    </Routes>
    </div>
        </Router>
  
  
  
   
   
    {/* <Navbar/> */}
    {/* <div className="magic">this is a magical div</div> */}
    {/* <p>this is <b>{god}</b></p> */}
    

    </>
  );
}

export default App;
