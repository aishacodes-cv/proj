import {useState} from "react";
import DashboardLayout from "../../../templates/DashboardLayout";
import ProgressBar from "../../../atoms/ProgressBar";
import Chip from "../../../atoms/Chip";
import AvatarsWrap from "../../../atoms/AvatarsWrap";
import PlusIcon from "../../../atoms/vectors/PlusIcon";
import {useNavigate} from "react-router-dom";
import "./style.scss";
import Button from "../../../atoms/forms/Button";
import ClockIcon from "../../../atoms/vectors/ClockIcon";
import {Column} from "./Column";
import CaretRightIcon from "../../../atoms/vectors/CaretRightIcon";
import GridListBtn from "../../../atoms/Button/GridListBtn";
import AddTaskModal from "./AddTaskModal";
import AddProjectModal from "./AddProjectModal";
import {
  DragDropContext,
  DragDropContextProps,
  DropResult,
} from "react-beautiful-dnd";
import {groupArrBy} from "../../../utils";
export type Task = {
  title: string;
  status: "backlog" | "inProgress" | "done" | string;
  users: string[];
  id: number;
  dueDate: string;
};

export const Tasks: Task[] = [
  {
    title: "[SMS] Design Login flow",
    status: "Backlog",
    id: 1,
    dueDate: "MARCH 10 2022",
    users: [
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
    ],
  },
  {
    title: "[KOP] User Research with User Personas",
    status: "In Progress",
    id: 2,
    dueDate: "MARCH 10 2022",
    users: [
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
    ],
  },
  {
    title: "Product Discovery",
    status: "Done",
    id: 3,
    dueDate: "MARCH 10 2022",
    users: [
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
    ],
  },
  {
    title: "Implement Design UI",
    status: "Backlog",
    id: 4,
    dueDate: "MARCH 10 2022",
    users: [
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
    ],
  },
];

export const projects = [
  {
    title: "Ahround",
    totalTasks: 50,
    completedTasks: 10,
    tags: ["Design", "Front-end", "Back-end"],
    dueDate: "MARCH 10 2022",
    users: [
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
    ],
    id: 1,
  },
  {
    title: "Ahround",
    totalTasks: 50,
    completedTasks: 10,
    tags: ["Design", "Front-end", "Back-end"],
    dueDate: "MARCH 10 2022",
    users: [
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
    ],
    id: 2,
  },
  {
    title: "OVest",
    totalTasks: 50,
    completedTasks: 10,
    tags: ["Design", "Front-end", "Back-end"],
    dueDate: "MARCH 10 2022",
    users: [
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
      "/images/humanAvatar.png",
    ],
    id: 3,
  },
  {
    title: "Law Parlance",
    totalTasks: 50,
    completedTasks: 0,
    tags: ["Design", "Front-end", "Back-end"],
    dueDate: "MARCH 10 2022",
    users: ["/images/humanAvatar.png", "/images/humanAvatar.png"],
    id: 4,
  },
];

export const COLORS = ["#F09330", "#3772FF", "#0D9E63"];
export const generateRandomNum = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const Projects = () => {
  const navigate = useNavigate();
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const [openProjectModal, setOpenProjectModal] = useState(false);

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

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DashboardLayout>
        <div className="lg:p-8 p-5 h-full overflow-y-auto">
          <div className="flex items-center justify-between gap-x-4 mb-5">
            <h1 className="heading-1">Projects</h1>
            <div className="w-auto">
              <Button
                prefixIcon={<PlusIcon width={12} height={12} />}
                onClick={() => setOpenProjectModal(true)}
              >
                Add New Project
              </Button>
            </div>
          </div>
          <div className="projects-wrap mb-8">
            {projects.map((item, i) => (
              <article
                key={item.title + i}
                onClick={() => navigate("123")}
                className="taskCard projectCard"
              >
                <div className="flex justify-between items-start">
                  <h3 className="heading-2">{item.title}</h3>
                  <CaretRightIcon />
                </div>
                <div className="pt-3">
                  {item.tags.map(el => (
                    <Chip
                      color={
                        el === "Design"
                          ? "#F09330"
                          : el === "Front-end"
                          ? "#3772FF"
                          : "#1CBF7D"
                      }
                      key={el}
                      text={el}
                    />
                  ))}
                </div>
                <div className="task-progress mt-6">
                  <span className="task-progress-label mr-2">
                    Overall Progress:
                  </span>
                  <span className="task-progress-label">
                    {item.completedTasks}
                  </span>
                  <span>/{item.totalTasks} Tasks</span>
                </div>
                <ProgressBar
                  total={item.totalTasks}
                  completed={item.completedTasks}
                />
                <div className="flex flex-wrap justify-between pt-3">
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
              </article>
            ))}
          </div>

          <div className="heading flex-wrap flex justify-between items-center mb-6">
            <div className="flex gap-x-3 items-center">
              <h1 className="heading-1">All Tasks</h1>{" "}
              <span className="text-neutral">Only my tasks</span>
            </div>
            <div className="flex w-full lg:w-auto items-center justify-between gap-x-4 mt-4 lg:mt-0">
              <GridListBtn layout={layout} setLayout={setLayout} />
              <Button
                otherClasses="flex-1"
                prefixIcon={<PlusIcon width={12} height={12} />}
                onClick={() => setOpenTaskModal(true)}
              >
                Add New Task
              </Button>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <div
              className={`grid ${
                layout === "grid" ? "grid-cols-3 min-w-[1000px]" : ""
              } gap-10 h-full min-w-auto`}
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

          <AddTaskModal
            openModal={openTaskModal}
            setOpenModal={setOpenTaskModal}
          />
          <AddProjectModal
            openModal={openProjectModal}
            setOpenModal={setOpenProjectModal}
          />
        </div>
      </DashboardLayout>
    </DragDropContext>
  );
};

export default Projects;
