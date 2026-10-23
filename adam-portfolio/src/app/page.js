const projects = [
  {
    number: "01",
    name: "High-risk rugby tackle recognition",
    summary:
      "A computer vision pipeline that analyses match footage and classifies tackle risk to support player safety.",
    accent: "#d5fb78",
    tags: ["Computer vision", "Pose estimation", "Python", "TensorFlow"],
    repository:
      "https://github.com/gibbsy619/AN-OPTIMISED-END-TO-END-SYSTEM-TO-IDENTIFY-HIGH-RISK-RUGBY-TACKLES",
    sections: [
      {
        heading: "How it works",
        text:
          "The system combines player and pose detection, tackle detection, and tackle-risk classification. Match footage was used to train and evaluate the models, with custom tracking logic to keep player identities consistent across frames.",
      },
      {
        heading: "Evaluation and limitations",
        text:
          "The project reported 71.56% overall system accuracy, 50% accuracy for high-risk tackles, and 78% for non-dangerous tackles. Ball detection and variation in camera angle remain challenges; real-time use would need further latency work.",
      },
    ],
  },
  {
    number: "02",
    name: "NRL analytics platform",
    summary:
      "An interactive way to explore rugby league match, team, and player performance across a season.",
    accent: "#91e4d2",
    tags: ["SQL", "React", "JavaScript", "Node.js", "Express"],
    repository: "https://github.com/adamgibb/NRL-analytics-platform",
    sections: [
      {
        heading: "Data to insight",
        text:
          "SQL queries collect and aggregate match statistics, scores, player performance, and team metrics. The platform presents season-level trends through interactive dashboards built with React and JavaScript, with Node.js and Express handling the API.",
      },
      {
        heading: "Areas to develop",
        text:
          "The project highlights historical data quality and scaling as key considerations. Live data integration is a possible next step.",
      },
    ],
  },
  {
    number: "03",
    name: "Golf round tracking app",
    summary:
      "A golf scorekeeping concept that pairs hole-by-hole scoring with GPS tracking and round visualisation.",
    accent: "#a7baff",
    tags: ["React", "JavaScript", "GPS", "Node.js", "Express"],
    repository: "https://github.com/gibbsy619/Golf-Strava",
    sections: [
      {
        heading: "Round experience",
        text:
          "The app is designed to record scores for each hole and map a golfer’s movement during a round. Interactive maps and scorecards help make the round easier to review.",
      },
      {
        heading: "Current scope",
        text:
          "Round data is stored in a JSON file. GPS accuracy, battery use, and an easy-to-use on-course experience are central design challenges; cloud storage is a potential future improvement.",
      },
    ],
  },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/adamgibb",
    label: "Browse my GitHub profile",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adam-gilbert-449090231/",
    label: "Connect with me on LinkedIn",
  },
];

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Adam Gilbert, home">
          <span className="brand-mark" aria-hidden="true">
            AG
          </span>
          <span>Adam Gilbert</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Portfolio <span className="eyebrow-divider">/</span> Selected work
            </p>
            <h1 id="hero-title">
              I build software that makes <span>complex ideas useful.</span>
            </h1>
            <p className="hero-intro">
              I’m Adam, an AI and software developer interested in computer
              vision, sports analytics, and thoughtful digital products.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="#contact">
                Get in touch <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="focus-card" id="about" aria-labelledby="focus-title">
            <div className="avatar" aria-hidden="true">
              AG
            </div>
            <p className="focus-label" id="focus-title">
              Areas I work in
            </p>
            <ul>
              <li>Applied AI &amp; computer vision</li>
              <li>Data products &amp; sports analytics</li>
              <li>Full-stack application development</li>
            </ul>
            <p className="focus-note">
              From an early idea through to a working product.
            </p>
          </aside>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A selection of projects</p>
              <h2 id="projects-title">Selected work</h2>
            </div>
            <span className="project-count">01 — 03</span>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.number}
                style={{ "--project-accent": project.accent }}
              >
                <div className="project-card-topline">
                  <span className="project-number">{project.number}</span>
                  <span className="project-indicator" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <h3>{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
                <ul className="tag-list" aria-label={`${project.name} technologies`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <details className="project-details">
                  <summary>Read project notes</summary>
                  <div className="project-notes">
                    {project.sections.map((section) => (
                      <section key={section.heading}>
                        <h4>{section.heading}</h4>
                        <p>{section.text}</p>
                      </section>
                    ))}
                  </div>
                </details>

                <a
                  className="repository-link"
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} source on GitHub`}
                >
                  View source on GitHub <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div>
          <p className="eyebrow">Have a project in mind?</p>
          <h2>Let’s make something useful.</h2>
        </div>
        <div className="footer-links">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
              <span>{link.name}</span>
              <span aria-hidden="true">↗</span>
              <span className="visually-hidden"> — {link.label}</span>
            </a>
          ))}
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Adam Gilbert
        </p>
      </footer>
    </div>
  );
}
