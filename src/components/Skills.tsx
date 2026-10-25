/** Skill groups that actually list something; empty groups are hidden. */
export function nonEmptyGroups(groups: Record<string, string[]>) {
  return Object.entries(groups).filter(([, items]) => items.length > 0);
}

export function Skills({ groups }: { groups: Record<string, string[]> }) {
  return (
    <dl className="skills">
      {nonEmptyGroups(groups).map(([group, items]) => (
        <div key={group} className="skill-row">
          <dt>{group}</dt>
          <dd>{items.join(", ")}</dd>
        </div>
      ))}
    </dl>
  );
}
