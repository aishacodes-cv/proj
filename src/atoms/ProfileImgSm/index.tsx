import GroupIcon from "../vectors/GroupIcon"
import { currentlyViewedMessage } from "../../pages/dashboard/Messages/message.entity"
import { ReactElement } from "react"
import MaleAvatar from "../vectors/MaleAvatar"

const ProfileImgSm = ({img, icon}: {img?: string, icon?: ReactElement}) => {
    const viewedGroup = currentlyViewedMessage.use()
    return(
        <div className="w-12 h-12 rounded-full flex justify-center items-center">
            {img 
                ? <img src={img} alt="userImg"/>
                : icon
            }
        </div>
    )
}

export default ProfileImgSm