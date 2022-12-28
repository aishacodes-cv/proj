import React from 'react'
import CardLabel from '../CardLabel'
import RecentIcon from '../vectors/RecentIcon'
import './taskCardStyles.scss'

type CardProps = {
  title?: string, 
  taskDate?: string, 
  userImage?: string,
  labelType?: string,
}

const TaskCard = ({title, taskDate, userImage, labelType}: CardProps) => {
  return (
    <div className='task-card'>
      <CardLabel labelColor={labelType}/>
      <h2>{title}</h2>
      <div className='time-date-cont'>
        <div className='time-cont'>
          <RecentIcon />
          <span className='ml-3'>{taskDate}</span>
        </div>
        <img src={userImage} alt='user-img'/>
      </div>
    </div>
  )
}

export default TaskCard