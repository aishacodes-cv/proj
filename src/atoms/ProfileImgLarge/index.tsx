import GroupIcon from "../vectors/GroupIcon"
import { currentlyViewedMessage } from "../../pages/dashboard/Messages/message.entity"
import { ReactElement } from "react"
import MaleAvatar from "../vectors/MaleAvatar"

const ProfileImgLarge = ({img, icon}: {img: string, icon?: ReactElement}) => {
    const viewedGroup = currentlyViewedMessage.use()
    return(
        <div className="w-[5.41rem] h-[5.41rem] rounded-full flex justify-center items-center">
            {img 
                ? <img src={img} alt="userImg" className="w-[5.41rem] h-[5.41rem] rounded-full"/>
                : icon
            }
        </div>
    )
}

export default ProfileImgLarge