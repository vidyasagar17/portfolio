import { Fragment, useEffect, useMemo, useState } from "react";
import type { ExtractedField } from "../types";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const START_DELAY_MS = 700;
const STEP_MS = 520;

type Segment = { text: string } | { text: string; field: ExtractedField; index: number };

/**
 * Splits `source` into plain text and highlighted spans. Fields are matched
 * in order, each search starting after the previous match, so repeated
 * phrases resolve left to right. Fields whose span isn't found are dropped.
 */
function segment(source: string, fields: ExtractedField[]) {
  const segments: Segment[] = [];
  const found: ExtractedField[] = [];
  let cursor = 0;

  for (const field of fields) {
    const at = source.indexOf(field.span, cursor);
    if (at === -1) {
      if (import.meta.env.DEV) console.warn(`Hero span not found in source: "${field.span}"`);
      continue;
    }
    if (at > cursor) segments.push({ text: source.slice(cursor, at) });
    segments.push({ text: field.span, field, index: found.length });
    found.push(field);
    cursor = at + field.span.length;
  }
  if (cursor < source.length) segments.push({ text: source.slice(cursor) });

  return { segments, found };
}

const label = (key: string) => {
  const words = key.replace(/_/g, " ");
  return words.charAt(0).toUpperCase() + words.slice(1);
};

function formatValue(value: string | number | null) {
  if (value === null) return "";
  return typeof value === "number" ? value.toLocaleString("en-US") : value;
}

interface Props {
  source: string;
  fields: ExtractedField[];
}

/**
 * The hero's one animated moment: phrases in the bio are highlighted one by
 * one and each fills its field in a structured record. With reduced motion
 * the finished state renders immediately. Hovering either side links the pair.
 */
export function ExtractionDemo({ source, fields }: Props) {
  const reducedMotion = usePrefersReducedMotion();
  const { segments, found } = useMemo(() => segment(source, fields), [source, fields]);
  const [step, setStep] = useState(0);
  const [run, setRun] = useState(0);
  const [linked, setLinked] = useState<string | null>(null);

  // Restarting mid-run is safe: the cleanup cancels the pending timer.
  useEffect(() => {
    if (reducedMotion) {
      setStep(found.length);
      return;
    }
    setStep(0);
    let timer: number;
    const tick = (n: number) => {
      setStep(n);
      if (n < found.length) timer = window.setTimeout(() => tick(n + 1), STEP_MS);
    };
    timer = window.setTimeout(() => tick(1), START_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [reducedMotion, found.length, run]);

  const linkProps = (key: string) => ({
    onMouseEnter: () => setLinked(key),
    onMouseLeave: () => setLinked(null),
  });

  return (
    <div className="extract">
      <p className="extract-source">
        {segments.map((s, i) =>
          "field" in s ? (
            <mark
              key={i}
              className={[
                "x-mark",
                s.index < step && "is-on",
                linked === s.field.key && "is-linked",
              ].filter(Boolean).join(" ")}
              {...linkProps(s.field.key)}
            >
              {s.text}
            </mark>
          ) : (
            <Fragment key={i}>{s.text}</Fragment>
          ),
        )}
      </p>

      <figure className="extract-record">
        <figcaption>
          <span className="record-title">
            <span className="record-dot" aria-hidden="true" />
            Extracted profile
          </span>
          {!reducedMotion && (
            <button type="button" className="replay" onClick={() => setRun((r) => r + 1)}>
              Replay
            </button>
          )}
        </figcaption>
        <dl aria-label="Structured profile extracted from the paragraph">
          {found.map((f, i) => (
            <div
              key={f.key}
              className={[
                "record-row",
                i < step && "is-on",
                linked === f.key && "is-linked",
              ].filter(Boolean).join(" ")}
              {...linkProps(f.key)}
            >
              <dt>{label(f.key)}</dt>
              <dd>{i < step ? formatValue(f.value) : "\u00a0"}</dd>
            </div>
          ))}
        </dl>
      </figure>
    </div>
  );
}
