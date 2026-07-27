/**
 * Renders a schema.org payload as a JSON-LD script tag.
 *
 * `JSON.stringify` does not escape HTML, so a `<` in any field could close the
 * script element early and open an injection hole. Escaping it to its unicode
 * form here means every call site is safe by construction rather than by
 * remembering to do it.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
