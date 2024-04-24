import { useState } from 'react'
import bottleLogo from './assets/bottle.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img src={bottleLogo} className="logo react" alt="Bottle logo" />
        <h1>Eijgenraam.net</h1>
        <section className='menu'>
          <div>
            <p>MENU 1</p>
            <p>MENU 2</p>
          </div>
        </section>
      </header>
      <main className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          MAIN
        </p>
      </main>
    </>
  )
}

export default App
