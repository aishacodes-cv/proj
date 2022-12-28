import { Span } from "../../atoms/Typography"
import CloseIcon from "../../atoms/vectors/CloseIcon"
import DirectMessageUserInfo from "../../molecules/UserInfo"
import GroupMessageInfo from "../../molecules/GroupInfo"
import {currentlyViewedMessage} from '../../pages/dashboard/Messages/message.entity'
import ProfileImg from "../../atoms/ProfileImgLarge"
import ProfileImgLarge from "../../atoms/ProfileImgLarge"
import GroupIcon from "../../atoms/vectors/GroupIcon"
import MaleAvatar from "../../atoms/vectors/MaleAvatar"

type propType = {
    setCurrentlyViewedUser?: ({}) => void,
    isVisble?: boolean,
    handleInfoVisibility?: (value : boolean) => void,
    userInfoTabs: string[],
    groupInfoTabs: string[],
    selectedTab: number,
    selectedGrpMsg: number | string,
    setSelectedTab: (selectedTab: number) => void
    isActive: number | string
}

const UserInfo = ({
    isVisble = false,
    handleInfoVisibility = () => {},
    setSelectedTab,
    userInfoTabs = [],
    groupInfoTabs = [],
    selectedTab = 0,
    selectedGrpMsg,
    isActive,
} : propType) =>{

    const viewedUser = currentlyViewedMessage.use()

    return(
        <div className={`${isVisble ? 'visible' : 'invisible'} flex flex-col border-l border-solid border-cvCharcoal05 pt-[2.125rem] h-screen px-6 overflow-hidden`}>
            <div className="flex justify-end cursor-pointer" onClick={() => handleInfoVisibility(false)}>
                <CloseIcon />
            </div>
            <div className="flex flex-col items-center justify-center mt-[2.72rem]">

                <ProfileImgLarge 
                    img={viewedUser.userImgLink ? viewedUser.userImgLink : viewedUser.groupImgLink}
                    icon={!viewedUser.groupImgLink ? <GroupIcon /> : <MaleAvatar />}
                />
               
                <Span twClasses="mt-[0.675rem] font-semibold" size="text-base" color="text-cvCharcoal">
                    {viewedUser.name}
                </Span>

                <Span size="text-xs" color="text-neutral07">
                    {viewedUser.role 
                        ? viewedUser.role 
                        : viewedUser.description
                    }
                </Span>
                
                {isActive === -1
                    ? <GroupMessageInfo 
                        groupInfoTabs={groupInfoTabs} 
                        setSelectedTab={setSelectedTab} 
                        selectedTab={selectedTab}
                      />
                    : <DirectMessageUserInfo 
                        userInfoTabs = {userInfoTabs}
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                      />
                }    
            </div>
        </div>
    )
}

export default UserInfo