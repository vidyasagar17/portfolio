import type { Job } from "../types";
import { Tags } from "./Tags";

export function Experience({ jobs }: { jobs: Job[] }) {
  return (
    <ol className="timeline">
      {jobs.map((j) => (
        <li key={`${j.company}-${j.period}`} className="job">
          <p className="job-when">
            {j.period}
            {j.location && <span className="job-where">{j.location}</span>}
          </p>
          <div>
            <h3 className="job-role">{j.role}</h3>
            <p className="job-company">{j.company}</p>
            {j.points.length > 0 && (
              <ul className="job-points">
                {j.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            )}
            <Tags items={j.tech} label="Technologies" />
          </div>
        </li>
      ))}
    </ol>
  );
}
