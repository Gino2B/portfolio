import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="links">
        <a href="#about">
          <div className="click-link">About</div>
        </a>
        <a href="#skills">
          <div className="click-link">Skills</div>
        </a>
        <a href="#projects">
          <div className="click-link">Projects</div>
        </a>
        <a
          href="https://docs.google.com/document/d/19YrSdzT4z4QfvvIy2zYHWAL_N_Aq5svAFXYK_cwLcX0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="click-link">Resume</div>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
