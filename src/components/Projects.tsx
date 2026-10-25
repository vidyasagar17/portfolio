import type { Project } from "../types";
import { ExternalLink } from "./ExternalLink";
import { Tags } from "./Tags";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <ul className="projects">
      {projects.map((p) => (
        <li key={p.title} className="project">
          <div className="project-head">
            <h3>{p.title}</h3>
            {p.context && <span className="project-context">{p.context}</span>}
          </div>
          <p className="project-desc">{p.description}</p>
          <Tags items={p.tech} label="Technologies" />
          {(p.link || p.repo) && (
            <p className="project-links">
              <ExternalLink href={p.link}>Live demo<span className="sr-only"> of {p.title}</span></ExternalLink>
              <ExternalLink href={p.repo}>Source code<span className="sr-only"> for {p.title}</span></ExternalLink>
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
