import logo from './assets/logo.png'
import linguists from './assets/linguists.jpg'
import thinking from './assets/thinking.jpg'

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
          <button className="sign-up">Sign Up!</button>
        </nav>
      </header>
      <main>
        <div id="title-container">
          <h1 id="title">The Official Linguistics Club at Marianopolis</h1>
        </div>
        <div id="about-us">
          <div class="left-elements">
            <h2 className="subtitle">About Us</h2>
            <p className="parag">
              The Marianopolis Linguistics Club is a vibrant community dedicated to understanding the fundamentals of language itself. Every two weeks during activity period, we explore the fascinating world of linguistics by solving engaging puzzles together, inviting experts in the field, and visiting important cultural locations. This club open to students of all levels, whether they are an amateur linguist or a language aficionado.
            </p>
            <p className="parag">
              We wish you a wonderful time at the Marianopolis Linguistics Club!
            </p>
          </div>
          <img src={linguists} id="about-image"/>
        </div>

        <div id="why-linguistics">
        <img src={thinking} id="why-image"/>
          <div className="left-elements">
            <h2 className="subtitle">Why Linguistics?</h2>
            <p className="parag">
              We get it. With huge amounts of homework every week, linguistics doesn't seem like the most exciting thing to spend your time on. 
            </p>
            <p className="parag">
              But wait, linguistics doesn't need to be boring! We plan our activities in such a way that you can learn without even thinking about it. Unlike other clubs, we don't rely on hour long lectures about topics that are frankly uninsipring and have no pratical applications. Instead, we challenge your critical thinking and train your pattern recognition abilities by giving you hand-picked linguistics problems. At the end of this semester, you will be prepared to participate in the <a href="https://nacloweb.org/" target='_blank'>NACLO</a>, the most prestigeous linguistics Olypiad in North America.
            </p>
            <p className="parag">
              And hey, there's free pizza during all our workshops. 
              <button className="sign-up" id="smaller-sign">Sign Up</button>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
