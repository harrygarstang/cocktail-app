import './App.css';
import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/Pages/Home';
import Footer from "./components/Footer"
import Wrapper from './components/Wrapper';
import Directory from './components/Pages/Directory'
import Locator from './components/Pages/Locator'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="directory" element={<Directory/>} />
            <Route path="locator" element={<Locator/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;