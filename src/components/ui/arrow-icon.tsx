/** A drawn arrow avoids font/emoji substitutions on iOS and other platforms. */
export function ArrowIcon({
  direction = "up-right",
}: {
  direction?: "up-right" | "left" | "right";
}) {
  const path =
    direction === "left"
      ? "M19 12H5m7-7-7 7 7 7"
      : direction === "right"
        ? "M5 12h14m-7-7 7 7-7 7"
        : "M6 18 18 6M6 6h12v12";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      style={{
        display: "inline-block",
        width: "1em",
        height: "1em",
        flexShrink: 0,
        verticalAlign: "-0.125em",
      }}
    >
      <path d={path} />
    </svg>
  );
}
