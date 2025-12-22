import "./App.css";

function App() {
  return (
    <div className="app">
      <section className="hero">
        <h1>Karthik Reddy Narapureddy</h1>
    <h2>Full Stack Developer | Web & App | AI Enthusiast</h2>
        <p>
          I help startups and businesses build modern websites, scalable
          applications, and AI-powered solutions. Passionate about technology,
          marketing, and building my own startup.
        </p>
        <div className="hero-buttons">
  <a href="#contact" className="btn">Contact Me</a>

  <a
  href="/karthik_Reddy_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline"
>
  Download Resume
</a>
  </div>
      </section>

      <section className="section">
        <h3>Projects</h3>

        <div className="card">
  <h4>AI Eye Disease Detection</h4>
  <p>
    CNN-based system using deep learning with a Flask web application.
  </p>

  <div className="project-links">
    <a 
      href="https://github.com/karthik500900/AI-BASED-RETINAL-DISEASE-DETECTION-USING-DEEP-LEARNING.git"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
  </div>

  </div>

        <div className="card">
          <h4>Stock Portfolio Management</h4>
          <p>
            Java-based backend system for managing stock investments.
          </p>
        </div>

        <div className="card">
          <h4>Personal Portfolio Website</h4>
          <p>
            Modern portfolio built using React and Vite.
          </p>
        </div>
      </section>

      <section className="section" id="contact">
  <h3>Contact</h3>

  <p>
    📧 Email:
    <a href="mailto:narapureddykarthi@gmail.com">
      narapureddykarthi@gmail.com
    </a>
  </p>

  <p>
    🔗 LinkedIn:
    <a
      href="https://www.linkedin.com/in/karthik-kumar-reddy-narapureddy-95978325a/"
      target="_blank"
    >
      Karthik Reddy Narapureddy
    </a>
  </p>
</section>
    </div>
  );
}

export default App;