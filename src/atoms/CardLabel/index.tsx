import React from 'react'

const CardLabel = ({labelColor}:{labelColor?: string}) => {
 
  return (
    <div className={`h-[8px] w-[2.937rem] ${labelColor} rounded`}></div>
  )
}

export default CardLabel