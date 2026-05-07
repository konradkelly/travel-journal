import './App.css'
import Header from "./Header.jsx"
import Entry from "./Entry.jsx"
import mountFuji from "./assets/mount fuji.jpg"
import { useState } from 'react'
import data from "./data.js"

function App() {
    const entryElements = data.map(entry => {
      return (
        <Entry 
          key={entry.id}
          img={entry.img}
          title={entry.title}
          country={entry.count}
          googleMapsLink={entry.yahooMaps}
          dates={entry.dates}
          text={entry.text}
        />
      )
    })

  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  )
}

export default App
