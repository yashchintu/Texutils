import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); //Wheather Dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enable", "success")
      document.title = 'TextUtils - Dark Mode'; //Iska matlab ki document tilte m dark mode dikhao jab dark mode on ho
      //Iska matlab h ki dark dark mode enable ho tab title par 2000 sec or 1500 m nicha diye gye title change hoke dikha
			setInterval(() => {
        document.title = 'TextUtils is Amazing Mode';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enable", "success")
      document.title = 'TextUtils - Light Mode'; //Iska matlab ki document tilte m light mode dikhao jab dark mode on ho
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>  */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils " mode={mode} toggleMode={toggleMode}/> {/* togglemode ek funtion h  ya props h*/}
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyaze below" mode={mode}/>
    {/* <About/> */}
    </div> 
    </>
  );
}

export default App;