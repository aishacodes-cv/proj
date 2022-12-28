import React, { DetailedHTMLProps } from "react";
import "./Tab.scss";

type propsType = {
  tabs: Array<{name: string; id: string} | string>;
  activeTab?: number;
  orangeType?: boolean;
  twClasses?: string;
  spanClasses?: string;
  setActiveTab: (activeTab: number) => void;
} & DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Tab = ({
  activeTab,
  setActiveTab,
  tabs,
  orangeType = false,
  twClasses,
  spanClasses,
  ...props
}: propsType) => {
  return (
    <div className={`Tabs 
        ${orangeType ? "orangeType" : ""}
        ${twClasses && twClasses}
      `} 
      {...props}
    >
      {tabs.map((tabItem, tabIndex) => {
        return (
          <span
            key={
              typeof tabItem === "string" ? `TabItem-${tabIndex}` : tabItem.id
            }
            className={`Tab 
              ${activeTab === tabIndex ? "active" : ""}
              ${spanClasses && spanClasses}
            `}
            onClick={() => setActiveTab(tabIndex)}
          >
            {typeof tabItem === "string" ? tabItem : tabItem.name}
          </span>
        );
      })}
    </div>
  );
};

export default Tab;
