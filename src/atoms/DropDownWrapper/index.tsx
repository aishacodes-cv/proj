import {MutableRefObject, ReactNode, useEffect, useRef, useState} from "react";
import "./style.scss";
type Props = {
  action: ReactNode;
  children: ReactNode;
  contentPadding?: boolean;
  otherClasses?: string;
};

const DropDownWrapper = ({
  action,
  children,
  contentPadding = true,
  otherClasses,
}: Props) => {
  const [showDropDown, setshowDropDown] = useState(false);

  // remove drop down when clicking outside the component
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (showDropDown && ref.current && !ref.current.contains(e.target)) {
        setshowDropDown(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showDropDown]);

  return (
    <div ref={ref} className={`drop-down-wrapper ${otherClasses || ""}`}>
      <div
        onClick={() => setshowDropDown(!showDropDown)}
        className="drop-down-action"
      >
        {action}
      </div>
      <div
        className={`drop-down-content ${contentPadding ? "p-4" : "p-0"} ${
          showDropDown ? "show-drop-down" : ""
        } `}
      >
        {children}
      </div>
    </div>
  );
};

export default DropDownWrapper;
