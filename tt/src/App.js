import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Documentation from './Documentation';
import OwnPage from './OwnPage';
import Places from './Places';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/OwnPage" element={<OwnPage/>} />
          <Route path="/Documentation" element={<Documentation/>} />
          <Route path="/Places" element={<Places/>} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>

  )
}

export default App