import { entity } from 'simpler-state'  
import { messages } from '../../../templates/MessageTemplate/messagesList'
import { groupMessages } from '../../../templates/MessageTemplate/messagesList'

export const initialPersonalMessages = entity(messages)

export const initialGroupMessages = entity(groupMessages)

export const currentlyViewedMessage = entity({
    userImgLink: '',
    groupImgLink: '',
    name: '',
    role: '',
    description: '',
    phoneNumber:'',
    email: '',
    dmSnippet: '',
    time: '',
    message: [{
        senderImg: '',
        senderName: '',
        message: '',
        recievedTime: '',
    }],
    groupMembers: '',
    read: false,
    userStatus: {
        online: true,
        away: false
    },
})

export const groupMembers = entity([])

export const setCurrentlyViewedUser = (user: any) =>{
    currentlyViewedMessage.set(user)
}

export const setGroupMembers = (members: any) =>{
    groupMembers.set(members)
}

export const addGroup = (newGroup: any) => {
    const newState = initialGroupMessages.get().concat(newGroup)
    initialGroupMessages.set(newState)
}

export const setChat = (chats: any) => {
    const copiedState = currentlyViewedMessage.get()
    const newState = copiedState.message.concat(chats)
    currentlyViewedMessage.set({...copiedState, message: newState})
}