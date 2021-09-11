import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
        <div className="name">Gene Baybay</div>
        <div className="title">
          Software Engineer || Junior Developer || Web Developer
        </div>
      </header>
      <div className="about">
        <div className="about-title">About Me</div>
        <div className="about-summary">
          Based in New York, passionate and hard-working junior developer eager
          to sharpen my coding skills through practice. A quick learner that's
          open to new challenges, excited about problem solving abstract issues
          and looking to provide value to a team of developers.
        </div>
      </div>
      <div className="skills-section">
        <div className="skills-title">Skills</div>
        <div className="skills-container">
          <div className="each-skill">
            <img
              class="skills"
              src="https://imgur.com/s8wa8hC.png"
              alt="HTML"
            />
            <div>HTML</div>
          </div>
          <div className="each-skill">
            <img class="skills" src="https://imgur.com/bwnJcD8.png" alt="CSS" />
            <div>CSS</div>
          </div>
          <div className="each-skill">
            <img
              class="skills"
              src="https://imgur.com/eD8LRpf.png"
              alt="JavaScript"
            />
            <div>Javascript</div>
          </div>
          <div className="each-skill">
            <img
              class="skills"
              src="https://imgur.com/DPdCHkk.png"
              alt="React.js"
            />
            <div>React</div>
          </div>
          <div className="each-skill">
            <img
              class="skills"
              src="https://imgur.com/PpW0fLL.png"
              alt="Node.js"
            />
            <div>Node JS</div>
          </div>
          <div className="each-skill">
            <img
              class="skills"
              src="https://imgur.com/dHxWvof.png"
              alt="Express.js"
            />
            <div>Express</div>
          </div>
          <div className="each-skill">
            <img
              class="skills"
              src="https://imgur.com/xlmAQYr.png"
              alt="mongoDB"
            />
            <div>MongoDB</div>
          </div>
          <div className="each-skill">
            <img class="skills" src="https://imgur.com/XQQlqqf.png" alt="SQL" />
            <div>SQL</div>
          </div>
          <div className="each-skill">
            <img
              class="skills"
              src="https://imgur.com/M5EcPdg.png"
              alt="Ruby"
            />
            <div>Ruby</div>
          </div>
          <div className="each-skill">
            <img
              class="skills"
              src="https://imgur.com/0kCTZWS.png"
              alt="Ruby on Rails"
            />
            <div>Rails</div>
          </div>
          <div className="each-skill">
            <img
              class="skills"
              src="https://imgur.com/Pp0Qdew.png"
              alt="postgresql"
            />
            <div>PostgreSQL</div>
          </div>
          <div className="each-skill">
            <img class="skills" src="https://imgur.com/vXPRpPG.png" alt="git" />
            <div>Git</div>
          </div>
        </div>
      </div>
      <div>Projects</div>
      <div className="projects-container">
        <div className="project-card">
          <img src="https://i.imgur.com/z2qPzWT.png" alt="project4" />
          <div>text</div>
          <button>View Site</button>
          <button>Github</button>
        </div>
        <div className="project-card">
          <img src="https://i.imgur.com/e68Iha4.png" alt="project3" />
          <div>text</div>
          <button>View Site</button>
          <button>Github</button>
        </div>
        <div className="project-card">
          <img src="https://i.imgur.com/4PCwuOR.png" alt="project2" />
          <div>text</div>
          <button>View Site</button>
          <button>Github</button>
        </div>
        <div className="project-card">
          <img src="https://i.imgur.com/rwg2z0G.png" alt="project1" />
          <div>text</div>
          <button>View Site</button>
          <button>Github</button>
        </div>
      </div>
    </div>
  );
}

export default App;
