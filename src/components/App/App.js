import './App.css'
import Header from '../Header/header.tsx'
import Footer from "../Footer/Footer.tsx"
import FootballTeam from '../FootballTeam/FootballTeam.tsx'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Header />
      <FootballTeam />

      <Footer />

    </div>
  )
}

export default App
