import { Span } from "../../../atoms/Typography"
import MaleAvatar from "../../../atoms/vectors/MaleAvatar"
import { groupMembers } from "../../../pages/dashboard/Messages/message.entity"

const Members = () => {
    const members = groupMembers.use()
    return (
        <>
            <div className="h-[55%] overflow-auto pr-3">
                {members.map((member : any, memberIndex : number) => (
                    <div 
                        key={`dm-key-${memberIndex}`}
                        className={` bg-cvCharcoal05 cursor-pointer pl-[0.875rem] pr-3 py-2 flex items-center justify-between mt-4 rounded-lg`}
                    >
                        <div className="flex items-center">
                            {member.userImgLink ? <img src={member.userImgLink} alt="user" /> : <MaleAvatar />}
                            <div className="ml-[0.835rem] flex flex-col">
                                <Span twClasses="font-medium">
                                    {member.name}
                                </Span>
                                <Span size="text-xs" color="text-cvCharcoal40">{member.role}</Span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Members