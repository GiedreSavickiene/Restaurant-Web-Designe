import React from 'react'
import './App.css';
import About from './components/About';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import Prices from './components/Prices';
import Shop from './components/Shop';


const App = () => {
  return (
    <div>

      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices />
      <Footer />

    </div>
  )
}

export default App
