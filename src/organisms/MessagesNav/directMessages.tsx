import { H2, Span } from "../../atoms/Typography"
import MaleAvatar from "../../atoms/vectors/MaleAvatar"
import PlusIcon from "../../atoms/vectors/PlusIcon"
import UserList from "../../molecules/UserList"
import { initialPersonalMessages, setCurrentlyViewedUser} from '../../pages/dashboard/Messages/message.entity'

type Props ={
    setSelectedGrpMsg?: (value : number | string) => void;
    isActive?: string | number;
    setIsActive?: (value : string | number) => void;
}

const DirectMessages = ({
    setSelectedGrpMsg = () => {},
    setIsActive = () => {},
    isActive,
}: Props) => {

    const directMessages = initialPersonalMessages.use()

    const handleMessageClick = (id: string) => {
        directMessages.map((dm, indx) => {
            if(dm.id === id) {
                setIsActive(id)
                setSelectedGrpMsg(-1)
                setCurrentlyViewedUser(dm)
            }
        } )
    }
    
    return (
        <>
             <UserList 
                renderedListItems={directMessages}
                subtitle="DIRECT MESSAGES"
                handleClick={handleMessageClick}
                isSelected={isActive}
            />
        </>
    )
}

export default DirectMessages
