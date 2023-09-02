//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');//tells wether dark mode is enabled or not
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setTextStyle({
        color:'white'
      })
      setText1('Enable Light Mode')
      document.body.style.backgroundColor='grey';
      document.body.style.color='white';
    }
    else{
      setMode('light');
      setTextStyle({
        color:'black'
      })
      setText1('Enable Dark Mode')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }
  const [textStyle,setTextStyle]=useState({
    color:'black'
  });
  const [text1,setText1]=useState('Enable Dark Mode');
  return (
    <>
      <Navbar title="TextUtilis" mode={mode} toggleMode={toggleMode} textStyle={textStyle} text1={text1} />
      <Router>
        <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm />
          </Route>
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
