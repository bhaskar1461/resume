import React from 'react';
import './ResumePage.css';
import { resumeData } from '../data/resumeData';

const ResumePage: React.FC = () => {
  const { name, headline, summary, focusAreas, contact, skillGroups, highlights, project } =
    resumeData;

  return (
    <main className="resume-page">
      <article className="resume-sheet">
        <header className="resume-header">
          <div className="resume-header-copy">
            <p className="resume-kicker">Professional Resume</p>
            <h1>{name}</h1>
            <p className="resume-headline">{headline}</p>
            <p className="resume-summary">{summary}</p>
          </div>
          <div className="resume-actions no-print">
            <button type="button" className="primary-action" onClick={() => window.print()}>
              Download PDF
            </button>
            <a className="secondary-action" href={contact.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              className="secondary-action"
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </header>

        <ul className="contact-list" aria-label="Contact information">
          <li>
            <span>Email</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            <span>GitHub</span>
            <a href={contact.github} target="_blank" rel="noreferrer">
              github.com/bhaskar1461
            </a>
          </li>
          <li>
            <span>LinkedIn</span>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/bhaskar-sharma-7901152ba
            </a>
          </li>
        </ul>

        <section className="resume-section">
          <h2>Career Focus</h2>
          <div className="tag-list" aria-label="Target focus areas">
            {focusAreas.map((area) => (
              <span key={area} className="tag">
                {area}
              </span>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <div className="section-heading">
            <h2>Technical Skills</h2>
            <p>Keywords aligned for software engineering, backend, and data roles.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <section key={group.title} className="skill-card" aria-label={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items.join(' • ')}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <div className="section-heading">
            <h2>Selected Project</h2>
            <p>{project.tagline}</p>
          </div>
          <div className="project-card">
            <div className="project-header">
              <h3>{project.name}</h3>
              <p>{project.stack.join(' • ')}</p>
            </div>
            <ul className="bullet-list">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <div className="section-heading">
            <h2>Additional Highlights</h2>
            <p>Backend, API, deployment, and data-oriented strengths.</p>
          </div>
          <ul className="bullet-list">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
};

export default ResumePage;
