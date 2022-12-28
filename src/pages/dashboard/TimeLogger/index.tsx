import React, {SyntheticEvent, useState} from "react";
import IconButton from "../../../atoms/Button/IconButton";
import Chip from "../../../atoms/Chip";
import Select from "../../../atoms/forms/Select";
import MoreIcon from "../../../atoms/vectors/MoreIcon";
import NoentryIcon from "../../../atoms/vectors/NoentryIcon";
import TimeLoggerPlus from "../../../atoms/vectors/TimeLoggerPlus";
import DashboardLayout from "../../../templates/DashboardLayout";
import "./style.scss";
import KeyboardIcon from "../../../atoms/vectors/KeyboardIcon";
import Timer from "./Widgets/Timer";
import AutoComplete from "./Widgets/AutoComplete";
import AddProjectDropDown from "./Widgets/AddPojectDropDown";
import AddTagDropDown from "./Widgets/AddTagDropDown";
import StaticDatePickerDemo from "../../../atoms/DatePricker";
import DropDownWrapper from "../../../atoms/DropDownWrapper";
import Input from "../../../atoms/forms/Input";

const TimeLogger = () => {
  const [taskLogs, setTaskLogs] = useState(
    Array(4).fill({
      task: "Design Login flow",
      timeSpent: "13 hrs 50 mins",
      timeLapse: "11:10AM - 12:30PM",
    })
  );

  const [formData, setformData] = useState({
    tag: "",
    project: "",
    task: "",
    time: 0,
  });

  const onChangeHandler = (val: string | number, name: string) => {
    setformData(prev => ({
      ...prev,
      [name]: val,
    }));
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <DashboardLayout>
      <div className="dashboard-inner pg-time-logger">
        <form
          onSubmit={onSubmit}
          className="flex flex-wrap gap-x-4 gap-y-5 mb-10 items-center"
        >
          <AutoComplete
            dropValue={formData.task}
            onDropValueChange={val => onChangeHandler(val, "task")}
            suggestions={[
              {
                projectName: "SMS",
                taskName: "Design Login flow",
              },
              {
                projectName: "KOP",
                taskName: "UX Research",
              },
              {
                projectName: "SMS",
                taskName: "Login Flow Implementation",
              },
            ]}
          />
          <AddProjectDropDown
            dropValue={formData.project}
            onDropValueChange={val => onChangeHandler(val, "project")}
          />
          <AddTagDropDown
            dropValue={formData.tag}
            onDropValueChange={val => onChangeHandler(val, "tag")}
          />
          <Timer
            time={formData.time}
            onTimeChange={val => onChangeHandler(val, "time")}
          />
          <DropDownWrapper
            otherClasses="manual-time ml-auto"
            action={
              <IconButton
                icon={<KeyboardIcon width={28} height={24} />}
                otherClasses="bg-cvCharcoal05 w-[38px] h-[38px]"
                style={{padding: 5, marginLeft: "1.2rem"}}
              />
            }
          >
            <div>
              <div className="flex space-x-3 input-wrap">
                <div>
                  <label htmlFor="start" className="font-medium">
                    Start
                  </label>
                  <Input type="time" id="start" />
                </div>
                <div>
                  <label htmlFor="stop" className="font-medium">
                    Stop
                  </label>
                  <Input type="time" id="stop" />
                </div>
              </div>
              <div className="-mt-4">
                <StaticDatePickerDemo maxDate={new Date()} />
              </div>
            </div>
          </DropDownWrapper>
        </form>
        {taskLogs.length <= 0 ? (
          <div className="flex justify-center items-center flex-col h-[85%]">
            <NoentryIcon />
            <p className="text-base font-medium">
              You haven’t logged any entries yet
            </p>
          </div>
        ) : (
          <div className="log-entries">
            <div className="flex flex-wrap gap-2 justify-between mb-4">
              <div className="flex justify-between md:justify-start gap-x-3 flex-grow">
                <h1 className="heading-1">Log Entries</h1>
                <div className="min-w-[130px]">
                  <Select placeholder="This Week" options={["Last Week"]} />
                </div>
              </div>
              <h1 className="heading-1">Total: 23 hrs 50</h1>
            </div>

            <div className={`column column-list`}>
              <div className="column-header">
                <div className="flex items-center">
                  <h3 className="heading-3">{"Today"}</h3>
                  <div
                    className={`px-3 py-1 border-cvCharcoal border text-sm rounded  ml-3`}
                  >
                    {taskLogs.length}
                  </div>
                </div>
              </div>
              <>
                <div className="column-items">
                  {taskLogs.map((item, i) => (
                    <div
                      key={item.task + i}
                      className={`taskCard md:text-base text-sm list`}
                    >
                      <div className={`flex gap-x-2 h-full items-center`}>
                        <h3 className="heading-3">{item.task}</h3>

                        <Chip small color="text-orange-500" text={"SMS"} />
                      </div>

                      <div className="flex gap-x-4 justify-between md:gap-x-5 h-full items-center">
                        <p className="text-[#676767]">{item.timeLapse}</p>
                        <p className="font-medium">{item.timeSpent}</p>
                        <IconButton
                          otherClasses="bg-primary"
                          icon={<TimeLoggerPlus />}
                        />
                        <IconButton
                          otherClasses="hover:bg-cvCharcoal05"
                          rounded
                          icon={<MoreIcon />}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default TimeLogger;
