import { AccordionItem } from "@/components/ui/accordion-item";
import { Answer } from "./Answer";
export function Content10() {
  return (
    <AccordionItem
      className="framer-omi514"
      data-border="true"
      data-framer-name="Content"
      style={{
        "--border-bottom-width": "1px",
        "--border-color":
          "var(--token-7ca9000c-8dbd-4bcc-9dac-66bb80f5149d, rgb(233, 233, 230))",
        "--border-left-width": "0px",
        "--border-right-width": "0px",
        "--border-style": "solid",
        "--border-top-width": "0px",
        opacity: "1",
      }}
      question="What areas of law do you handle?"
      initialOpen="true"
    >
      <Answer />
    </AccordionItem>
  );
}
