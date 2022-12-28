import {Dispatch} from "react";
import GridIcon from "../vectors/GridIcon";
import ListIcon from "../vectors/ListIcon";
import IconButton from "./IconButton";

function GridListBtn({
  layout,
  setLayout,
}: {
  layout: "grid" | "list";
  setLayout: Dispatch<React.SetStateAction<"grid" | "list">>;
}) {
  return (
    <div className="grid-list-wrap">
      <IconButton
        otherClasses={`${layout === "grid" ? "active-btn" : ""}`}
        icon={<GridIcon color="#777E90" />}
        onClick={() => setLayout("grid")}
      />
      <IconButton
        otherClasses={`${layout === "list" ? "active-btn" : ""}`}
        onClick={() => setLayout("list")}
        icon={<ListIcon />}
      />
    </div>
  );
}

export default GridListBtn;
