import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1 className="name">Karthik Reddy</h1>
      <p className="tagline">Full Stack Developer • AI Engineer • Startup Builder</p>

      <section>
        <h2>About Me</h2>
        <p>
          I am a passionate Full Stack Developer and AI Engineer focused on
          building scalable web applications, AI-powered products, and startup-ready systems.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>Frontend — React, HTML, CSS, JavaScript</li>
          <li>Backend — Node.js, Express, Flask</li>
          <li>AI / ML — Deep Learning, CNNs, Image Classification</li>
          <li>Tools — Git, GitHub, Vercel, Render</li>
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        <p>
          <b>Full Stack Developer Intern — CodeXOHO</b><br />
          Building full-stack applications, APIs, and startup-ready platforms.
        </p>
      </section>
      <section>
        <h2>Projects</h2>

        <div className="project">
          <h3>AI Eye Disease Detection</h3>
          <p>Deep Learning model that detects eye diseases from retinal images using CNNs.</p>
          <a href="https://eyemedicore.onrender.com/" target="_blank">Live Demo</a> |
          <a href="https://github.com/sanjays50/Eye-Disease-Classigication-and-Detection" target="_blank">GitHub</a>
        </div>

        <div className="project">
          <h3>Plant Disease Detection</h3>
          <p>AI system that detects plant diseases from leaf images.</p>
          <a href="https://github.com/karthik500900/plant-disease-detection" target="_blank">GitHub</a>
        </div>

        <div className="project">
          <h3>Personal Portfolio</h3>
          <p>React + Vite powered personal portfolio website.</p>
          <a href="https://karthik-portfolio-lime.vercel.app" target="_blank">Live</a>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: narapureddykarthi@gmail.com</p>

        <p>
          GitHub:{" "}
          <a href="https://github.com/karthik500900" target="_blank">
            karthik500900
          </a>
        </p>

        <p>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/" target="_blank">
            View Profile
          </a>
        </p>
      </section>

    </div>
  );
}