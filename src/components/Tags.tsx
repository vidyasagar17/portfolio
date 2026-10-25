export function Tags({ items, label }: { items: string[]; label?: string }) {
  if (!items.length) return null;
  return (
    <ul className="tags" aria-label={label}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}
