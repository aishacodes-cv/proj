import { ReactElement, useEffect, useState } from "react"
import ChatSection from "../../organisms/ChatSection"
import UserInfo from "../../organisms/InfoNav"
import CreateGroupModal from "../../pages/dashboard/Messages/messageModal"
import { groupMessages } from "./messagesList"
import { H2 } from "../../atoms/Typography"
import UserList from "../../molecules/UserList"
import { initialGroupMessages, initialPersonalMessages, setCurrentlyViewedUser } from "../../pages/dashboard/Messages/message.entity"
import PlusIcon from "../../atoms/vectors/PlusIcon"
import DirectMessages from "../../organisms/MessagesNav/directMessages"
import GroupMessages from "../../organisms/MessagesNav/groupMessages"
import MessagesNav from "../../organisms/MessagesNav"

type propType = {
    children: ReactElement;
}

export type groupMessageProp = {
    groupImgLink?: string,
    name?: string,
    description?: string,
    dmSnippet?: string,
    dmTime?: string,
    sentHour?: string,
    sentMinute?: string,
    members?: {}[],
    read: boolean,
}[]

const MessageLayout = ({children}: propType) =>{
    const [isActive, setIsActive] = useState<string | number>(-1)
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedGrpMsg, setSelectedGrpMsg] = useState<string | number>(-1)
    const userInfoTabs = ['About', 'File']
    const groupInfoTabs = ['Members', 'File']
    const [isVisble, setIsVisible] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [groupMessage, setGroupMessage] = useState<groupMessageProp | undefined>()

    const directMessages = initialPersonalMessages.use()
    const groupMessages = initialGroupMessages.use()
   
    useEffect(() => {
        setGroupMessage(groupMessages)
    }, [])

    // const handleUserInfoTabClick = (index: number) => {
    //     userInfoTabs.map((tab, tbindex) => {
    //         if(index === tbindex) setSelectedTab(index)
    //     })
    // }

    const handleInfoVisibility = (value : boolean) =>{
        setIsVisible(value)
    }

    return(
        <div className={`grid ${isVisble ? 'grid-cols-[20.375rem,1fr,20.875rem]' : 'grid-cols-[20.375rem,1fr]'} pl-8 overflow-hidden`}>

            <div className="flex flex-col border-r border-solid border-cvCharcoal05 pt-[1.625rem] max-h-[100vh] overflow-hidden">
                <H2>Messages</H2>

                <MessagesNav 
                setSelectedGrpMsg={setSelectedGrpMsg}
                setIsActive={setIsActive}
                isActive={isActive}
                selectedGrpMsg={selectedGrpMsg}
                setShowModal={setShowModal}
                />
            </div>

            <CreateGroupModal showModal={showModal} setShowModal={setShowModal}/>

            <ChatSection 
                setIsVisible={setIsVisible} 
                handleInfoVisibility={handleInfoVisibility}
                isVisble={isVisble}
                children={children}
            />

            <UserInfo 
                isVisble={isVisble}
                handleInfoVisibility={handleInfoVisibility}
                setSelectedTab={setSelectedTab}
                userInfoTabs={userInfoTabs}
                selectedTab={selectedTab}
                selectedGrpMsg={selectedGrpMsg}
                groupInfoTabs={groupInfoTabs}
                isActive={isActive}
            />
        </div>
    )
}

export default MessageLayout