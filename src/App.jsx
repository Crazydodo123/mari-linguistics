import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import logo from './assets/logo.png'
import Info from './routes/info'
import SignUp from './routes/SignUp'
import Roadmap from './routes/Roadmap'



function App() {

  return (
    <Router>
      <header>
        <nav id="navbar">
          <Link to="/"><img src={logo} id="logo" /></Link>
          <ul className="links">
            <Link className="navlink" to="/roadmap">Roadmap</Link>
            <li><a className="navlink" href="#projects">About Me</a></li>
            <li><a className="navlink" href="#about-me">More</a></li>
          </ul>
          <Link to="/sign-up">
            <button className="sign-up">Sign Up!</button>
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path='/roadmap' element={<Roadmap />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path="/" element={<Info />} /> 
      </Routes>
    </Router>
  )
}

export default App
