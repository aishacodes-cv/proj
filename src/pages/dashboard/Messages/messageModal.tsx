 import { FormEvent, useState } from 'react'
import Button from '../../../atoms/forms/Button'
import Input, { TextArea } from '../../../atoms/forms/Input'
import { H2 } from '../../../atoms/Typography'
import './messageStyles.scss'
import { initialPersonalMessages, addGroup } from './message.entity'
import { setTime } from '../../../utils/time'
import Modal from '../../../molecules/Modal'

const date = new Date()
const hour = date.getHours()
const minute = date.getMinutes()

 const CreateGroupModal = ({showModal, setShowModal,} : {showModal:boolean, setShowModal: Function}) => {
     const messages = initialPersonalMessages.use()

     const [newGroup, setNewGroup] = useState({
        groupImgLink: '',
        name: '',
        description: '',
        dmSnippet: '',
        message:[{
            senderImg: '',
            senderName: '',
            message: '',
            recievedTime: '',
        }],
        time: setTime(),
        members: messages,
        read: true,
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        setNewGroup({...newGroup, name: '', description: '', dmSnippet: ''})
        addGroup(newGroup)
        setShowModal(false)
    }
     return (
         <Modal openModal={showModal} closeModal={() => setShowModal(false)}>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='modal-title'>
                    <H2>Create a group</H2> 
                </div>
                <Input 
                    label='Enter group name'
                    value={newGroup.name}
                    onChange={(e) => setNewGroup({...newGroup, name : e.target.value})}
                />
                <Input 
                    label='Add participant'
                    value={newGroup.dmSnippet}
                    onChange={(e) => setNewGroup({...newGroup, dmSnippet : e.target.value})}
                />
                <TextArea 
                    label='Describe this group'
                    height='h-[7.5rem]'
                    value={newGroup.description}
                    onChange={(e) => 
                        setNewGroup({...newGroup, description : e.target.value})
                    }
                />
                <div className='pt-8'>
                    <Button className='modal-create-btn' type='submit'>Create Group</Button>
                    <Button className='modal-cancel-btn' onClick={() => setShowModal(false)}>Cancel</Button>
                </div>
            </form>

         </Modal>
     )
 }

 export default CreateGroupModal