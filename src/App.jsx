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

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:narapureddykarthi@gmail.com">narapureddykarthi@gmail.com</a></p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/karthik-kumar-reddy-narapureddy-95978325a/"
            target="_blank"
          >
            View Profile
          </a>
        </p>
      </section>
    </div>
  );
}