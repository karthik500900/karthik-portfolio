import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
  <h2 className="logo">Karthik</h2>
  <div className="badges">
  <span>🚀 Open to Internships</span>
  <span>🧠 AI Projects Live</span>
  <span>💼 Startup Ready</span>
</div>

  <ul className="nav-links">
    <li><a href="#projects">Projects</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
      <section className="section" id="projects">
        <h1>Karthik Reddy Narapureddy</h1>
    <h2>Full Stack Developer | Web & App | AI Enthusiast</h2>
        <p>

  I build <b>scalable web applications</b> and <b>AI-powered products</b>
  that solve real-world problems.
  <br />
  Experienced in <b>React, Node.js, Python, Deep Learning</b>.
  <br />
  Actively building <b>live AI projects</b> and preparing for
  startup & tech roles.
</p>
        <div className="projects-buttons">
  <a href="#contact" className="btn">Contact Me</a>

  <a
  href="/karthik_Reddy_Resume.pdf"
  download className="btn">
  Download Resume
</a>
  </div>
      </section>

      <section className="section" id="hero-projects">
        <h3>Projects</h3>

        <div className="card">
  <h4>AI-Powered Retinal Disease Detection</h4>
  <p className="status">🟢 Live & Running</p>

  <p>
  AI-powered retinal disease detection system using CNNs.
  Supports real-time image upload and prediction via a live web interface.
  Designed for medical screening assistance and AI-driven diagnosis support.
  </p>
  <section className="section" id="about">
  <h3>About Me</h3>
  <p>
    I’m <b>Karthik Reddy Narapureddy</b>, a passionate Full Stack Developer and AI enthusiast
    focused on building scalable, real-world solutions.
    I enjoy turning complex problems into simple, elegant products using modern technologies.
  </p>

  <p>
    My journey includes hands-on experience with <b>web development, AI/ML models,
    and deploying live applications</b>.
    I actively work on startup-oriented projects and continuously improve my skills
    to stay industry-ready.
  </p>
</section>

  <div className="project-links">
    <a
      href="https://github.com/karthik500900/AI-BASED-RETINAL-DISEASE-DETECTION-USING-DEEP-LEARNING"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline"
    >
      GitHub
    </a>

    <a
      href="https://huggingface.co/spaces/narapureddykarthi/ai-retinal-disease-detection"
      target="_blank"
      rel="noopener noreferrer"
      className="btn live-btn"
    >
      Live Demo
    </a>
  </div>
</div>
<section className="section" id="experience">
  <h3>Experience</h3>

  <div className="card">
    <h4>Full Stack Developer Intern</h4>
    <p className="company">
      CodeXOHO · Internship
    </p>
    <p className="duration">
      Present
    </p>

    <ul className="experience-list">
      <li>Built and maintained full-stack web applications using React and Node.js</li>
      <li>Worked on backend APIs, database integration, and authentication</li>
      <li>Collaborated with team members to deliver production-ready features</li>
      <li>Applied AI concepts and modern development practices in real projects</li>
      <li>Gained hands-on experience with real-world startup workflows</li>
    </ul>
  </div>
</section>
<section className="section" id="contact">


  <section className="section" id="skills">
  <h3>Skills</h3>

  <ul className="skills-list">
    <li><b>Frontend:</b> React, HTML, CSS, JavaScript</li>
    <li><b>Backend:</b> Node.js, Express, Flask</li>
    <li><b>AI / ML:</b> CNNs, Deep Learning, Image Classification</li>
    <li><b>Languages:</b> Python, Java, JavaScript</li>
    <li><b>Tools:</b> Git, GitHub, Hugging Face, Render</li>
    <li><b>Deployment:</b> Hugging Face Spaces, Static Hosting</li>
  </ul>
</section>
<section className="section" id="education">
  <h3>Education</h3>

  <div className="card">
    <h4>Bachelor of Engineering (Computer Science)</h4>
    <p>
      AMC Engineering College<br />
      2021 – 2025
    </p>
  </div>
</section>
    

</section>



        <div className="card">
          <h4>Stock Portfolio Management</h4>
          <p className="status">🟢 Live & Running</p>
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
  <section className="section">
  <h3>what i do</h3>
  <p>✔ Build responsive and modern web applications</p>
  <p>✔ Develop AI-powered solutions using deep learning</p>
  <p>✔ Deploy live applications and demos</p>
  <p>✔ Work on startup-oriented, problem-solving projects</p>
</section>
  <p>Email: narapureddykarthi@gmail.com</p>
  <p>LinkedIn: 
    <a href="https://www.linkedin.com/in/karthik-kumar-reddy-narapureddy-95978325a"
       target="_blank"
       rel="noopener noreferrer">
       View Profile
    </a>
  </p>
</section>
<footer className="footer">
  <p>© 2025 Karthik Reddy Narapureddy. All rights reserved.</p>
</footer>
    </div>
  );
}

export default App;