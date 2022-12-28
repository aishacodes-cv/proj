import Button from "../../../atoms/forms/Button";
import { Span } from "../../../atoms/Typography";
import MaleAvatar from "../../../atoms/vectors/MaleAvatar";
import DashboardLayout from "../../../templates/DashboardLayout";
import MessageLayout from "../../../templates/MessageTemplate";
import './messageStyles.scss'
import { currentlyViewedMessage } from "./message.entity";

const Messages = () => {
  const viewedMessage = currentlyViewedMessage.use()
  const messages = viewedMessage.message
  return (
    <DashboardLayout>
      <MessageLayout>
        <div className="flex-grow-0 overflow-auto">
          <div className=" w-full flex items-center justify-center">
            <Button className="Load-conversation-btn">
              Load Conversation
            </Button>
          </div>
          <div className="ml-[1.148rem] mt-[1.88rem] flex flex-col mb-8">
            {messages.map((chat, chatindex) => (
                <div key={`key-${chatindex}`} className="flex mt-8">
                  <div className="h-10 w-10">
                    {chat.senderImg
                      ? <img src={chat.senderImg} alt='img'/>
                      : <MaleAvatar />
                    }
                  </div>
                      
                  <div className="ml-[0.8437rem] max-w-[70%]">
                    <div>
                      <Span size="text-base" color="text-neutral04" twClasses="font-bold">
                        {chat.senderName}
                      </Span>
                      <span className="text-base text-neutral04 font-bold ml-3">
                        {chat.recievedTime}
                      </span>
                    </div>
                    <Span twClasses="font-semibold" color="text-neutral07">{chat.message}</Span>
                  </div> 
                </div>
                  
            ))}
          </div>
        </div>
      </MessageLayout>
    </DashboardLayout>
  );
};



export default Messages;
