import type { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  children: ReactNode;
}

/** A page section: title in a narrow left rail, content in the main column. */
export function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container section-grid">
        <h2 id={`${id}-title`} className="section-title">{title}</h2>
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}
