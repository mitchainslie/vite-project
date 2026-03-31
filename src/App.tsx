import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Temporary from './pages/Temporary'
import Menu from './pages/Menu'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Temporary />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  )
}

export default App
