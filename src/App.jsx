import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Q1 from "./components/Q1";
import Home from "./components/Home";

import './style/App.scss'
import './style/Q1.scss'
import "./style/Header.scss"
import "./style/Timer.scss"
function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </Router>

  );
}

export default App;
