import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <header className="header">
        <div className="logos">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <h2>Hello, I am <span className="highlight">Ritesh Mishra</span> 👋</h2>
        <p className="subtext">Kya ye dikh raha hai?</p>
      </header>

      <main className="main-content">
        <button className="btn" onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </main>

      <footer className="footer">
        <p>Click on the Vite and React logos to learn more</p>
      </footer>
    </div>
  )
}

export default App
