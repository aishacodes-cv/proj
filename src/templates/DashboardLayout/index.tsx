import React, {ReactElement, useState} from "react";
import {NavLink} from "react-router-dom";
import SearchInput from "../../atoms/forms/SearchInput";
import ClassroomIcon from "../../atoms/vectors/ClassroomIcon";
import DashboardIcon from "../../atoms/vectors/DashboardIcon";
import FormIcon from "../../atoms/vectors/FormIcon";
import Logo from "../../atoms/vectors/Logo";
import MessageIcon from "../../atoms/vectors/Messageicon";
import ProjectIcon from "../../atoms/vectors/ProjectIcon";
import SettingIcon from "../../atoms/vectors/SettingIcon";
import TimeLoggerIcon from "../../atoms/vectors/TimeLoggerIcon";
import NotificationDropdown from "../../pages/dashboard/Notification/notificationDropdown";
import {showNotification} from "../../pages/dashboard/Notification/notification.entity";

import "./DashboardLayout.scss";
import DropDownWrapper from "../../atoms/DropDownWrapper";
import CloseIcon from "../../atoms/vectors/CloseIcon";
import MenuIcon from "../../atoms/vectors/MenuIcon";
import IconButton from "../../atoms/Button/IconButton";
type propTypes = {children: ReactElement};

const DashboardLayout = ({children}: propTypes) => {
  const [currentPath] = useState(window.location.pathname);
  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: DashboardIcon,
    },
    {
      name: "Time-Logger",
      path: "/timelogger",
      icon: TimeLoggerIcon,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: ProjectIcon,
    },

    {
      name: "Forms",
      path: "/forms",
      icon: FormIcon,
    },
    {
      name: "Classroom",
      path: "/classroom",
      icon: ClassroomIcon,
    },
    {
      name: "Messages",
      path: "/messages",
      icon: MessageIcon,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: SettingIcon,
    },
  ];

  const showNotifications = showNotification.use();
  const [showMenuNav, setShowMenuNav] = useState(false);

  return (
    <div className="DashboardLayout">
      <div
        onClick={() => setShowMenuNav(!showMenuNav)}
        className={showMenuNav ? "overlay" : "hidden"}
      />
      <aside className={`${showMenuNav && "open_nav"}`}>
        <IconButton
          onClick={() => setShowMenuNav(!showMenuNav)}
          icon={<CloseIcon />}
          rounded
          otherClasses="lg:hidden absolute bg-gray-300 right-4 top-6"
        />
        <div className="px-6 lg:pt-4">
          <Logo />
        </div>
        <div className="flex-grow mt-[4.31rem] flex flex-col gap-y-6">
          {navItems.map((navItem, navIndex) => {
            const active = currentPath === navItem.path;
            return (
              <NavLink
                key={navIndex}
                to={navItem.path}
                className="flex items-center space-x-4"
              >
                <navItem.icon color={active ? "#F09330" : ""} />
                <span className="text-base"> {navItem.name}</span>
              </NavLink>
            );
          })}
          <span className="flex-grow" />
          <p className="flex items-center mb-4 space-x-4 px-[1.125rem] cursor-pointer">
            <img src="/vectors/logout-icon.svg" alt="" />
            <span className="text-base"> Logout</span>
          </p>
        </div>
      </aside>
      <main className="flex flex-grow flex-col h-full overflow-hidden">
        <nav className="lg:py-8 py-4 flex items-center justify-between pl-4 lg:pl-8">
          <button
            className="lg:hidden"
            onClick={() => setShowMenuNav(!showMenuNav)}
          >
            <MenuIcon />
          </button>
          <SearchInput />
          <div className="flex items-center mx-4 ml-auto gap-x-4 justify-end">
            <DropDownWrapper
              contentPadding={false}
              action={
                <img
                  src="/vectors/notification-icon.svg"
                  alt=""
                  className="cursor-pointer"
                />
              }
            >
              <NotificationDropdown />
            </DropDownWrapper>
            <img src="/vectors/message-icon.svg" alt="" />
            <img src="/images/avatar.png" alt="" />
          </div>
        </nav>
        <section className="rounded-2xl flex-grow h-full bg-white overflow-y-hidden">
          {children}
        </section>
        <span className="h-8 w-full"></span>
      </main>
    </div>
  );
};

export default DashboardLayout;
