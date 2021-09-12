import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="links">
        <a href="#about">
          <div>About</div>
        </a>
        <a href="#skills">
          <div>Skills</div>
        </a>
        <a href="#projects">
          <div>Projects</div>
        </a>
        <a
          href="https://docs.google.com/document/d/19YrSdzT4z4QfvvIy2zYHWAL_N_Aq5svAFXYK_cwLcX0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>Resume</div>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
