import { Span } from "../../atoms/Typography"
import GroupIcon from "../../atoms/vectors/GroupIcon"
import PlusIcon from "../../atoms/vectors/PlusIcon"
import UserList from "../../molecules/UserList"
import {initialGroupMessages, setCurrentlyViewedUser, setGroupMembers} from '../../pages/dashboard/Messages/message.entity'

type Props ={
    setSelectedGrpMsg?: (value : number | string) => void;
    selectedGrpMsg?: number | string;
    setIsActive?: (value : number | string) => void;
    setShowModal: Function;
}

const GroupMessages = ({
    setSelectedGrpMsg = () => {},
    setIsActive = () => {},
    selectedGrpMsg,
    setShowModal,
}:Props) => {
    const groupMessages = initialGroupMessages.use()

    const handleGrpMsgClick = (id: string) => {
        groupMessages.map((item, itemIndex) => {
            if(item.id === id) {
                setSelectedGrpMsg(item.id)
                setIsActive(-1)
                setCurrentlyViewedUser(item)
                setGroupMembers(item.members)
            }
        } )
    }

    
    return (
        <>
            <UserList 
                renderedListItems={groupMessages}
                subtitle="GROUP MESSAGES"
                handleClick={handleGrpMsgClick}
                isSelected={selectedGrpMsg}
                onClickPlusIcon={setShowModal}
            />
        </>
    )
}

export default GroupMessages