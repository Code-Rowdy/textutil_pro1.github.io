import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';

function App() {
  const[mode, setMode] = useState('light'); //Whether dark mode is enable or not
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg : message,
        type: type
      }) 
      setTimeout(() => {
        setAlert(null);
      }, 1500);                             
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#251259";
      showAlert("Dark mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }
  
  return (
    <>
  {/* <Navbar  title="TextUtils" about="About Us" aboutLink="https://www.youtube.com"/> */}
  <Navbar  title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <TextForm showAlert={showAlert} heading="Enter Your Text" mode={mode}/>
  {/* <About/> */}
   </div>
    </>
  );
}

export default App;

// router file exept for git diployment

// import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   Routes,
// //  Link
// } from "react-router-dom";

// import './App.css';
// import Alert from './components/Alert';
// import About from './components/About';
// import Navbar from './components/Navbar';

// import TextForm from './components/TextForm';

// function App() {
//   const[mode, setMode] = useState('light'); //Whether dark mode is enable or not
//   const[alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//       setAlert({
//         msg : message,
//         type: type
//       }) 
//       setTimeout(() => {
//         setAlert(null);
//       }, 1500);                             
//   }

//   const toggleMode = () => {
//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = "#251259";
//       showAlert("Dark mode has been enabled", "success");
//     }else{
//       setMode('light');
//       document.body.style.backgroundColor = "white";
//       showAlert("Light mode has been enabled", "success");
//     }
//   }
  
//   return (
//     <>
//   {/* <Navbar  title="TextUtils" about="About Us" aboutLink="https://www.youtube.com"/> */}
//   <Router>
//     <Navbar  title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
//     <Alert alert={alert}/>
//     <div className="container my-3">
//     <Routes>
//           <Route exact path="/about" element={<About />}/>
//           <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text" mode={mode}/>}>
//           </Route>      
//         </Routes>
//     </div>
//   </Router>
//     </>
//   );
// }

// export default App;
