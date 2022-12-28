import React, {useState} from "react";
import DashboardLayout from "../../../templates/DashboardLayout";
import SettingsLogin from "./SettingsLogin";
import Notifications from "./Notifications";
import Profile from "./Profile";

import "./Settings.scss";
import Tab from "../../../molecules/Tab/Tabs";

const Settings = () => {
  const [activeTab, setActiveTab] = useState(0);
  const settingItems = ["Profile", "Login", "Notifications"];

  return (
    <DashboardLayout>
      <div className="Settings dashboard-inner">
        <p className="pb-8 text-cvCharcoal font-semibold text-2xl">Settings</p>
        <Tab
          tabs={settingItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <main className="flex-grow overflow-y-auto pt-4 lg:pt-10">
          {activeTab === 0 && <Profile />}
          {activeTab === 1 && <SettingsLogin />}
          {activeTab === 2 && <Notifications />}
        </main>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
