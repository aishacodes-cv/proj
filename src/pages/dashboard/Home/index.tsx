import React from "react";
import ProjectCard from "../../../atoms/ProjectCard";
import DashboardLayout from "../../../templates/DashboardLayout";
import Classes from "./classes";
import "./homeStyles.scss";
import RecentProjects from "./recentProjects";
import recentProjects from "./recentProjects";
import Tasks from "./Tasks";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="dashboard-wrapper">
        <div className="intro">
          <span>
            Welcome back, <b>Jalasem!</b>👋
          </span>
        </div>
        <div className="main grid grid-cols-1 lg:grid-cols-[60%_1fr] gap-x-16">
          <div>
            <RecentProjects />
            <Classes />
          </div>
          <Tasks />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
