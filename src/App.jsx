import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SchoolProjects from './pages/SchoolProjects'
import PersonalProjects from './pages/PersonalProjects'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/school" element={<SchoolProjects />} />
          <Route path="/personal" element={<PersonalProjects />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
