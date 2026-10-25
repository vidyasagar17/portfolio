import type { Links } from "../types";
import { ExternalLink } from "./ExternalLink";

interface Props {
  links: Links;
  resume: string;
  /** The contact section shows the address as text, so it skips the button. */
  showEmail?: boolean;
}

export function hasContactLinks(links: Links, resume: string) {
  return Object.values(links).some(Boolean) || Boolean(resume);
}

/** The row of contact buttons, shared by the hero and the contact section. */
export function ContactLinks({ links, resume, showEmail = true }: Props) {
  const email = showEmail && links.email;
  const { linkedin, github, website } = links;
  if (!email && !linkedin && !github && !website && !resume) return null;

  return (
    <div className="actions">
      {email && <a className="btn btn-primary" href={`mailto:${email}`}>Email me</a>}
      <ExternalLink className="btn" href={linkedin}>LinkedIn</ExternalLink>
      <ExternalLink className="btn" href={github}>GitHub</ExternalLink>
      <ExternalLink className="btn" href={website}>Website</ExternalLink>
      <ExternalLink className="btn" href={resume && `${import.meta.env.BASE_URL}${resume}`}>Résumé</ExternalLink>
    </div>
  );
}
