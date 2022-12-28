import {ReactNode, useState} from "react";
import CaretRightIcon from "../vectors/CaretRightIcon";

type AccordionProps = {
  heading: string | ReactNode;
  children: ReactNode;
  showHeader?: boolean;
  open?: boolean;
  activeClass?: string;
  otherClasses?: string;
};

function Accordion({
  heading,
  showHeader = true,
  open = false,
  children,
  activeClass = "",
  otherClasses = "",
}: AccordionProps) {
  const [openAccordion, setopenAccordion] = useState(false);

  const toggleAccordion = () => {
    setopenAccordion(!openAccordion);
  };

  return (
    <div
      className={`relative bg-white rounded-2xl max-w-3xl mb-2 ${
        openAccordion ? activeClass : ""
      } ${otherClasses}`}
    >
      {showHeader && (
        <div
          role="button"
          onClick={toggleAccordion}
          className={`w-full rounded-lg px-5 ${
            open || openAccordion
              ? ""
              : "border shadow-[0px_8px_22px_rgba(151,143,175,0.08)]"
          }`}
        >
          <div
            className={`flex items-center justify-between py-5 space-x-3 ${
              open || openAccordion ? "" : "border-b"
            } `}
          >
            <span style={{flexGrow: 2}} className="font-medium text-left">
              {heading}{" "}
            </span>
            <div>
              <CaretRightIcon
                className={open || openAccordion ? "rotate-90" : "-rotate-90"}
                color="#676767"
              />
            </div>
          </div>
        </div>
      )}
      {(open || openAccordion) && (
        <div
          className={`relative overflow-hidden transition-all duration-600 pt-1`}
        >
          <div>{children}</div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
