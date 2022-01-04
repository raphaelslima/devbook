import React from 'react'

//Importação CSS
import './style.css'

//Imortação de componentes
import Header from './Components/Header'

function Home() {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="navbar">Navbar</div>
        <div className="feed">Feed</div>
      </main>
    </div>
  )
}

export default Home
