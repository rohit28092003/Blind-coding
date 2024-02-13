import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Home from "./components/Home";
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
// import Error from './components/Error'
import PrivateRoute from './components/PrivateRoute'

import './style/App.scss'
import './style/Q1.scss'
import "./style/Header.scss"
import "./style/Timer.scss"
import './style/signup.css'




function App() {
  return (
    <>
    
    
  
    <Routes>
      <Route path="/" element={<Login/>}/>
      {/* <Route path="/signup" element={<Signup />} /> */}
      {/* <Route path="/login" element={<Login></Login>}></Route> */}
      <Route path="/ques1"
      element={
        <PrivateRoute>
          <Question1></Question1>
        </PrivateRoute>
      }
      >


      </Route>
      <Route path="/ques2" element={
        <PrivateRoute>
          <Question2></Question2>
        </PrivateRoute>
      }></Route>
      <Route path="/ques3" 
      element={
        <PrivateRoute>
          <Question3></Question3>
        </PrivateRoute>
      }
      >

      </Route>
      <Route path="/ques4" 
      element={
        <PrivateRoute>
          <Question4></Question4>
        </PrivateRoute>
      }>

      </Route>
   

    </Routes>
    </>

  );
}

export default App;
