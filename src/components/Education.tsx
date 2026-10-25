import type { Certification, Education as EducationItem } from "../types";
import { ExternalLink } from "./ExternalLink";

interface Props {
  education: EducationItem[];
  certifications: Certification[];
}

export function Education({ education, certifications }: Props) {
  return (
    <ul className="edu">
      {education.map((e) => (
        <li key={`${e.degree}-${e.school}`} className="edu-item">
          <div>
            <h3>{e.degree}</h3>
            <p>{e.school}{e.detail && `, ${e.detail}`}</p>
          </div>
          {e.period && <p className="edu-when">{e.period}</p>}
        </li>
      ))}
      {certifications.map((c) => (
        <li key={c.name} className="edu-item">
          <div>
            <h3>{c.link ? <ExternalLink href={c.link}>{c.name}</ExternalLink> : c.name}</h3>
            {c.issuer && <p>{c.issuer}</p>}
          </div>
          {c.year && <p className="edu-when">{c.year}</p>}
        </li>
      ))}
    </ul>
  );
}
