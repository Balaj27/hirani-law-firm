import { Suffix2 } from "./Suffix2";
export function Primary() {
  return (
    <button
      type="submit"
      aria-label="Submit form"
      className="framer-M3Jkj framer-hw0mP framer-i4yt57 framer-v-i4yt57"
      data-framer-name="Primary"
      data-reset="button"
      style={{
        backgroundColor:
          "var(--token-845ef036-4905-433c-ae57-93d1f2be8742, rgb(48, 47, 32))",
        width: "100%",
        borderBottomLeftRadius: "2px",
        borderBottomRightRadius: "2px",
        borderTopLeftRadius: "2px",
        borderTopRightRadius: "2px",
        opacity: "1",
      }}
    >
      <div
        className="framer-1ks6ouv"
        data-framer-name="Text"
        data-framer-component-type="RichTextContainer"
        style={{
          "--extracted-r6o4lv":
            "var(--token-2d8dd10f-093d-46af-a75a-ef4a30e3ffdc, rgb(255, 255, 255))",
          "--framer-paragraph-spacing": "0px",
          opacity: "1",
          transform: "none",
        }}
      >
        <p
          className="framer-text framer-styles-preset-1rkvlt6"
          data-styles-preset="O2RbGSX4W"
          dir="auto"
          style={{
            "--framer-text-alignment": "center",
            "--framer-text-color":
              "var(--extracted-r6o4lv, var(--token-2d8dd10f-093d-46af-a75a-ef4a30e3ffdc, rgb(255, 255, 255)))",
          }}
        >
          {"Submit Request"}
        </p>
      </div>
      <Suffix2 />
    </button>
  );
}
