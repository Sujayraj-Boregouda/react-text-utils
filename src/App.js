import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = ()=> {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = 'TextUpdater - Dark Mode';

      setInterval(() => {
        document.title = 'TextUpdater is Amazing Tool';
      }, 2000);

      setInterval(() => {
        document.title = '  Install TextUpdater Now';
      }, 1500);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "primary");
      document.title = 'TextUpdater - Light Mode';
    }
  }

  return (
    <> 
    {/* <Router>    
    <Navbar title="TextUpdater" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
        
    <div className="container">    
   
      <Routes>        
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text To Process" mode={mode}/>} />
          <Route path="/about" element={<About />} />
      </Routes>
    </div>    
    </Router> */}
    <Navbar title="TextUpdater" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container">    
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below"/>
    </div>
    </>
  );
}

export default App;
