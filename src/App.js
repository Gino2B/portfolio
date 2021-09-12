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
        <div className="contact-container">
          <a
            href="https://github.com/Gino2B"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/gene-baybay-80490520b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://i.imgur.com/jcrMqBV.png" alt="linkedin" />
          </a>
        </div>
      </header>
      <div className="about" id="about">
        <div className="about-title">About Me</div>
        <div className="about-summary">
          Based in New York, passionate and hard-working junior developer eager
          to sharpen my coding skills through practice. A quick learner that's
          open to new challenges, excited about problem solving abstract issues
          and looking to provide value to a team of developers.
        </div>
        <div className="fun-facts">
          <div className="about-cards">
            <img
              src="https://images.ctfassets.net/a4rx79jcl3n1/139uoz1HBz6PsWh8pEqOCK/eced155325ccb92acf76962ca5d688e5/gsw-logo-1920.png"
              alt="warriors-logo"
            ></img>
            <div>Sports Fan</div>
            <div>
              I love playing and watching sports! I am a die hard fan of Stephen
              Curry and the Golden State Warriors! My favorite football team is
              the Philadelphia Eagles
            </div>
          </div>
          <div className="about-cards">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1491/1491284.png"
              alt="introvert-icon"
            ></img>
            <div>Introvert till Extrovert</div>
            <div>
              I would call myself introverted to 99% of the people I meet. But
              with those I feel very comfortable around I can be extremely
              extroverted
            </div>
          </div>
          <div className="about-cards">
            <img
              src="https://www.freeiconspng.com/thumbs/animal-icon-png/animal-paw-vector-icon-animals-icons-icons-download-0.png"
              alt="warriors-logo"
            ></img>
            <div>Animal Lover</div>
            <div>
              Owner of 2 cats at the moment and had a wide variety of pets
              excluding dogs sadly, but I love animals in general!
            </div>
          </div>
        </div>
      </div>
      <div className="skills-section" id="skills">
        <div className="skills-title">Skills</div>
        <div className="skills-container">
          <div className="each-skill">
            <img
              className="skills"
              src="https://imgur.com/s8wa8hC.png"
              alt="HTML"
            />
            <div>HTML</div>
          </div>
          <div className="each-skill">
            <img
              className="skills"
              src="https://imgur.com/bwnJcD8.png"
              alt="CSS"
            />
            <div>CSS</div>
          </div>
          <div className="each-skill">
            <img
              className="skills"
              src="https://imgur.com/eD8LRpf.png"
              alt="JavaScript"
            />
            <div>Javascript</div>
          </div>
          <div className="each-skill">
            <img
              className="skills"
              src="https://imgur.com/DPdCHkk.png"
              alt="React.js"
            />
            <div>React</div>
          </div>
          <div className="each-skill">
            <img
              className="skills"
              src="https://imgur.com/PpW0fLL.png"
              alt="Node.js"
            />
            <div>Node JS</div>
          </div>
          <div className="each-skill">
            <img
              className="skills"
              src="https://imgur.com/dHxWvof.png"
              alt="Express.js"
            />
            <div>Express</div>
          </div>
          <div className="each-skill">
            <img
              className="skills"
              src="https://imgur.com/xlmAQYr.png"
              alt="mongoDB"
            />
            <div>MongoDB</div>
          </div>
          <div className="each-skill">
            <img
              className="skills"
              src="https://imgur.com/XQQlqqf.png"
              alt="SQL"
            />
            <div>SQL</div>
          </div>
          <div className="each-skill">
            <img
              className="skills"
              src="https://imgur.com/M5EcPdg.png"
              alt="Ruby"
            />
            <div>Ruby</div>
          </div>
          <div className="each-skill">
            <img
              className="skills"
              src="https://imgur.com/0kCTZWS.png"
              alt="Ruby on Rails"
            />
            <div>Rails</div>
          </div>
          <div className="each-skill">
            <img
              className="skills"
              src="https://imgur.com/Pp0Qdew.png"
              alt="postgresql"
            />
            <div>PostgreSQL</div>
          </div>
          <div className="each-skill">
            <img
              className="skills"
              src="https://imgur.com/vXPRpPG.png"
              alt="git"
            />
            <div>Git</div>
          </div>
        </div>
      </div>
      <div className="projects-section" id="projects">
        <div className="projects-title">Projects</div>
        <div className="projects-container">
          <div className="project-card">
            <img src="https://i.imgur.com/z2qPzWT.png" alt="project4" />
            <div className="project-info">
              <div className="project-summary">
                A fullstack site based around NBA players and their best
                moments! Users are able find a player and look at their info and
                some of their best highlights/moments! Users can signup/login to
                keep track of their favorite players and compare your favorites
                with some of your friends!
              </div>
              <div>Built with: Ruby on Rails, React</div>
              <div>
                <button>View Site</button>
                <button>Github</button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="https://i.imgur.com/e68Iha4.png" alt="project3" />
            <div className="project-info">
              <div>text</div>
              <div>
                <button>View Site</button>
                <button>Github</button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="https://i.imgur.com/4PCwuOR.png" alt="project2" />
            <div className="project-info">
              <div>text</div>
              <div>
                <button>View Site</button>
                <button>Github</button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="https://i.imgur.com/rwg2z0G.png" alt="project1" />
            <div className="project-info">
              <div>text</div>
              <div>
                <button>View Site</button>
                <button>Github</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
