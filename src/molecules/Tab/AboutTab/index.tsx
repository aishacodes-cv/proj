import { Span } from "../../../atoms/Typography"
import MessageIcon from "../../../atoms/vectors/Messageicon"
import PhoneIcon from "../../../atoms/vectors/PhoneIcon"
import RecentIcon from "../../../atoms/vectors/RecentIcon"
import { currentlyViewedMessage } from "../../../pages/dashboard/Messages/message.entity"

const About = () => {
    const viewedUser = currentlyViewedMessage.use()
    return (
        <div className="h-[45%] overflow-auto pr-3">
            <div className="flex items-center bg-cvCharcoal05 w-full mt-4 pl-[0.968rem] py-2 rounded-lg">
                <RecentIcon />
                <div className="flex flex-col ml-3">
                    <Span twClasses="font-normal" color="text-cvCharcoal40" size="text-xs">Last Seen Online</Span>
                    <Span twClasses="font-medium">3:50 AM GMT</Span>
                </div>
            </div>
            <div className="flex items-center bg-cvCharcoal05 w-full mt-4 pl-[0.968rem] py-2 rounded-lg">
                <PhoneIcon />
                <div className="flex flex-col ml-3">
                    <Span twClasses="font-normal" color="text-cvCharcoal40" size="text-xs">Call</Span>
                    <Span twClasses="font-medium">{viewedUser.phoneNumber}</Span>
                </div>
            </div>
            <div className="flex items-center bg-cvCharcoal05 w-full mt-4 pl-[0.968rem] py-2 rounded-lg">
                <MessageIcon />
                <div className="flex flex-col ml-3">
                    <Span twClasses="font-normal" color="text-cvCharcoal40" size="text-xs">Email</Span>
                    <Span twClasses="font-medium">{viewedUser.email}</Span>
                </div>
            </div>
        </div>
    )
}
export default About