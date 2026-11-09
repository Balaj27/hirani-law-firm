export function SharedBlock16() {
  return (
    <div
      style={{
        display: "flex",
        placeContent: "center",
        placeItems: "center",
        overflow: "hidden",
        position: "absolute",
        pointerEvents: "auto",
        left: "50%",
        top: "unset",
        transform: "translateX(-50%)",
        flexDirection: "row",
        bottom: "24px",
        borderRadius: "2px",
        backgroundColor:
          "var(--token-bdea36de-cbdf-4a10-83f7-2aa0fbb32f7f, rgb(31, 31, 21))",
        userSelect: "none",
        opacity: "1",
      }}
    >
      <button
        aria-label="Scroll to page 1"
        type="button"
        style={{
          border: "none",
          display: "flex",
          placeContent: "center",
          placeItems: "center",
          overflow: "hidden",
          background: "transparent",
          cursor: "pointer",
          margin: "0",
          padding: "0",
          paddingTop: "16px",
          paddingBottom: "16px",
          paddingInlineStart: "16px",
          paddingInlineEnd: "6px",
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            background: "white",
            cursor: "pointer",
            border: "none",
            placeContent: "center",
            placeItems: "center",
            padding: "0",
            width: "8px",
            height: "8px",
            backgroundColor:
              "var(--token-2d8dd10f-093d-46af-a75a-ef4a30e3ffdc, rgb(255, 255, 255))",
            opacity: "1",
          }}
        ></div>
      </button>
      <button
        aria-label="Scroll to page 2"
        type="button"
        style={{
          border: "none",
          display: "flex",
          placeContent: "center",
          placeItems: "center",
          overflow: "hidden",
          background: "transparent",
          cursor: "pointer",
          margin: "0",
          padding: "0",
          paddingTop: "16px",
          paddingBottom: "16px",
          paddingInlineStart: "6px",
          paddingInlineEnd: "6px",
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            background: "white",
            cursor: "pointer",
            border: "none",
            placeContent: "center",
            placeItems: "center",
            padding: "0",
            width: "8px",
            height: "8px",
            backgroundColor:
              "var(--token-2d8dd10f-093d-46af-a75a-ef4a30e3ffdc, rgb(255, 255, 255))",
            opacity: "0.5",
          }}
        ></div>
      </button>
      <button
        aria-label="Scroll to page 3"
        type="button"
        style={{
          border: "none",
          display: "flex",
          placeContent: "center",
          placeItems: "center",
          overflow: "hidden",
          background: "transparent",
          cursor: "pointer",
          margin: "0",
          padding: "0",
          paddingTop: "16px",
          paddingBottom: "16px",
          paddingInlineStart: "6px",
          paddingInlineEnd: "16px",
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            background: "white",
            cursor: "pointer",
            border: "none",
            placeContent: "center",
            placeItems: "center",
            padding: "0",
            width: "8px",
            height: "8px",
            backgroundColor:
              "var(--token-2d8dd10f-093d-46af-a75a-ef4a30e3ffdc, rgb(255, 255, 255))",
            opacity: "0.5",
          }}
        ></div>
      </button>
    </div>
  );
}
