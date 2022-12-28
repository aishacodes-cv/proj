import { Span } from "../atoms/Typography"
import Tab from "./Tab/Tabs"
import Files from "./Tab/FileTabContent"
import Members from "./Tab/MemberTab"

type propType ={
    groupInfoTabs: string[],
    selectedTab: number,
    setSelectedTab: (selectedTab : number) => void,
}

const GroupMessageInfo = ({
    groupInfoTabs,
    selectedTab,
    setSelectedTab
}: propType) => {
    return(
        <>
            <Tab 
                tabs={groupInfoTabs}
                setActiveTab={setSelectedTab}
                activeTab={selectedTab}
                twClasses="w-full gap-0 mt-12"
                spanClasses="w-[8.875rem] text-center"
            />
            <div className="w-full h-screen overflow-auto">
                {selectedTab === 0 ? <Members /> : <Files />}
            </div>
        </>
    )
}

export default GroupMessageInfo