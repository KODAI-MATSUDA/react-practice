import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Top from './routes/top'
import Search from './routes/search'
import Call from './routes/call'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="App">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Search Cocktail by Name</h1>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/search" element={<Search />} />
        <Route path="/call" element={<Call />} />
      </Routes>
      <div className="card">
      </div>
    </>
  )
}

export default App
