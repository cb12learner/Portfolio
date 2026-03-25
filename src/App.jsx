import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import InternProjects from './pages/InternProjects'
import SchoolProjects from './pages/SchoolProjects'
import PersonalProjects from './pages/PersonalProjects'
import About from './pages/About'
import LettersOfRec from './pages/LettersOfRec'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intern" element={<InternProjects />} />
          <Route path="/school" element={<SchoolProjects />} />
          <Route path="/personal" element={<PersonalProjects />} />
          <Route path="/about" element={<About />} />
          <Route path="/letters" element={<LettersOfRec />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
