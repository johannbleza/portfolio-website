import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
    </>
  )
}

export default App