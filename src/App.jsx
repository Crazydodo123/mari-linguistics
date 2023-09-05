import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import logo from './assets/logo.png'
import small_logo from './assets/small_logo.png'
import Info from './routes/info'
import SignUp from './routes/SignUp'
import Roadmap from './routes/Roadmap'
import Socials from './routes/Socials'
import Contest from './routes/Contest'

function App() {

  return (
    <Router>
      <header>
        <nav id="navbar">
          <Link to="/"><img src={logo} id="logo" className="big_logo" /></Link>
          <Link to="/"><img src={small_logo} id="logo" className="small_logo" /></Link>
          <ul className="links">
            <Link className="navlink" to="/roadmap">Roadmap</Link>
            <Link className="navlink" to="/socials">Social Media</Link>
            <Link className="navlink" to="/contest">Contest</Link>
          </ul>
          <Link to="/sign-up" id='nav-button'>
            <button className="sign-up">Sign Up!</button>
          </Link>
        </nav>
      </header>
      
      <Routes>
        <Route path='/roadmap' element={<Roadmap />} />
        <Route path='/socials' element={<Socials />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/contest' element={<Contest />} />
        <Route path="/" element={<Info />} /> 
      </Routes>
    </Router>
  )
}

export default App
