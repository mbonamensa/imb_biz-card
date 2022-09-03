import React from 'react'
import './App.css'
import cardImage from "./img/card-img.jpg";
import Info from './components/Info'
import About from './components/About'
import Interest from './components/Interest'
import Footer from './components/Footer'

function App() {
  return (
    <div className='app-container'>
      <main>
        <div>
          <img src={cardImage}/>
        </div>
        <section className='all-sections-container'>
        <Info />
        <About />
        <Interest />
        </section>
        <Footer />
      </main>
    </div> 
  )
}

export default App
