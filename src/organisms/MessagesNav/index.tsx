import React from 'react'
import DirectMessages from './directMessages'
import GroupMessages from './groupMessages'

type MessageNavProps = {
  setIsActive: (value: string | number) => void,
  isActive: string | number,
  selectedGrpMsg: string | number,
  setShowModal: Function,
  setSelectedGrpMsg: (value: string | number) => void,
}

const MessagesNav = ({
  setSelectedGrpMsg = () => {},
  setIsActive = () => {},
  isActive,
  selectedGrpMsg,
  setShowModal = () => {},
}: MessageNavProps) => {
  return (
    <>
      <DirectMessages 
      setSelectedGrpMsg={setSelectedGrpMsg}
      setIsActive={setIsActive}
      isActive={isActive}
      />
      <GroupMessages 
      setSelectedGrpMsg={setSelectedGrpMsg}
      setIsActive={setIsActive}
      selectedGrpMsg={selectedGrpMsg}
      setShowModal={setShowModal}
      />
    </>
  )
}

export default MessagesNav