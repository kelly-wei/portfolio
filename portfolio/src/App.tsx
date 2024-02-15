import React from 'react';
import './styles/App.css';
import logo from "./private/logo.png";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} style={{width:"8vw"}}></img>
        <HomePage></HomePage>
        {/* <BrowserRouter>
          <Routes>
            <Route index element={<HomePage></HomePage>}></Route>
          </Routes>
        </BrowserRouter> */}
      </header>
    </div>
  );
}

export default App;
