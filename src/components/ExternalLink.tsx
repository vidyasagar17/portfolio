import type { ComponentProps } from "react";

/** A link that opens in a new tab. Renders nothing when `href` is empty. */
export function ExternalLink({ href, ...rest }: ComponentProps<"a">) {
  if (!href) return null;
  return <a href={href} target="_blank" rel="noopener noreferrer" {...rest} />;
}
