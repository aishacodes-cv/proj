import {Draggable, Droppable} from "react-beautiful-dnd";
import {COLORS, generateRandomNum, Task} from ".";
import AvatarsWrap from "../../../atoms/AvatarsWrap";
import IconButton from "../../../atoms/Button/IconButton";
import Chip from "../../../atoms/Chip";
import ClockIcon from "../../../atoms/vectors/ClockIcon";
import MoreIcon from "../../../atoms/vectors/MoreIcon";

export const Column = ({
  title,
  statusKey,
  layout = "grid",
  tasks,
}: {
  title: string;
  statusKey: string;
  layout?: "grid" | "list";
  tasks: Task[];
}) => {
  return (
    <div className={`column column-${layout}`}>
      <div className="column-header">
        <div className="flex items-center">
          <h3 className="heading-3">{title}</h3>
          <div
            className={`px-3 py-1 ${
              layout === "list"
                ? "border-cvCharcoal border"
                : "bg-cvCharcoal text-white"
            }  text-sm rounded  ml-3`}
          >
            {tasks.length}
          </div>
        </div>
        <IconButton
          otherClasses="bg-[#200e326c]"
          icon={
            <MoreIcon
              color="#200E32"
              style={{transform: "rotate(90deg)"}}
              className="w-4 h-4"
            />
          }
        />
      </div>
      <Droppable droppableId={statusKey}>
        {provided => (
          <>
            <div
              className="column-items"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks.map((item, i) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={i}
                >
                  {({innerRef, draggableProps, dragHandleProps}) => (
                    <div
                      ref={innerRef}
                      {...draggableProps}
                      {...dragHandleProps}
                      className={`taskCard ${layout || ""}`}
                    >
                      <div
                        className={`${
                          layout === "list" ? "flex space-x-2" : ""
                        } h-full`}
                      >
                        <div
                          style={{
                            backgroundColor: COLORS[i],
                          }}
                          className={`${
                            layout === "list"
                              ? "h-[24px] w-[8px]"
                              : "h-[8px] w-[47px]"
                          } rounded-full mb-2`}
                        />
                        <h3 className="heading-3">{item.title}</h3>
                      </div>

                      <div className="card-footer">
                        <Chip
                          small
                          color="text-orange-500"
                          text={
                            <div className="flex items-center space-x-2">
                              <ClockIcon /> <span>{item.dueDate}</span>
                            </div>
                          }
                        />
                        <AvatarsWrap images={[...item.users]} />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          </>
        )}
      </Droppable>
    </div>
  );
};
