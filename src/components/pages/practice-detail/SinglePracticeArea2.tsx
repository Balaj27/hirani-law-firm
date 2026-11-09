import Link from "next/link";
import practices from "@/content/practice-areas.json";
import type { PracticeDetail } from "@/content/practice-details";
import { PhoneStyle12 } from "@/components/shared/PhoneStyle12";
import { PhoneStyle13 } from "@/components/shared/PhoneStyle13";
export function SinglePracticeArea2({
  practice,
}: {
  practice: PracticeDetail;
}) {
  return (
    <section
      className="framer-1kei910"
      data-framer-name="Single Practice Area"
      id="single-practice-area"
    >
      <div className="framer-jhsone" data-framer-name="Wrapper">
        <div className="framer-12azjf8" data-framer-name="Side Bar">
          <div
            className="framer-1sujun4"
            data-border="true"
            data-framer-name="Links"
          >
            <div
              className="framer-1gamx6u"
              data-framer-component-type="RichTextContainer"
              style={{ transform: "none" }}
            >
              <h6
                className="framer-text framer-styles-preset-1bfelee"
                data-styles-preset="hvBNb4W8w"
                dir="auto"
                style={{
                  "--framer-text-alignment": "left",
                  "--framer-text-color":
                    "var(--token-17b9736b-8d1c-435f-93f7-7bb710222056, rgb(136, 134, 90))",
                }}
              >
                {"Practice Areas"}
              </h6>
            </div>
            <nav aria-label="Practice areas" className="hirani-service-nav">
              {practices
                .filter((p) => p.parent || p.group === practice.group)
                .map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    aria-current={p.href === practice.href ? "page" : undefined}
                  >
                    {p.title}
                  </Link>
                ))}
            </nav>
          </div>
          <div className="framer-oybe93" data-framer-name="Founder">
            <div className="framer-1kap2nt" data-framer-name="Image">
              <div className="framer-2gbcka-container">
                <div className="ssr-variant">
                  <div
                    style={{
                      overflow: "hidden",
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      borderRadius: "0",
                    }}
                  >
                    <img
                      src="/assets/hirani-sehar-standing.webp"
                      alt="Sehar Hirani, Managing Attorney"
                      style={{
                        position: "absolute",
                        top: "0%",
                        left: "0",
                        height: "105%",
                        width: "100%",
                        objectFit: "contain",
                        borderRadius: "0",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-1mjx5ic" data-framer-name="Data">
              <div
                className="framer-x9i94b"
                data-framer-name="The Founder"
                data-framer-component-type="RichTextContainer"
                style={{ transform: "none" }}
              >
                <p
                  className="framer-text framer-styles-preset-tg9vth"
                  data-styles-preset="IwMFuo8Uw"
                  dir="auto"
                >
                  {"The founder"}
                </p>
              </div>
              <div
                className="framer-5hvghx"
                data-framer-name="Jack Edward Sr"
                data-framer-component-type="RichTextContainer"
                style={{ justifyContent: "center", transform: "none" }}
              >
                <p
                  className="framer-text framer-styles-preset-14sivo6"
                  data-styles-preset="CezYzMcjf"
                  dir="auto"
                  style={{
                    "--framer-text-color":
                      "var(--token-cd15796e-8a71-42f1-a3c9-24d9b8e85655, rgb(55, 54, 35))",
                  }}
                >
                  {"Sehar Hirani"}
                </p>
              </div>
              <div className="framer-2s514y" data-framer-name="pngegg 1">
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
                    decoding="auto"
                    loading="lazy"
                    width="688"
                    height="268"
                    sizes="(min-width: 1280px) 171px, (min-width: 810px) and (max-width: 1279.98px) 171px, (max-width: 809.98px) 171px"
                    srcSet="/assets/hirani-logo.png 500w"
                    src="/assets/hirani-logo.png"
                    alt=""
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      borderRadius: "inherit",
                      cornerShape: "inherit",
                      objectPosition: "center",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="framer-2sy0sh" data-framer-name="Contacts">
              <div className="ssr-variant hidden-bvdsni hidden-cb2ahx">
                <div className="framer-47hbxv-container">
                  <PhoneStyle12 />
                </div>
              </div>
              <div className="ssr-variant hidden-bvdsni hidden-cb2ahx">
                <div className="framer-1urx45n-container">
                  <PhoneStyle13 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="framer-fclg7h" data-framer-name="Content">
          {practice.parent && (
            <nav
              aria-label={practice.title + " services"}
              className="hirani-subservices"
            >
              {practices
                .filter((p) => p.group === practice.group && !p.parent)
                .map((p) => (
                  <Link key={p.href} href={p.href}>
                    {p.title} ↗
                  </Link>
                ))}
            </nav>
          )}
          <div className="framer-18atws3" data-framer-name="Overview">
            <div
              className="framer-cumct"
              data-framer-component-type="RichTextContainer"
              style={{ transform: "none" }}
            >
              <h6
                dir="auto"
                className="framer-text framer-styles-preset-1bfelee"
              >
                {practice.overview}
              </h6>
            </div>
            <div className="framer-8525zy" data-framer-name="Image">
              <div className="ssr-variant">
                <div
                  className="framer-9e9ge2"
                  data-framer-name="Image"
                  style={{ opacity: "1", transform: "none" }}
                >
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
                      decoding="auto"
                      width="1920"
                      height="1280"
                      sizes="(min-width: 1280px) max(max(max((min(100vw - 40px, 1440px) - 128px) / 3, 1px), (min(100vw - 40px, 1440px) - 80px) / 2), 1px), (max-width: 809.98px) max(max(min(100vw - 40px, 1440px) - 40px, (min(100vw - 40px, 1440px) - 40px) / 2), 1px), (min-width: 810px) and (max-width: 1279.98px) max(max(max((min(100vw - 40px, 1440px) - 112px) / 3, 1px), (min(100vw - 40px, 1440px) - 64px) / 2), 1px)"
                      
                      src="/assets/hirani-consultation.webp"
                      alt="Sehar Hirani and Noraly Martinez reviewing documents"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        cornerShape: "inherit",
                        objectPosition: "center",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div
              className="framer-14ilcvh-container"
              data-framer-name="Line Container"
              name="Line Container"
              style={{ transform: "rotate(180deg)" }}
            >
              <div
                name="Line Container"
                className="framer-rFjmw framer-58np7o framer-v-zkjkjp"
                data-framer-name="Line Empty"
                style={{ width: "100%", opacity: "1" }}
              >
                <div
                  className="framer-1synb04"
                  data-framer-name="Line Wrap"
                  style={{ opacity: "1" }}
                >
                  <div
                    className="framer-f5vq72"
                    data-framer-name="Line"
                    style={{
                      backgroundColor:
                        "var(--token-7ca9000c-8dbd-4bcc-9dac-66bb80f5149d, rgb(233, 233, 230))",
                      opacity: "1",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1clwhv6" data-framer-name="Capabilities">
            <div
              className="framer-17xc47v"
              data-framer-component-type="RichTextContainer"
              style={{ transform: "none" }}
            >
              <h6
                className="framer-text framer-styles-preset-1bfelee"
                data-styles-preset="hvBNb4W8w"
                dir="auto"
                style={{
                  "--framer-text-color":
                    "var(--token-cd15796e-8a71-42f1-a3c9-24d9b8e85655, rgb(55, 54, 35))",
                }}
              >
                {"Capabilities\r\n"}
              </h6>
            </div>
            <div
              className="framer-18mruxh"
              data-framer-component-type="RichTextContainer"
              style={{ transform: "none" }}
            >
              <p
                dir="auto"
                className="framer-text framer-styles-preset-14sivo6"
              >
                {
                  "Our approach is rooted in clarity, strategy, and a deep commitment to every client we represent. We begin by understanding the full context of each matter, including its legal, financial, and personal implications, so we can build a path forward with precision and purpose."
                }
              </p>
              <p
                dir="auto"
                className="framer-text framer-styles-preset-14sivo6"
              >
                {
                  "From early assessment to final resolution, we provide thoughtful guidance, transparent communication, and strong advocacy tailored to the specific needs of each case."
                }
              </p>
            </div>
            <div className="framer-193hapg" data-framer-name="Capabilities">
              <div className="ssr-variant">
                <div className="framer-19tat3j-container">
                  <div
                    className="framer-XmOj7 framer-tPU9M framer-1s77xia framer-v-1s77xia"
                    data-framer-name="Variant 1"
                    style={{ width: "100%", opacity: "1" }}
                  >
                    <div
                      className="framer-1tmv1um"
                      data-framer-name="Check Icon"
                      style={{
                        backgroundColor:
                          "var(--token-701a9c0b-a40d-4ccc-a39b-10831fcb16e9, rgb(245, 245, 241))",
                        borderRadius: "30px",
                        opacity: "1",
                      }}
                    >
                      <div
                        className="framer-Ze8tG framer-1ea0hh0"
                        style={{
                          "--ognabj":
                            "var(--token-17b9736b-8d1c-435f-93f7-7bb710222056, rgb(136, 134, 90))",
                          opacity: "1",
                        }}
                      ></div>
                    </div>
                    <div
                      className="framer-1cya023"
                      data-framer-name="Diversity of ideas for investors funds!"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        justifyContent: "center",
                        "--framer-paragraph-spacing": "0px",
                        transform: "none",
                        opacity: "1",
                      }}
                    >
                      <p
                        className="framer-text framer-styles-preset-14sivo6"
                        data-styles-preset="CezYzMcjf"
                        dir="auto"
                      >
                        {practice.capabilities[0]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div
                  className="framer-li4qyj-container"
                  data-framer-name="Line Container"
                  name="Line Container"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <div
                    name="Line Container"
                    className="framer-rFjmw framer-58np7o framer-v-zkjkjp"
                    data-framer-name="Line Empty"
                    style={{ width: "100%", opacity: "1" }}
                  >
                    <div
                      className="framer-1synb04"
                      data-framer-name="Line Wrap"
                      style={{ opacity: "1" }}
                    >
                      <div
                        className="framer-f5vq72"
                        data-framer-name="Line"
                        style={{
                          backgroundColor:
                            "var(--token-7ca9000c-8dbd-4bcc-9dac-66bb80f5149d, rgb(233, 233, 230))",
                          opacity: "1",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-1xx4gyu-container">
                  <div
                    className="framer-XmOj7 framer-tPU9M framer-1s77xia framer-v-1s77xia"
                    data-framer-name="Variant 1"
                    style={{ width: "100%", opacity: "1" }}
                  >
                    <div
                      className="framer-1tmv1um"
                      data-framer-name="Check Icon"
                      style={{
                        backgroundColor:
                          "var(--token-701a9c0b-a40d-4ccc-a39b-10831fcb16e9, rgb(245, 245, 241))",
                        borderRadius: "30px",
                        opacity: "1",
                      }}
                    >
                      <div
                        className="framer-Ze8tG framer-1ea0hh0"
                        style={{
                          "--ognabj":
                            "var(--token-17b9736b-8d1c-435f-93f7-7bb710222056, rgb(136, 134, 90))",
                          opacity: "1",
                        }}
                      ></div>
                    </div>
                    <div
                      className="framer-1cya023"
                      data-framer-name="Diversity of ideas for investors funds!"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        justifyContent: "center",
                        "--framer-paragraph-spacing": "0px",
                        transform: "none",
                        opacity: "1",
                      }}
                    >
                      <p
                        className="framer-text framer-styles-preset-14sivo6"
                        data-styles-preset="CezYzMcjf"
                        dir="auto"
                      >
                        {practice.capabilities[1]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div
                  className="framer-i8ev5f-container"
                  data-framer-name="Line Container"
                  name="Line Container"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <div
                    name="Line Container"
                    className="framer-rFjmw framer-58np7o framer-v-58np7o"
                    data-framer-name="Line Full"
                    style={{ width: "100%", opacity: "1" }}
                  >
                    <div
                      className="framer-1synb04"
                      data-framer-name="Line Wrap"
                      style={{ opacity: "1" }}
                    >
                      <div
                        className="framer-f5vq72"
                        data-framer-name="Line"
                        style={{
                          backgroundColor:
                            "var(--token-7ca9000c-8dbd-4bcc-9dac-66bb80f5149d, rgb(233, 233, 230))",
                          transform: "none",
                          transformOrigin: "50% 50% 0px",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-1wgjka1-container">
                  <div
                    className="framer-XmOj7 framer-tPU9M framer-1s77xia framer-v-1s77xia"
                    data-framer-name="Variant 1"
                    style={{ width: "100%", opacity: "1" }}
                  >
                    <div
                      className="framer-1tmv1um"
                      data-framer-name="Check Icon"
                      style={{
                        backgroundColor:
                          "var(--token-701a9c0b-a40d-4ccc-a39b-10831fcb16e9, rgb(245, 245, 241))",
                        borderRadius: "30px",
                        opacity: "1",
                      }}
                    >
                      <div
                        className="framer-Ze8tG framer-1ea0hh0"
                        style={{
                          "--ognabj":
                            "var(--token-17b9736b-8d1c-435f-93f7-7bb710222056, rgb(136, 134, 90))",
                          opacity: "1",
                        }}
                      ></div>
                    </div>
                    <div
                      className="framer-1cya023"
                      data-framer-name="Diversity of ideas for investors funds!"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        justifyContent: "center",
                        "--framer-paragraph-spacing": "0px",
                        transform: "none",
                        opacity: "1",
                      }}
                    >
                      <p
                        className="framer-text framer-styles-preset-14sivo6"
                        data-styles-preset="CezYzMcjf"
                        dir="auto"
                      >
                        {practice.capabilities[2]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div
                  className="framer-2pr826-container"
                  data-framer-name="Line Container"
                  name="Line Container"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <div
                    name="Line Container"
                    className="framer-rFjmw framer-58np7o framer-v-58np7o"
                    data-framer-name="Line Full"
                    style={{ width: "100%", opacity: "1" }}
                  >
                    <div
                      className="framer-1synb04"
                      data-framer-name="Line Wrap"
                      style={{ opacity: "1" }}
                    >
                      <div
                        className="framer-f5vq72"
                        data-framer-name="Line"
                        style={{
                          backgroundColor:
                            "var(--token-7ca9000c-8dbd-4bcc-9dac-66bb80f5149d, rgb(233, 233, 230))",
                          transform: "none",
                          transformOrigin: "50% 50% 0px",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-mw3kda-container">
                  <div
                    className="framer-XmOj7 framer-tPU9M framer-1s77xia framer-v-1s77xia"
                    data-framer-name="Variant 1"
                    style={{ width: "100%", opacity: "1" }}
                  >
                    <div
                      className="framer-1tmv1um"
                      data-framer-name="Check Icon"
                      style={{
                        backgroundColor:
                          "var(--token-701a9c0b-a40d-4ccc-a39b-10831fcb16e9, rgb(245, 245, 241))",
                        borderRadius: "30px",
                        opacity: "1",
                      }}
                    >
                      <div
                        className="framer-Ze8tG framer-1ea0hh0"
                        style={{
                          "--ognabj":
                            "var(--token-17b9736b-8d1c-435f-93f7-7bb710222056, rgb(136, 134, 90))",
                          opacity: "1",
                        }}
                      ></div>
                    </div>
                    <div
                      className="framer-1cya023"
                      data-framer-name="Diversity of ideas for investors funds!"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        justifyContent: "center",
                        "--framer-paragraph-spacing": "0px",
                        transform: "none",
                        opacity: "1",
                      }}
                    >
                      <p
                        className="framer-text framer-styles-preset-14sivo6"
                        data-styles-preset="CezYzMcjf"
                        dir="auto"
                      >
                        {practice.capabilities[3]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div
                  className="framer-e60v8b-container"
                  data-framer-name="Line Container"
                  name="Line Container"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <div
                    name="Line Container"
                    className="framer-rFjmw framer-58np7o framer-v-58np7o"
                    data-framer-name="Line Full"
                    style={{ width: "100%", opacity: "1" }}
                  >
                    <div
                      className="framer-1synb04"
                      data-framer-name="Line Wrap"
                      style={{ opacity: "1" }}
                    >
                      <div
                        className="framer-f5vq72"
                        data-framer-name="Line"
                        style={{
                          backgroundColor:
                            "var(--token-7ca9000c-8dbd-4bcc-9dac-66bb80f5149d, rgb(233, 233, 230))",
                          transform: "none",
                          transformOrigin: "50% 50% 0px",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-n8rgmu-container">
                  <div
                    className="framer-XmOj7 framer-tPU9M framer-1s77xia framer-v-1s77xia"
                    data-framer-name="Variant 1"
                    style={{ width: "100%", opacity: "1" }}
                  >
                    <div
                      className="framer-1tmv1um"
                      data-framer-name="Check Icon"
                      style={{
                        backgroundColor:
                          "var(--token-701a9c0b-a40d-4ccc-a39b-10831fcb16e9, rgb(245, 245, 241))",
                        borderRadius: "30px",
                        opacity: "1",
                      }}
                    >
                      <div
                        className="framer-Ze8tG framer-1ea0hh0"
                        style={{
                          "--ognabj":
                            "var(--token-17b9736b-8d1c-435f-93f7-7bb710222056, rgb(136, 134, 90))",
                          opacity: "1",
                        }}
                      ></div>
                    </div>
                    <div
                      className="framer-1cya023"
                      data-framer-name="Diversity of ideas for investors funds!"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        justifyContent: "center",
                        "--framer-paragraph-spacing": "0px",
                        transform: "none",
                        opacity: "1",
                      }}
                    >
                      <p
                        className="framer-text framer-styles-preset-14sivo6"
                        data-styles-preset="CezYzMcjf"
                        dir="auto"
                      >
                        {practice.capabilities[4]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div
              className="framer-13voe8d-container"
              data-framer-name="Line Container"
              name="Line Container"
              style={{ transform: "rotate(180deg)" }}
            >
              <div
                name="Line Container"
                className="framer-rFjmw framer-58np7o framer-v-58np7o"
                data-framer-name="Line Full"
                style={{ width: "100%", opacity: "1" }}
              >
                <div
                  className="framer-1synb04"
                  data-framer-name="Line Wrap"
                  style={{ opacity: "1" }}
                >
                  <div
                    className="framer-f5vq72"
                    data-framer-name="Line"
                    style={{
                      backgroundColor:
                        "var(--token-7ca9000c-8dbd-4bcc-9dac-66bb80f5149d, rgb(233, 233, 230))",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1yj1qv7" data-framer-name="Approach">
            <div
              className="framer-n0e59a"
              data-framer-component-type="RichTextContainer"
              style={{ transform: "none" }}
            >
              <h6
                className="framer-text framer-styles-preset-1bfelee"
                data-styles-preset="hvBNb4W8w"
                dir="auto"
                style={{
                  "--framer-text-color":
                    "var(--token-cd15796e-8a71-42f1-a3c9-24d9b8e85655, rgb(55, 54, 35))",
                }}
              >
                {"Our Approach"}
              </h6>
            </div>
            <div
              className="framer-sy58xk"
              data-framer-component-type="RichTextContainer"
              style={{ transform: "none" }}
            >
              <p
                dir="auto"
                className="framer-text framer-styles-preset-14sivo6"
              >
                {
                  "Our approach is rooted in clarity, strategy, and a deep commitment to every client we represent. We begin by understanding the full context of each matter, including its legal, financial, and personal implications, so we can build a path forward with precision and purpose."
                }
              </p>
              <p
                dir="auto"
                className="framer-text framer-styles-preset-14sivo6"
              >
                {
                  "From early assessment to final resolution, we provide thoughtful guidance, transparent communication, and strong advocacy tailored to the specific needs of each case."
                }
                <br className="framer-text" />
                <br className="framer-text trailing-break" />
              </p>
              <ol
                dir="auto"
                className="framer-text"
                style={{ "--max-list-digits": "1" }}
              >
                <li
                  data-preset-tag="p"
                  className="framer-text framer-styles-preset-14sivo6"
                >
                  <p className="framer-text framer-styles-preset-14sivo6">
                    {practice.approach[0]}
                  </p>
                </li>
                <li
                  data-preset-tag="p"
                  className="framer-text framer-styles-preset-14sivo6"
                >
                  <p className="framer-text framer-styles-preset-14sivo6">
                    {practice.approach[1]}
                  </p>
                </li>
                <li
                  data-preset-tag="p"
                  className="framer-text framer-styles-preset-14sivo6"
                >
                  <p className="framer-text framer-styles-preset-14sivo6">
                    {practice.approach[2]}
                  </p>
                </li>
                <li
                  data-preset-tag="p"
                  className="framer-text framer-styles-preset-14sivo6"
                >
                  <p className="framer-text framer-styles-preset-14sivo6">
                    {practice.approach[3]}
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
