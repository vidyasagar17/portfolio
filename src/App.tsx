import type { ReactNode } from "react";
import { portfolio as d } from "./data/portfolio";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills, nonEmptyGroups } from "./components/Skills";
import { Education } from "./components/Education";
import { ContactLinks, hasContactLinks } from "./components/ContactLinks";

// Each section's content is null when its data is empty; those sections are
// left out of both the page and the nav.
const sections: { id: string; title: string; content: ReactNode }[] = [
  {
    id: "about",
    title: "About",
    content: d.about.length > 0 && (
      <div className="prose">{d.about.map((p) => <p key={p}>{p}</p>)}</div>
    ),
  },
  {
    id: "experience",
    title: "Experience",
    content: d.experience.length > 0 && <Experience jobs={d.experience} />,
  },
  {
    id: "projects",
    title: "Projects",
    content: d.projects.length > 0 && <Projects projects={d.projects} />,
  },
  {
    id: "skills",
    title: "Skills",
    content: nonEmptyGroups(d.skills).length > 0 && <Skills groups={d.skills} />,
  },
  {
    id: "education",
    title: "Education",
    content: d.education.length + d.certifications.length > 0 && (
      <Education education={d.education} certifications={d.certifications} />
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: hasContactLinks(d.links, d.resume) && (
      <>
        {d.contactNote && <p className="contact-lead">{d.contactNote}</p>}
        {d.links.email && (
          <a className="contact-email" href={`mailto:${d.links.email}`}>{d.links.email}</a>
        )}
        <ContactLinks links={d.links} resume={d.resume} showEmail={false} />
      </>
    ),
  },
].filter((s) => s.content);

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header name={d.name} nav={sections.map(({ id, title }) => ({ id, label: title }))} />

      <main id="main" tabIndex={-1}>
        <div id="top" />
        <Hero data={d} />
        {sections.map((s) => (
          <Section key={s.id} id={s.id} title={s.title}>{s.content}</Section>
        ))}
      </main>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} {d.name}. Built with React and Vite.</p>
      </footer>
    </>
  );
}
