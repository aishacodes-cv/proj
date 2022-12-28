export const H1 = ({ children }: { children: string }) => {
  return (
    <h1 className="text-4xl leading-[2.8125rem] text-cvCharcoal font-medium">
      {children}
    </h1>
  );
};

export const H2 = ({
  children,
  twClasses,
}: {
  children: string;
  twClasses?: string;
}) => {
  return (
    <h2
      className={`${
        twClasses ? twClasses : ""
      } text-2xl text-cvCharcoal font-[600]`}
    >
      {children}
    </h2>
  );
};

export const Span = ({
  children,
  color,
  size,
  twClasses,
  onClick = () => {},
}: {
  children: string | number | undefined;
  color?: string;
  size?: string;
  twClasses?: string;
  onClick?: (value: any) => void;
}) => {
  return (
    <span
      className={`${size ? size : "text-sm"} 
        ${color ? color : "text-neutral200"}
        ${twClasses ? twClasses : ""}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export const H3 = ({ children }: { children: string }) => {
  return (
    <h3 className="text-lg font-semibold text-darkBlue-400">{children}</h3>
  );
};
