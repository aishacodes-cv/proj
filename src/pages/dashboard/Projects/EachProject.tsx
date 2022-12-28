import {useState} from "react";
import DashboardLayout from "../../../templates/DashboardLayout";
import IconButton from "../../../atoms/Button/IconButton";
import Chip from "../../../atoms/Chip";
import AvatarsWrap from "../../../atoms/AvatarsWrap";
import PlusIcon from "../../../atoms/vectors/PlusIcon";
import Button from "../../../atoms/forms/Button";
import "./style.scss";
import {Column} from "./Column";
import GridListBtn from "../../../atoms/Button/GridListBtn";
import ClockIcon from "../../../atoms/vectors/ClockIcon";
import EditSquare from "../../../atoms/vectors/EditSquare";
import {Link} from "react-router-dom";
import AddTaskModal from "./AddTaskModal";
import {Tasks, Task} from ".";
import {DragDropContext, DragDropContextProps} from "react-beautiful-dnd";
import {groupArrBy} from "../../../utils";

const EachProject = () => {
  const [openModal, setopenModal] = useState(false);
  const [tasks, setTasks] = useState(groupArrBy(Tasks, "status"));

  // reorder list on drag end
  const onDragEnd: DragDropContextProps["onDragEnd"] = result => {
    const {destination, source} = result;

    if (!destination) return;
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }

    const draggedTask = {...tasks[source.droppableId][source.index]};
    setTasks(prev => {
      prev = {...prev};
      // Remove from previous items array
      prev[source.droppableId].splice(source.index, 1);
      // Adding to new items array location
      prev[destination.droppableId].splice(destination.index, 0, draggedTask);
      return prev;
    });
  };

  const [layout, setLayout] = useState<"grid" | "list">("grid");

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DashboardLayout>
        <>
          <div className="p-8 h-full overflow-y-auto">
            <p className="font-medium mb-4">
              <Link to="/projects">Projects</Link>
              <span className="text-primary">/School Management System</span>
            </p>
            <div className="heading flex justify-between items-center mb-4">
              <h1 className="heading-1">SMS</h1>
              <IconButton icon={<EditSquare />} />
            </div>
            <p className="text-darkBlue-300 max-w-[680px]">
              A platform that helps students and foreign professionals that
              don’t meet the landlord’s rental application requirements to
              qualify for a lease and have access to rental spaces.
            </p>
            <div className="flex flex-wrap justify-between mt-4 mb-8">
              <div className="flex flex-wrap justify-between pt-3">
                <Chip
                  small
                  color="text-orange-500"
                  text={
                    <div className="flex items-center space-x-2">
                      <ClockIcon /> <span> 20 JUN, 2021</span>
                    </div>
                  }
                />
                <AvatarsWrap
                  images={[
                    "/images/humanAvatar.png",
                    "/images/humanAvatar.png",
                    "/images/humanAvatar.png",
                  ]}
                />
              </div>
              <div className="flex w-full lg:w-auto items-center justify-between gap-x-4 mt-4 lg:mt-0">
                <GridListBtn layout={layout} setLayout={setLayout} />
                <Button
                  otherClasses="flex-1"
                  prefixIcon={<PlusIcon width={12} height={12} />}
                  onClick={() => setopenModal(true)}
                >
                  Add New Task
                </Button>
              </div>{" "}
            </div>

            <div className="w-full overflow-x-auto">
              <div
                className={`grid ${
                  layout === "grid"
                    ? "grid-cols-3 min-w-[1000px]"
                    : " min-w-full"
                } gap-10 h-full`}
              >
                {Object.entries(tasks).map(
                  ([status, items]: [string, Task[]], i: number) => (
                    <Column
                      statusKey={status}
                      tasks={items}
                      title={status}
                      key={status}
                      layout={layout}
                    />
                  )
                )}
              </div>
            </div>
          </div>
          <AddTaskModal openModal={openModal} setOpenModal={setopenModal} />
        </>
      </DashboardLayout>
    </DragDropContext>
  );
};

export default EachProject;
