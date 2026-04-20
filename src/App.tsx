import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Temporary from './pages/Temporary'
import Menu from './pages/Menu'
import V2 from './pages/v2'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Temporary />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/v2" element={<V2 />} />
      </Routes>
    </Router>
  )
}

export default App
