import './App.css'


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Creator from './pages/Creator';
import Classroom from './pages/Classroom';
import StudentPage from './pages/StudentPage';
import EditPage from './pages/EditPage';

import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path="/students/:id" element={<StudentPage />} />
        <Route path="/students/edit/:id" element={<EditPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
