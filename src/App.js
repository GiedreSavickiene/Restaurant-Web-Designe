import React from 'react'
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Menu from './components/Menu';
import Shop from './components/Shop';


const App = () => {
  return (
    <div>

      <Header />
      <About />
      <Shop />
      <Menu />

    </div>
  )
}

export default App
