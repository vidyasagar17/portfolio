import type { Portfolio } from "../types";
import { ContactLinks } from "./ContactLinks";
import { ExtractionDemo } from "./ExtractionDemo";

export function Hero({ data }: { data: Portfolio }) {
  const roleLine = [data.role, data.location && `based in ${data.location}`].filter(Boolean).join(", ");

  return (
    <section className="hero container" aria-labelledby="hero-name">
      <div className="hero-intro">
        <h1 id="hero-name">{data.name}</h1>
        {roleLine && <p className="hero-role">{roleLine}</p>}
        {data.tagline && <p className="hero-tagline">{data.tagline}</p>}
        <ContactLinks links={data.links} resume={data.resume} />
      </div>
      {data.hero.source && data.hero.fields.length > 0 && (
        <ExtractionDemo source={data.hero.source} fields={data.hero.fields} />
      )}
    </section>
  );
}
