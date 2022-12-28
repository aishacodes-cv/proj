import { FormEvent, ReactElement, useState } from "react"
import { H2 } from "../../atoms/Typography"
import AddFileIcon from "../../atoms/vectors/AddFileIcon"
import InfoIcon from "../../atoms/vectors/InfoIcon"
import SmileIcon from "../../atoms/vectors/SmileIcon"
import { setTime } from "../../utils/time"
import {currentlyViewedMessage, setChat} from '../../pages/dashboard/Messages/message.entity'

type Props ={
    setIsVisible?: (value : boolean) => void;
    handleInfoVisibility?: (value : boolean) => void;
    isVisble?: boolean;
    children: ReactElement
}

const ChatSection = ({
    setIsVisible = () => {},
    handleInfoVisibility = () => {},
    isVisble,
    children,
}: Props) =>{
    const viewedUser = currentlyViewedMessage.use()

    const [newMessage, setNewMessage] = useState({
        senderImg: '',
        senderName: 'Kafilah Yusuf',
        message: '',
        recievedTime: setTime(),
    })
   
    const handleChatSubmit = (e:  FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setChat(newMessage)
        setNewMessage({...newMessage, message : ''})
    }

    return (
        <>
             <div className="bg-neutral01 flex flex-col h-screen">  

                <div className="h-16 flex items-center bg-white border-b border-solid border-cvCharcoal05 justify-between px-4">
                    <H2>{viewedUser.name}</H2>
                    {viewedUser.name && <div className={`${isVisble ? 'invisible' : 'visible'} cursor-pointer`}>
                        <InfoIcon onClick={() => handleInfoVisibility(true)}/>
                    </div>}
                </div>
                
                <div className="flex flex-col flex-grow max-w-full overflow-hidden">
                    {viewedUser.name && children}
                </div>

                {viewedUser.name && <div className="w-full flex items-center px-4 h-auto mb-36">
                        <div className="flex items-center">
                            <AddFileIcon className="cursor-pointer"/>
                            <SmileIcon className="mx-4 cursor-pointer"/>
                        </div>
                        <form onSubmit={handleChatSubmit} className="bg-neutral02 w-full flex justify-between px-4 rounded-xl py-2">
                            <textarea 
                                className="bg-neutral02 text-xl w-[80%] focus:outline-none mr-2 resize-none items-center"
                                value={newMessage.message}
                                onChange={(e) => setNewMessage({...newMessage, message: e.target.value})}
                            />
                            <button type="submit" className="bg-primary px-4 py-2 rounded-lg text-white">send</button>
                        </form>
                </div>}                                                                              
            </div>        
        </>
    )
}

export default ChatSection