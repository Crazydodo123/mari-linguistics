import logo from './assets/logo.png'

function App() {

  return (
    <>
      <header>
        <nav id="navbar">
          <img src={logo} id="logo" />
          <ul>
            <li><a class="navlink" href="#welcome-section">Welcome</a></li>
            <li><a class="navlink" href="#projects">About Me</a></li>
            <li><a class="navlink" href="#about-me">More</a></li>
          </ul>
          <button id="sign-up">Sign Up!</button>
        </nav>
      </header>
      <main>
        <div id="official">
          The Official Linguistics Club at Marianopolis 
        </div>
      </main>
    </>
  )
}

export default App
