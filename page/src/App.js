import React from 'react'
import Home from './Home'
import SignIn from './SignIn'
import SignUp  from './SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/SignUp" element={<SignUp/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App