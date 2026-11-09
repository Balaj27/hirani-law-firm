export function Video3() {
  return (
    <section className="framer-1x3fn3v" data-framer-name="Video" id="video">
      <div className="framer-b4tf4i" data-framer-name="Video & Images">
        <div className="ssr-variant">
          <div className="framer-1wa2jsf" data-framer-name="Image 2">
            <div
              style={{
                position: "absolute",
                borderRadius: "inherit",
                cornerShape: "inherit",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
              }}
              data-framer-background-image-wrapper="true"
            >
              <img
                decoding="async"
                loading="lazy"
                width="1000"
                height="1500"
                sizes="(min-width: 1280px) max((100vw - 48px) / 6, 1px), (max-width: 809.98px) 100vw, (min-width: 810px) and (max-width: 1279.98px) max((100vw - 24px) / 4, 1px)"
                srcSet="/assets/0e4e2e7a18e95e3e.webp 682w,/assets/7b7fd1664051fd9d.webp 1000w"
                src="/assets/7b7fd1664051fd9d.webp"
                alt="Event Image"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                  cornerShape: "inherit",
                  objectPosition: "center",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
        <div className="ssr-variant hidden-1l1auz2 hidden-ut7t9c">
          <div
            className="framer-1h4ewc3"
            data-framer-name="Video"
            style={{
              opacity: "1",
              transform: "none",
              transformOrigin: "50% 0% 0",
            }}
          >
            <div className="framer-r6oyba-container">
              <video
                src="/assets/356a9d79a7c3ba98.mp4"
                loop={true}
                preload="metadata"
                autoPlay={true}
                poster="/assets/79b51f0f57b73cd5.webp"
                muted={true}
                playsInline={true}
                style={{
                  cursor: "auto",
                  width: "100%",
                  height: "100%",
                  borderRadius: "0px",
                  display: "block",
                  objectFit: "cover",
                  backgroundColor:
                    "var(--token-bdea36de-cbdf-4a10-83f7-2aa0fbb32f7f, rgb(31, 31, 21))",
                  objectPosition: "50% 50%",
                }}
              ></video>
            </div>
          </div>
        </div>
        <div className="ssr-variant">
          <div className="framer-83fq3l" data-framer-name="Image 3">
            <div
              style={{
                position: "absolute",
                borderRadius: "inherit",
                cornerShape: "inherit",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
              }}
              data-framer-background-image-wrapper="true"
            >
              <img
                decoding="async"
                loading="lazy"
                width="1000"
                height="1500"
                sizes="(min-width: 1280px) max((100vw - 48px) / 6, 1px), (max-width: 809.98px) 100vw, (min-width: 810px) and (max-width: 1279.98px) max((100vw - 24px) / 4, 1px)"
                srcSet="/assets/948d1c89dd9daf55.webp 682w,/assets/77d850c11f53da36.webp 1000w"
                src="/assets/77d850c11f53da36.webp"
                alt="Event Image"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                  cornerShape: "inherit",
                  objectPosition: "center",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
