import { Span } from "../atoms/Typography"
import Files from "./Tab/FileTabContent"
import Tab from "./Tab/Tabs"
import About from "./Tab/AboutTab"


type propType ={
    userInfoTabs: string[],
    selectedTab: number,
    setSelectedTab: (selectedTab: number) => void
}
const DirectMessageUserInfo = ({
    userInfoTabs,
    selectedTab,
    setSelectedTab,
}: propType) => {

    return(
        <>
           <Tab 
                tabs={userInfoTabs}
                setActiveTab={setSelectedTab}
                activeTab={selectedTab}
                twClasses="w-full gap-0 mt-12"
                spanClasses="w-[8.875rem] text-center"
            />
            <div className="w-full h-screen overflow-auto">
                {selectedTab === 1 ? <Files /> : <About />}
            </div>
        </>
    )
}

export default DirectMessageUserInfo