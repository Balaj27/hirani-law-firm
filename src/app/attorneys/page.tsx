import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HeroHeader1 } from "@/components/pages/attorneys/HeroHeader1";
import { Attorneys2 } from "@/components/pages/attorneys/Attorneys2";

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/styles/attorneys.css" />
      <div
        className="framer-qp2ZF framer-z2ifeb"
        data-layout-template="true"
        style={{ minHeight: "100vh", width: "auto" }}
      >
        <div
          className="framer-ozVz4 framer-oG8KX framer-tPU9M framer-CZYhM framer-1wp14wh"
          style={{ minHeight: "100vh", width: "auto", display: "contents" }}
        >
          <SiteHeader transparent={false} />
          <main className="framer-1ykrhpj" data-framer-name="Main">
            <HeroHeader1 />
            <Attorneys2 />
          </main>
          <div className="framer-oocwze-container">
            <div></div>
          </div>
        </div>
      </div>
      <div
        id="svg-templates"
        style={{
          position: "absolute",
          overflow: "hidden",
          bottom: "0",
          left: "0",
          width: "0",
          height: "0",
          zIndex: "0",
          contain: "strict",
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 8.5 9.031" overflow="visible" id="svg1109109329_405">
          <g>
            <path
              d="M 0 8.5 L 8.5 0"
              fill="transparent"
              stroke="var(--token-845ef036-4905-433c-ae57-93d1f2be8742, rgb(48, 47, 32))"
            ></path>
            <path
              d="M 0 0 L 8.5 0 L 8.5 9.031"
              fill="transparent"
              stroke="var(--token-845ef036-4905-433c-ae57-93d1f2be8742, rgb(48, 47, 32))"
            ></path>
          </g>
        </svg>
        <svg viewBox="0 0 8.5 9.031" overflow="visible" id="svg822295041_405">
          <g>
            <path
              d="M 0 8.5 L 8.5 0"
              fill="transparent"
              stroke="var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(28, 43, 64))"
            ></path>
            <path
              d="M 0 0 L 8.5 0 L 8.5 9.031"
              fill="transparent"
              stroke="var(--token-912afcf0-a3c9-46f3-8b8f-abb463166c90, rgb(28, 43, 64))"
            ></path>
          </g>
        </svg>
        <svg
          id="2047441354"
          display="block"
          role="presentation"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 7 L 18 7 M 18 7 L 11 0 M 18 7 L 11 14"
            fill="transparent"
            height="14px"
            id="OkGDCS1yo"
            strokeDasharray=""
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="var(--1ww558a, 2)"
            stroke="var(--4rxgx6, black)"
            transform="translate(3 5)"
            width="18px"
          ></path>
        </svg>
        <svg
          id="2750456129"
          display="block"
          role="presentation"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 17.5 0.5 L 9 8 L 0.5 0.5 M 1 14 L 17 14 C 17.552 14 18 13.552 18 13 L 18 1 C 18 0.448 17.552 0 17 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 13 C 0 13.552 0.448 14 1 14 Z"
            fill="transparent"
            height="14px"
            id="Uy2fAJyQi"
            strokeDasharray=""
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="var(--1ww558a, 2)"
            stroke="var(--4rxgx6, black)"
            transform="translate(3 5)"
            width="18px"
          ></path>
        </svg>
        <svg
          id="735099669"
          display="block"
          role="presentation"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 1.511 0 L 5.15 0.132 C 5.917 0.159 6.597 0.643 6.891 1.37 L 7.967 4.032 C 8.217 4.652 8.15 5.358 7.787 5.916 L 6.408 8.037 C 7.225 9.21 9.445 11.956 11.795 13.563 L 13.548 12.485 C 13.994 12.21 14.527 12.129 15.031 12.258 L 18.516 13.152 C 19.443 13.389 20.067 14.278 19.994 15.255 L 19.77 18.238 C 19.692 19.285 18.835 20.107 17.818 19.989 C 4.392 18.428 -3.481 0 1.511 0 Z"
            fill="transparent"
            height="20.00003521378661px"
            id="Q2IdkOw9A"
            strokeDasharray=""
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="var(--1ww558a, 2)"
            stroke="var(--4rxgx6, black)"
            transform="translate(2 2)"
            width="20.000015337973462px"
          ></path>
        </svg>
      </div>
      <SiteFooter />
    </>
  );
}
