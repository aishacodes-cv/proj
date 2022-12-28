import React, { DetailedHTMLProps, ReactNode } from "react";
import "./Button.scss";
type propTypes = {
  twClasses?: string;
  children?: any;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  outlined?: boolean;
  color?: string;
  background?: string;
  otherClasses?: string;
} & DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({
  children,
  prefixIcon,
  outlined,
  suffixIcon,
  twClasses,
  background,
  color,
  otherClasses,
  ...props
}: propTypes) => {
  return (
    <button
      className={`Button  ${outlined ? "outline" : ""} ${otherClasses}`}
      {...props}
    >
      {prefixIcon && <div className="mr-[1.167rem]">{prefixIcon}</div>}
      {children}
      {suffixIcon && <div className="ml-[1.167rem]">{suffixIcon}</div>}
    </button>
  );
};

export default Button;
